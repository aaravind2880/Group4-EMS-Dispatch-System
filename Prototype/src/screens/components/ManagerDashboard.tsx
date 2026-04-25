import { Activity, TrendingUp, Clock, AlertTriangle, Phone, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ManagerDashboard() {
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Auto-refresh every 5 minutes
    const interval = setInterval(() => {
      setLastRefresh(new Date());
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      label: 'AI Accuracy Rate',
      value: '87.3%',
      change: '+2.1%',
      trend: 'up',
      icon: Activity,
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      label: 'Non-Transport Dispatch %',
      value: '8.2%',
      change: '-1.3%',
      trend: 'down',
      icon: TrendingUp,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      label: 'Avg Call Handling Time',
      value: '74s',
      change: '-8s',
      trend: 'down',
      icon: Clock,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      label: 'Call Volume (24h)',
      value: '156',
      change: '+12',
      trend: 'up',
      icon: Phone,
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
  ];

  const weeklyData = [
    { day: 'Mon', accuracy: 85, nonTransport: 9, avgTime: 78, volume: 142 },
    { day: 'Tue', accuracy: 86, nonTransport: 8.5, avgTime: 76, volume: 148 },
    { day: 'Wed', accuracy: 87, nonTransport: 8.8, avgTime: 75, volume: 151 },
    { day: 'Thu', accuracy: 88, nonTransport: 8.2, avgTime: 74, volume: 156 },
    { day: 'Fri', accuracy: 87.3, nonTransport: 8.2, avgTime: 74, volume: 156 },
  ];

  const recentCalls = [
    { id: 'TZ-1547', time: '14:23', classification: 'AMI', confidence: 92, outcome: 'Correct', transport: 'Yes' },
    { id: 'TZ-1546', time: '14:18', classification: 'Non-AMI', confidence: 78, outcome: 'Correct', transport: 'No' },
    { id: 'TZ-1545', time: '14:12', classification: 'AMI', confidence: 89, outcome: 'Correct', transport: 'Yes' },
    { id: 'TZ-1544', time: '14:05', classification: 'Non-AMI', confidence: 82, outcome: 'Incorrect', transport: 'Yes' },
    { id: 'TZ-1543', time: '13:58', classification: 'AMI', confidence: 94, outcome: 'Correct', transport: 'Yes' },
  ];

  return (
    <div className="size-full bg-gray-50 overflow-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900">AI Triage Performance Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">NNSWLHD Dispatch Centre - Manager View</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-500">Last Refresh</p>
              <p className="text-sm text-gray-700">{lastRefresh.toLocaleTimeString()}</p>
            </div>
            <button
              onClick={() => setLastRefresh(new Date())}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Now
            </button>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-[1800px] mx-auto space-y-6">
        {/* False Negative Alert */}
        {showAlert && (
          <div className="bg-red-50 border-l-4 border-l-red-600 rounded-lg p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-red-900 mb-1">Alert: False Negative Rate Threshold Exceeded</h3>
                  <p className="text-sm text-red-800 mb-3">
                    False negative rate has reached <strong>6.2%</strong> over the rolling 7-day period (threshold: 5.0%)
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-red-700">
                      ✓ Email alert sent to: clinical.specialist@health.nsw.gov.au, is.developer@health.nsw.gov.au
                    </p>
                    <p className="text-sm text-red-700">
                      ✓ Alert logged in IMS+ for NSQHS compliance audit at {new Date().toLocaleString()}
                    </p>
                    <p className="text-sm text-red-700">
                      ✓ Model retraining review recommended
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowAlert(false)}
                className="text-red-600 hover:text-red-800 text-2xl leading-none"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isPositive = metric.trend === 'up' ?
              (metric.label.includes('Accuracy') || metric.label.includes('Volume')) :
              (metric.label.includes('Non-Transport') || metric.label.includes('Time'));

            return (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg border ${metric.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                <p className="text-3xl text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Weekly Trend Chart */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-gray-900">7-Day Performance Trend</h2>
            <p className="text-sm text-gray-500 mt-1">Rolling metrics updated every 5 minutes</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {/* AI Accuracy Chart */}
              <div>
                <h3 className="text-sm text-gray-700 mb-3">AI Accuracy Rate (%)</h3>
                <div className="flex items-end gap-4 h-32">
                  {weeklyData.map((day, index) => {
                    const getAccuracyColor = (accuracy: number) => {
                      if (accuracy >= 87) return 'bg-green-500';
                      if (accuracy >= 85) return 'bg-yellow-500';
                      return 'bg-red-500';
                    };
                    const getTextColor = (accuracy: number) => {
                      if (accuracy >= 87) return 'text-green-600';
                      if (accuracy >= 85) return 'text-yellow-600';
                      return 'text-red-600';
                    };
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gray-100 rounded-t relative" style={{ height: '128px' }}>
                          <div
                            className={`absolute bottom-0 w-full rounded-t transition-all ${getAccuracyColor(day.accuracy)}`}
                            style={{ height: `${day.accuracy}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600 mt-2">{day.day}</span>
                        <span className={`text-xs ${getTextColor(day.accuracy)}`}>{day.accuracy}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Average Handling Time Chart */}
              <div>
                <h3 className="text-sm text-gray-700 mb-3">Average Call Handling Time (seconds)</h3>
                <div className="flex items-end gap-4 h-32">
                  {weeklyData.map((day, index) => {
                    const getTimeColor = (time: number) => {
                      if (time <= 75) return 'bg-green-500';
                      if (time <= 90) return 'bg-blue-500';
                      return 'bg-orange-500';
                    };
                    const getTextColor = (time: number) => {
                      if (time <= 75) return 'text-green-600';
                      if (time <= 90) return 'text-blue-600';
                      return 'text-orange-600';
                    };
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gray-100 rounded-t relative" style={{ height: '128px' }}>
                          <div
                            className={`absolute bottom-0 w-full rounded-t transition-all ${getTimeColor(day.avgTime)}`}
                            style={{ height: `${(day.avgTime / 100) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600 mt-2">{day.day}</span>
                        <span className={`text-xs ${getTextColor(day.avgTime)}`}>{day.avgTime}s</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Calls Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-gray-900">Recent Call Log</h2>
            <p className="text-sm text-gray-500 mt-1">Last 5 calls with AI classification outcomes</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Call ID</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Time</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">AI Classification</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Confidence</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Outcome</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Transport</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentCalls.map((call, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-mono">{call.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{call.time}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs ${
                        call.classification === 'AMI'
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}>
                        {call.classification}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{call.confidence}%</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs ${
                        call.outcome === 'Correct'
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-red-100 text-red-700 border border-red-200'
                      }`}>
                        {call.outcome}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{call.transport}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Model Performance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Model Training Data</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Data Period:</span>
                <span className="text-sm text-gray-900">2021-2024 (3 years)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Source:</span>
                <span className="text-sm text-gray-900">NNSWLHD AMI calls</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Last Retrain:</span>
                <span className="text-sm text-gray-900">2026-04-01</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Validation Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Sensitivity:</span>
                <span className="text-sm text-green-700 flex items-center gap-1">
                  <Activity className="w-4 h-4" />
                  87.3% ✓
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Target:</span>
                <span className="text-sm text-gray-900">≥85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Validated By:</span>
                <span className="text-sm text-gray-900">Dr. J. Smith</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">False Negative Rate</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Current (7-day):</span>
                <span className="text-sm text-red-700">6.2% ⚠</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Threshold:</span>
                <span className="text-sm text-gray-900">5.0%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Status:</span>
                <span className="text-sm text-red-700">Review Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
