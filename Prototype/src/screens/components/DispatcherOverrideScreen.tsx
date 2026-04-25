import { AlertCircle, Send, FileText } from 'lucide-react';
import { useState } from 'react';

export function DispatcherOverrideScreen() {
  const [dispatcherDecision, setDispatcherDecision] = useState('');
  const [overrideReason, setOverrideReason] = useState('');
  const [overrideNotes, setOverrideNotes] = useState('');
  const [dispatched, setDispatched] = useState(false);

  const aiClassification = 'AMI';
  const confidence = 92;

  const handleDispatch = () => {
    setDispatched(true);
    // Auto-timestamp and log to IMS+
  };

  return (
    <div className="size-full bg-gray-50 overflow-auto">
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <h1 className="text-gray-900">Dispatch Decision & Override</h1>
        <p className="text-sm text-gray-500 mt-1">Call ID: TZ-2026-04-24-1547 | Clinical authority: Dispatcher</p>
      </header>

      <div className="p-6 max-w-[1200px] mx-auto space-y-6">
        {/* AI Recommendation Summary */}
        <div className="bg-red-50 border-l-4 border-l-red-600 p-6 rounded">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <h2 className="text-red-900 mb-2">AI Recommendation (Advisory Only)</h2>
              <div className="space-y-1">
                <p className="text-gray-700">Classification: <strong className="text-red-700">ACUTE MYOCARDIAL INFARCTION (AMI)</strong></p>
                <p className="text-gray-700">Confidence: <strong className="text-red-700">{confidence}%</strong></p>
                <p className="text-gray-700">Recommendation: <strong className="text-red-700">IMMEDIATE DISPATCH REQUIRED</strong></p>
              </div>
              <p className="text-sm text-red-800 mt-3 italic">
                ⚠️ Clinical decision authority remains with the dispatcher. AI is advisory only.
              </p>
            </div>
          </div>
        </div>

        {/* Dispatcher Decision */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200 bg-blue-50">
            <h2 className="text-blue-900">Dispatcher Clinical Decision</h2>
            <p className="text-sm text-blue-700 mt-1">Your decision will be logged in IMS+ with timestamp</p>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <label className="block mb-3">Your Classification Decision</label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="decision"
                    value="AMI"
                    checked={dispatcherDecision === 'AMI'}
                    onChange={(e) => setDispatcherDecision(e.target.value)}
                    className="w-5 h-5"
                  />
                  <div>
                    <p className="text-gray-900">Agree with AI - AMI Dispatch</p>
                    <p className="text-sm text-gray-600">Proceed with immediate ambulance dispatch</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="decision"
                    value="Non-AMI"
                    checked={dispatcherDecision === 'Non-AMI'}
                    onChange={(e) => setDispatcherDecision(e.target.value)}
                    className="w-5 h-5"
                  />
                  <div>
                    <p className="text-gray-900">Override AI - Non-AMI Response</p>
                    <p className="text-sm text-gray-600">Requires mandatory override documentation</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Mandatory Override Section */}
            {dispatcherDecision === 'Non-AMI' && (
              <div className="border-2 border-orange-300 rounded-lg p-6 bg-orange-50">
                <h3 className="text-orange-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Mandatory Override Documentation
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-gray-900">Override Reason (Required) *</label>
                    <select
                      value={overrideReason}
                      onChange={(e) => setOverrideReason(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select reason...</option>
                      <option value="symptom_mismatch">Symptom presentation does not match AMI criteria</option>
                      <option value="known_condition">Known pre-existing non-cardiac condition</option>
                      <option value="musculoskeletal">Musculoskeletal pain confirmed</option>
                      <option value="anxiety_related">Anxiety/panic attack presentation</option>
                      <option value="caller_refused">Caller refused ambulance</option>
                      <option value="alternative_transport">Alternative transport arranged</option>
                      <option value="clinical_judgment">Clinical judgment - low risk indicators</option>
                      <option value="other">Other (explain in notes)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-900">Additional Notes (Optional)</label>
                    <textarea
                      value={overrideNotes}
                      onChange={(e) => setOverrideNotes(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Provide additional context for your override decision..."
                    ></textarea>
                  </div>
                </div>

                <p className="text-xs text-orange-700 mt-4">
                  This override will be logged in IMS+ and included in model performance review.
                </p>
              </div>
            )}

            {/* Dispatch Summary */}
            {dispatcherDecision && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-gray-900 mb-4">Dispatch Information Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">AI Classification:</span>
                    <span className="text-gray-900">AMI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">AI Confidence:</span>
                    <span className="text-gray-900">{confidence}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Your Decision:</span>
                    <span className={dispatcherDecision === 'AMI' ? 'text-red-700' : 'text-orange-700'}>
                      {dispatcherDecision}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Age:</span>
                    <span className="text-gray-900">58 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gender:</span>
                    <span className="text-gray-900">Male</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Key Symptoms:</span>
                    <span className="text-gray-900">Crushing chest pain, SOB, sweating</span>
                  </div>
                  {dispatcherDecision === 'Non-AMI' && overrideReason && (
                    <div className="flex justify-between pt-2 border-t border-gray-300">
                      <span className="text-gray-600">Override Reason:</span>
                      <span className="text-orange-700">{overrideReason.replace(/_/g, ' ')}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Single-Action Dispatch Button */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-900 mb-1">Ready to Dispatch</h3>
              <p className="text-sm text-gray-600">
                {dispatcherDecision === 'AMI'
                  ? 'Ambulance will be dispatched with AMI protocol'
                  : dispatcherDecision === 'Non-AMI'
                  ? 'Response will be logged with override documentation'
                  : 'Select your clinical decision above to proceed'}
              </p>
            </div>
            <button
              onClick={handleDispatch}
              disabled={!dispatcherDecision || (dispatcherDecision === 'Non-AMI' && !overrideReason) || dispatched}
              className={`flex items-center gap-2 px-8 py-4 rounded-lg transition-colors ${
                !dispatcherDecision || (dispatcherDecision === 'Non-AMI' && !overrideReason) || dispatched
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
              }`}
            >
              <Send className="w-5 h-5" />
              {dispatched ? 'Dispatched' : 'Dispatch Ambulance'}
            </button>
          </div>

          {dispatched && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-800">
                ✓ Dispatch logged in IMS+ at {new Date().toLocaleTimeString()} on {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-green-700 mt-1">
                Pre-notification being sent to receiving ED...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
