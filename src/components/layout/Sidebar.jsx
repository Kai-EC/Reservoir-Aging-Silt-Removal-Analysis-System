import React from 'react';
import { Waves, Activity, Cuboid, Anchor, History, Server } from 'lucide-react';

const NavItem = ({ id, icon: Icon, label, currentView, setCurrentView }) => (
  <button 
    onClick={() => setCurrentView(id)}
    className={`w-full flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-3 rounded-lg font-medium transition-colors group ${
      currentView === id 
        ? 'bg-sky-500/10 text-sky-400' 
        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
    }`}
  >
    <Icon size={20} className={`group-hover:scale-110 transition-transform ${currentView === id ? 'text-sky-400' : ''}`} />
    <span className="hidden md:block">{label}</span>
  </button>
);

export default function Sidebar({ currentView, setCurrentView }) {
  return (
    <aside className="w-16 md:w-64 bg-slate-800 border-r border-slate-700 flex flex-col flex-shrink-0 z-20">
      <div className="p-4 md:p-6 border-b border-slate-700 flex items-center justify-center md:justify-start gap-3">
        <Waves className="text-sky-400" size={28} />
        <h1 className="text-white font-bold text-lg tracking-wider hidden md:block">Hydro-Agent</h1>
      </div>
      <nav className="flex-1 px-2 md:px-4 py-6 space-y-2 overflow-y-auto">
        <NavItem id="dashboard" icon={Activity} label="全區即時監控" currentView={currentView} setCurrentView={setCurrentView} />
        <NavItem id="twin" icon={Cuboid} label="3D 數位孿生平台" currentView={currentView} setCurrentView={setCurrentView} />
        <NavItem id="fleet" icon={Anchor} label="智慧清淤調度" currentView={currentView} setCurrentView={setCurrentView} />
        <NavItem id="history" icon={History} label="歷史時序查詢" currentView={currentView} setCurrentView={setCurrentView} />
      </nav>
      <div className="p-4 border-t border-slate-700 text-sm hidden md:block bg-slate-800">
        <div className="flex items-center justify-between text-slate-400">
          <span className="flex items-center gap-2"><Server size={14}/> 系統狀態</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></span> 正常連線
          </span>
        </div>
      </div>
    </aside>
  );
}
