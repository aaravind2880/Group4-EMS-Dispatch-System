import { Hospital, CheckCircle, Clock, Phone, Navigation, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export function HospitalPrenotification() {
  const [acknowledged, setAcknowledged] = useState(false);

  const sentTime = new Date();
  const eta = new Date(sentTime.getTime() + 10 * 60000); // 10 minutes ETA
  const acknowledgedTime = acknowledged ? new Date() : null;

  return (
    <div className="size-full bg-gray-50 overflow-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Hospital className="w-6 h-6 text-blue-600" />
            <div>
              <h1 className="text-gray-900">Emergency Department Pre-Notification</h1>
              <p className="text-sm text-gray-500">John Hunter Hospital - Emergency Department</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {acknowledged ? (
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700">Acknowledged</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded animate-pulse">
                <Clock className="w-4 h-4 text-yellow-600" />
                <span className="text-sm text-yellow-700">Awaiting Acknowledgement</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-6 max-w-[1200px] mx-auto space-y-6">
        {/* Connection Status */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-blue-900">API Connection Established</p>
              <p className="text-sm text-blue-700">Connected to NNSWLHD facility network (12/12 facilities online)</p>
            </div>
          </div>
        </div>

        {/* Pre-notification Alert */}
        <div className="bg-red-50 border-l-4 border-l-red-600 rounded-lg overflow-hidden shadow-lg">
          <div className="px-6 py-4 bg-red-100 border-b border-red-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-700" />
                <div>
                  <h2 className="text-red-900">INCOMING AMI PATIENT</h2>
                  <p className="text-sm text-red-700">Pre-notification sent {Math.floor((new Date().getTime() - sentTime.getTime()) / 1000)}s after dispatch</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-red-700">Notification ID</p>
                <p className="text-sm text-red-900 font-mono">PRE-2026-04-24-1547</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* AI Classification */}
            <div className="mb-6">
              <h3 className="text-gray-900 mb-3">AI Classification</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-red-200 rounded p-4">
                  <p className="text-sm text-gray-600 mb-1">Classification</p>
                  <p className="text-xl text-red-700">ACUTE MYOCARDIAL INFARCTION (AMI)</p>
                </div>
                <div className="bg-white border border-red-200 rounded p-4">
                  <p className="text-sm text-gray-600 mb-1">Confidence Score</p>
                  <p className="text-xl text-red-700">92%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ETA */}
            <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded p-4">
              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-yellow-700" />
                <div>
                  <p className="text-sm text-yellow-800">Estimated Time of Arrival</p>
                  <p className="text-2xl text-yellow-900">{eta.toLocaleTimeString()}</p>
                  <p className="text-sm text-yellow-700 mt-1">Approximately 10 minutes from dispatch</p>
                </div>
              </div>
            </div>

            {/* Patient Information */}
            <div className="mb-6">
              <h3 className="text-gray-900 mb-3">Patient Information</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white border border-red-200 rounded p-3">
                  <p className="text-xs text-gray-600 mb-1">Age</p>
                  <p className="text-lg text-gray-900">58 years</p>
                </div>
                <div className="bg-white border border-red-200 rounded p-3">
                  <p className="text-xs text-gray-600 mb-1">Gender</p>
                  <p className="text-lg text-gray-900">Male</p>
                </div>
              </div>
            </div>

            {/* Key Symptoms */}
            <div className="mb-6">
              <h3 className="text-gray-900 mb-3">Key Symptoms</h3>
              <div className="bg-white border border-gray-200 rounded p-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">Crushing chest pain radiating to left arm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">Shortness of breath</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">Profuse sweating and nausea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">Symptom onset: 20 minutes prior to call</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paramedic Contact Details */}
            <div className="mb-6">
              <h3 className="text-gray-900 mb-3">Paramedic Contact Details</h3>
              <div className="bg-white border border-gray-200 rounded p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Ambulance Unit</p>
                    <p className="text-gray-900">AMB-247</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Paramedic Contact</p>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <p className="text-gray-900">000-PARA-247</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Dispatch Centre</p>
                    <p className="text-gray-900">NNSWLHD Central</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Call ID</p>
                    <p className="text-gray-900 font-mono">TZ-2026-04-24-1547</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Location */}
            <div>
              <h3 className="text-gray-900 mb-3">Patient Pickup Location</h3>
              <div className="bg-white border border-gray-200 rounded p-4">
                <p className="text-gray-900">142 Pacific Highway, Charlestown NSW 2290</p>
                <p className="text-sm text-gray-600 mt-1">Residential - Ground floor access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Acknowledgement Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-900 mb-1">Hospital Acknowledgement</h3>
              <p className="text-sm text-gray-600">
                {acknowledged
                  ? `Acknowledged at ${acknowledgedTime?.toLocaleTimeString()}`
                  : 'Please acknowledge receipt of this pre-notification'}
              </p>
            </div>
            <button
              onClick={() => setAcknowledged(true)}
              disabled={acknowledged}
              className={`px-8 py-3 rounded-lg transition-colors ${
                acknowledged
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {acknowledged ? 'Acknowledged' : 'Acknowledge Receipt'}
            </button>
          </div>

          {acknowledged && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-green-800">
                    Acknowledgement logged in IMS+ at {acknowledgedTime?.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    Dispatch interface notified of hospital acknowledgement receipt
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* IMS+ Log Information */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <h3 className="text-gray-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-gray-600" />
            IMS+ Integration Status
          </h3>
          <div className="space-y-1 text-sm">
            <p className="text-gray-700">✓ Pre-notification logged with timestamp: {sentTime.toLocaleString()}</p>
            <p className="text-gray-700">✓ API connection established to John Hunter Hospital ED</p>
            <p className="text-gray-700">✓ Integration test completed successfully</p>
            {acknowledged && (
              <p className="text-gray-700">✓ Hospital acknowledgement received and logged</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
