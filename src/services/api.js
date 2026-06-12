export class BackendService {
  static async fetchRealReservoirData() {
    const fallbackData = {
      WaterLevel: 224.15,
      EffectiveCapacity: 38241.5,
      PercentageOfCapacity: 75.4,
      ObservationTime: new Date().toISOString(),
      Status: 'cors_fallback'
    };

    try {
      const res = await fetch('https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Condition?$filter=StationNo%20eq%20%2730502%27&$format=json');
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) {
          return { ...data[0], Status: 'real_api' };
        }
      }
    } catch (error) {
      console.warn("API CORS 限制，啟用離線快取資料");
    }
    return fallbackData;
  }

  static getAIPredictionData() {
    return [
      { time: '-60m', actual: 200, aiPredict: null },
      { time: '-45m', actual: 350, aiPredict: null },
      { time: '-30m', actual: 800, aiPredict: null },
      { time: '-15m', actual: 1500, aiPredict: null },
      { time: '現在', actual: 2450, aiPredict: 2450 },
      { time: '+15m', actual: null, aiPredict: 3800 },
      { time: '+30m', actual: null, aiPredict: 4500 },
      { time: '+45m', actual: null, aiPredict: 3200 },
      { time: '+60m', actual: null, aiPredict: 1800 }
    ];
  }

  static async queryHistoricalData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { time: '2026-06-12 09:20', station: 'TW-TSW-04', ntu: 2450.5, ss: 1820.0, status: '警戒' },
          { time: '2026-06-12 09:10', station: 'TW-TSW-04', ntu: 1500.0, ss: 1100.2, status: '警戒' },
          { time: '2026-06-12 09:00', station: 'TW-TSW-04', ntu: 800.0, ss: 540.5, status: '正常' },
          { time: '2026-06-12 08:50', station: 'TW-TSW-04', ntu: 350.0, ss: 210.0, status: '正常' },
          { time: '2026-06-12 08:40', station: 'TW-TSW-04', ntu: 200.0, ss: 120.5, status: '正常' },
        ]);
      }, 600);
    });
  }
}
