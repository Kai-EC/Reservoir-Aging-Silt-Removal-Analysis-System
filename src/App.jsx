import React, { useState, useEffect } from 'react';
import { BackendService } from './services/api';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Toast from './components/common/Toast';

// 匯入各個畫面視圖 (依實際路徑調整)
import Dashboard from './components/views/Dashboard';
import DigitalTwin from './components/views/DigitalTwin';
import FleetManager from './components/views/FleetManager';
import HistoryQuery from './components/views/HistoryQuery';

export default function HydroAgentApp() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [notification, setNotification] = useState(null);
  const [reservoirData, setReservoirData] = useState(null);

  useEffect(() => {
    BackendService.fetchRealReservoirData().then(data => {
      setReservoirData(data);
    });
  }, []);

  const showNotify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const renderView = () => {
    switch(currentView) {
      case 'dashboard':
        return <Dashboard reservoirData={reservoirData} showNotify={showNotify} />;
      case 'twin':
        return <DigitalTwin showNotify={showNotify} />;
      case 'fleet':
        return <FleetManager showNotify={showNotify} />;
      case 'history':
        return <HistoryQuery showNotify={showNotify} />;
      default:
        return <Dashboard reservoirData={reservoirData} showNotify={showNotify} />;
    }
  };

  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased h-screen flex overflow-hidden selection:bg-sky-500/30">
      <Toast message={notification} />
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Header reservoirData={reservoirData} />
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth">
          {renderView()}
        </div>
      </main>
    </div>
  );
}
