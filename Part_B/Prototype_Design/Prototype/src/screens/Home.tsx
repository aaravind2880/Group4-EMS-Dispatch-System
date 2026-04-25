import { useState } from 'react';
import { Phone, FileCheck, Ambulance, Hospital, BarChart3 } from 'lucide-react';
import { DispatcherTriageScreen } from './components/DispatcherTriageScreen';
import { DispatcherOverrideScreen } from './components/DispatcherOverrideScreen';
import { AmbulanceTerminal } from './components/AmbulanceTerminal';
import { HospitalPrenotification } from './components/HospitalPrenotification';
import { ManagerDashboard } from './components/ManagerDashboard';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('triage');

  const screens = [
    { id: 'triage', name: 'Dispatcher Triage', icon: Phone, component: DispatcherTriageScreen },
    { id: 'override', name: 'Dispatch Decision', icon: FileCheck, component: DispatcherOverrideScreen },
    { id: 'ambulance', name: 'Ambulance Terminal', icon: Ambulance, component: AmbulanceTerminal },
    { id: 'hospital', name: 'Hospital ED', icon: Hospital, component: HospitalPrenotification },
    { id: 'dashboard', name: 'Manager Dashboard', icon: BarChart3, component: ManagerDashboard },
  ];

  const ActiveComponent = screens.find(s => s.id === activeScreen)?.component || DispatcherTriageScreen;

  return (
    <div className="size-full flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-300 shadow-sm">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl text-gray-900">AI Triage System</h1>
              <p className="text-xs text-gray-500 mt-0.5">Northern NSW Local Health District</p>
            </div>
            <div className="px-3 py-1.5 bg-green-50 border border-green-200 rounded">
              <span className="text-xs text-green-700">System Operational</span>
            </div>
          </div>

          <div className="flex gap-2">
            {screens.map((screen) => {
              const Icon = screen.icon;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeScreen === screen.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{screen.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Active Screen */}
      <div className="flex-1 overflow-hidden">
        <ActiveComponent />
      </div>
    </div>
  );
}