import React from 'react';
import { Waves, Database, AlertTriangle, CheckCircle, Cpu, Leaf } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BackendService } from '../../services/api';

export default function Dashboard({ reservoirData, showNotify }) {
  const aiData = BackendService.getAIPredictionData();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* 指標卡片區塊 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-4">
            <div className="text-slate-400 text-sm font-medium">即時大壩水位 (m)</div>
            <Waves className="text-sky-400 opacity-50" size={24} />
          </div>
          <div className="text-3xl font-bold text-white">
            {reservoirData ? reservoirData.WaterLevel : '--.--'}
          </div>
        </div>
        {/* 其他卡片同理移植... */}
      </div>

      {/* 圖表與決策區塊 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-4 md:p-6 rounded-xl border border-slate-700 shadow-lg xl:col-span-2">
           {/* Recharts 移植於此 */}
        </div>
        <div className="bg-slate-800 p-4 md:p-6 rounded-xl border border-slate-700 shadow-lg flex flex-col">
          <button onClick={() => showNotify('已授權！現地 Edge Gateway 正在將閥門微調至 85%...')} className="...">
            <Cpu size={18} /> 授權 AI 微調閥門
          </button>
        </div>
      </div>
    </div>
  );
}
