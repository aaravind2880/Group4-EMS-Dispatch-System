import { Navigation, Clock, AlertTriangle, Phone, MapPin, FileText, Hospital, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

export function AmbulanceTerminal() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    aiAccuracy: '',
    finalDiagnosis: '',
    transportDecision: '',
    notes: ''
  });

  const dispatchTime = new Date();
  const eta = new Date(dispatchTime.getTime() + 12 * 60000); // 12 minutes

  return (
    <div className="size-full bg-gray-50 overflow-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Navigation className="w-5 h-5 text-blue-600" />
            <h1 className="text-gray-900">In-Vehicle Terminal</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">Unit: <span className="text-gray-900">AMB-247</span></div>
            <div className="text-sm text-gray-600">Priority: <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded">P1</span></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600">Active</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-[1400px] mx-auto space-y-6">
        {/* Dispatch Notification - Received within 30 seconds */}
        <div className="bg-red-50 border-2 border-red-500 rounded-lg overflow-hidden">
          <div className="px-6 py-3 bg-red-100 border-b border-red-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-700" />
                <h2 className="text-red-900">PRIORITY DISPATCH - AMI (P1)</h2>
              </div>
              <div className="text-sm text-red-700">
                Received: {dispatchTime.toLocaleTimeString()} (4s after dispatch)
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Minimum Data Set - No scrolling required */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-red-900 mb-4">AI Classification</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Classification:</span>
                    <span className="text-xl text-red-700">AMI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Confidence Score:</span>
                    <span className="text-xl text-red-700">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-red-900 mb-4">Patient Location</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900">142 Pacific Highway</p>
                    <p className="text-gray-900">Charlestown NSW 2290</p>
                    <p className="text-sm text-gray-600 mt-2">Residential - Ground floor access</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-red-200">
              <h3 className="text-red-900 mb-3">Patient Information</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white border border-red-200 rounded p-3">
                  <p className="text-xs text-gray-600 mb-1">Age</p>
                  <p className="text-lg text-gray-900">58 years</p>
                </div>
                <div className="bg-white border border-red-200 rounded p-3">
                  <p className="text-xs text-gray-600 mb-1">Gender</p>
                  <p className="text-lg text-gray-900">Male</p>
                </div>
              </div>
              <h3 className="text-red-900 mb-3">Key Symptoms</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  <span className="text-gray-900">Crushing chest pain radiating to left arm</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  <span className="text-gray-900">Shortness of breath</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  <span className="text-gray-900">Profuse sweating, nausea</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  <span className="text-gray-900">Pain onset 20 minutes ago, constant</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-xs text-gray-600">Estimated Arrival</p>
                  <p className="text-lg text-gray-900">{eta.toLocaleTimeString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-xs text-gray-600">Dispatch Contact</p>
                  <p className="text-lg text-gray-900">000-DISPATCH-247</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hospital Section */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200 bg-blue-50">
            <div className="flex items-center gap-2">
              <Hospital className="w-5 h-5 text-blue-600" />
              <h2 className="text-blue-900">Receiving Hospital</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Destination</p>
              <p className="text-xl text-gray-900">John Hunter Hospital - Emergency Department</p>
              <p className="text-sm text-gray-600 mt-1">16 Lookout Rd, New Lambton Heights NSW 2305</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-sm text-green-900">Hospital Notified</p>
                </div>
                <p className="text-xs text-green-700">Pre-notification sent at {new Date(dispatchTime.getTime() + 45000).toLocaleTimeString()}</p>
                <p className="text-xs text-green-700">Acknowledgement received</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-sm text-green-900">ED Ready</p>
                </div>
                <p className="text-xs text-green-700">Cath lab team activated</p>
                <p className="text-xs text-green-700">Bay 3 prepared for arrival</p>
              </div>
            </div>
          </div>
        </div>

        {/* Update Notification */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-yellow-900 mb-1">Dispatch Update (Received 45s ago)</h3>
              <p className="text-gray-900 text-sm">
                Patient reports increased pain intensity. Wife confirms patient appears clammy and pale. No change to AMI classification.
              </p>
              <p className="text-xs text-yellow-700 mt-2">
                Updated: {new Date(dispatchTime.getTime() + 120000).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        {/* Post-Callout Form */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-600" />
              <div>
                <h2 className="text-gray-900">Post-Callout Form</h2>
                <p className="text-sm text-gray-600">Complete after transport decision</p>
              </div>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {showForm ? 'Hide Form' : 'Open Form'}
            </button>
          </div>

          {showForm && (
            <div className="p-6 space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">AI Classification Accuracy *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="accuracy"
                      value="correct"
                      checked={formData.aiAccuracy === 'correct'}
                      onChange={(e) => setFormData({...formData, aiAccuracy: e.target.value})}
                    />
                    <span className="text-gray-900">Correct - AI classification matched final diagnosis</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="accuracy"
                      value="incorrect"
                      checked={formData.aiAccuracy === 'incorrect'}
                      onChange={(e) => setFormData({...formData, aiAccuracy: e.target.value})}
                    />
                    <span className="text-gray-900">Incorrect - AI classification did not match final diagnosis</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Final Patient Diagnosis *</label>
                <select
                  value={formData.finalDiagnosis}
                  onChange={(e) => setFormData({...formData, finalDiagnosis: e.target.value})}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-gray-900"
                >
                  <option value="">Select diagnosis...</option>
                  <option value="ami_confirmed">AMI - Confirmed by ECG/clinical assessment</option>
                  <option value="ami_suspected">AMI - Suspected, hospital confirmation pending</option>
                  <option value="angina">Angina</option>
                  <option value="cardiac_other">Other cardiac condition</option>
                  <option value="musculoskeletal">Musculoskeletal pain</option>
                  <option value="respiratory">Respiratory condition</option>
                  <option value="gastrointestinal">Gastrointestinal condition</option>
                  <option value="anxiety">Anxiety/panic attack</option>
                  <option value="other">Other (non-cardiac)</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Transport Decision *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="transport"
                      value="transported"
                      checked={formData.transportDecision === 'transported'}
                      onChange={(e) => setFormData({...formData, transportDecision: e.target.value})}
                    />
                    <span className="text-gray-900">Patient transported to hospital</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="transport"
                      value="not_transported"
                      checked={formData.transportDecision === 'not_transported'}
                      onChange={(e) => setFormData({...formData, transportDecision: e.target.value})}
                    />
                    <span className="text-gray-900">Patient not transported (treat and refer)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="transport"
                      value="refused"
                      checked={formData.transportDecision === 'refused'}
                      onChange={(e) => setFormData({...formData, transportDecision: e.target.value})}
                    />
                    <span className="text-gray-900">Patient refused transport</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Additional Notes (Optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-gray-900 resize-none"
                  rows={3}
                  placeholder="Any additional observations or clinical notes..."
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
                Submit to IS Developer Team
              </button>

              <p className="text-xs text-gray-600 text-center">
                Submitted records automatically routed for model retraining review
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
