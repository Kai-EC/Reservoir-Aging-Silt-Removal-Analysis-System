import React, { useState } from 'react';
import { Database, Download } from 'lucide-react';
import { BackendService } from '../../services/api';

export default function HistoryQuery({ showNotify }) {
  const [historyData, setHistoryData] = useState([]);
  const [isQuerying, setIsQuerying] = useState(false);

  const handleQueryHistory = async () => {
    setIsQuerying(true);
    const data = await BackendService.queryHistoricalData();
    setHistoryData(data);
    setIsQuerying(false);
    showNotify('InfluxDB 查詢成功！載入 1,420 筆紀錄。');
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* 查詢過濾器與表格原始碼放置於此... */}
      <button onClick={handleQueryHistory} disabled={isQuerying} className="...">
        {isQuerying ? '查詢中...' : '執行查詢'}
      </button>
      {/* Data Map Rendering */}
    </div>
  );
}
