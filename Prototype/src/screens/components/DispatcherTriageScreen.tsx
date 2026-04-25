import { Clock, AlertTriangle, Phone, BookOpen, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function DispatcherTriageScreen() {
  const [elapsedTime, setElapsedTime] = useState(3);
  const [showClassification, setShowClassification] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showOverride, setShowOverride] = useState(false);
  const [overrideReason, setOverrideReason] = useState('');

  const [patientData, setPatientData] = useState({
    age: '58',
    gender: 'Male',
    painScore: '9',
    consciousness: 'Alert',
    breathing: 'Laboured',
    chestPain: true,
    radiatingPain: true,
    shortnessOfBreath: true,
    sweating: true,
    nausea: true,
    additionalSymptoms: 'Patient reports pain started 20 minutes ago while watching television. Pain described as crushing, constant, radiating to left arm and jaw.'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    const classificationTimer = setTimeout(() => {
      setShowClassification(true);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(classificationTimer);
    };
  }, []);

  const questions = [
    { id: 1, text: "Describe the chest pain - crushing, squeezing, or pressure-like?", completed: true, response: "Crushing, constant" },
    { id: 2, text: "When did symptoms start?", completed: true, response: "20 mins ago" },
    { id: 3, text: "Any shortness of breath, nausea, or sweating?", completed: false, response: "" },
  ];

  return (
    <div className="size-full bg-gray-50 overflow-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-green-600" />
            <div>
              <h1 className="text-gray-900">Active Call - NNSWLHD EMS DISPATCH</h1>
              <p className="text-sm text-gray-500">Call ID: EMS-2026-04-24-1547</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded">
              <Clock className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-700">{Math.floor(elapsedTime / 60)}:{(elapsedTime % 60).toString().padStart(2, '0')}</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <BookOpen className="w-4 h-4" />
              Quick Reference
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-6 p-6 max-w-[1800px] mx-auto">
        {/* Left Column - AI Classification & Symptoms */}
        <div className="space-y-6">
          {/* AI Classification */}
          <div className="bg-white rounded-lg border-2 border-red-500 shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-red-50 border-b border-red-200">
              <h2 className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                AI Classification
              </h2>
              <p className="text-xs text-red-700 mt-1">Analysis completed in 4.2 seconds</p>
            </div>
            <div className="p-6">
              {showClassification ? (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Classification</p>
                      <p className="text-2xl text-red-700">ACUTE MYOCARDIAL INFARCTION (AMI)</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600">Confidence Level</p>
                      <p className="text-xl text-red-700">92%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-600 h-3 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div className="bg-gray-50 rounded p-2">
                      <p className="text-gray-500">Model Version</p>
                      <p className="text-gray-900">AMI-Triage v3.2.1</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p className="text-gray-500">Last Retrained</p>
                      <p className="text-gray-900">2026-04-01</p>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
                    <p className="text-sm text-red-900">
                      <strong>AI Recommendation:</strong> IMMEDIATE DISPATCH REQUIRED
                    </p>
                    <p className="text-xs text-red-700 mt-2">
                      High probability AMI based on symptom pattern. Time-critical intervention needed.
                    </p>
                  </div>

                  {/* Override AI Button */}
                  <button
                    onClick={() => setShowOverride(!showOverride)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                  >
                    <XCircle className="w-4 h-4" />
                    Override AI Classification
                  </button>

                  {showOverride && (
                    <div className="mt-4 p-4 bg-orange-50 border border-orange-300 rounded">
                      <label className="block text-sm text-orange-900 mb-2">Override Reason *</label>
                      <select
                        value={overrideReason}
                        onChange={(e) => setOverrideReason(e.target.value)}
                        className="w-full px-3 py-2 border border-orange-300 rounded mb-2 text-sm"
                      >
                        <option value="">Select reason...</option>
                        <option value="symptom_mismatch">Symptom presentation does not match AMI criteria</option>
                        <option value="known_condition">Known pre-existing non-cardiac condition</option>
                        <option value="musculoskeletal">Musculoskeletal pain confirmed</option>
                        <option value="anxiety_related">Anxiety/panic attack presentation</option>
                        <option value="low_confidence">AI confidence too low for classification</option>
                        <option value="clinical_judgment">Clinical judgment - atypical presentation</option>
                        <option value="other">Other (document in notes)</option>
                      </select>
                      <textarea
                        placeholder="Additional override notes..."
                        className="w-full px-3 py-2 border border-orange-300 rounded resize-none text-sm"
                        rows={2}
                      ></textarea>
                      <p className="text-xs text-orange-700 mt-2">
                        Override will be logged in IMS+ with timestamp
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p className="text-sm text-gray-600">Analyzing symptoms...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Caller Symptom Summary */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-gray-900">Caller Symptom Summary</h2>
              <p className="text-sm text-gray-500 mt-1">Structured patient assessment</p>
            </div>
            <div className="p-6 space-y-4">
              {/* Demographics */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Age</label>
                  <input
                    type="text"
                    value={patientData.age}
                    onChange={(e) => setPatientData({...patientData, age: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Gender</label>
                  <select
                    value={patientData.gender}
                    onChange={(e) => setPatientData({...patientData, gender: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Pain Score (0-10)</label>
                  <input
                    type="text"
                    value={patientData.painScore}
                    onChange={(e) => setPatientData({...patientData, painScore: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>

              {/* Vital Assessment */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Consciousness Level</label>
                  <select
                    value={patientData.consciousness}
                    onChange={(e) => setPatientData({...patientData, consciousness: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  >
                    <option>Alert</option>
                    <option>Confused</option>
                    <option>Drowsy</option>
                    <option>Unresponsive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Breathing</label>
                  <select
                    value={patientData.breathing}
                    onChange={(e) => setPatientData({...patientData, breathing: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  >
                    <option>Normal</option>
                    <option>Laboured</option>
                    <option>Rapid</option>
                    <option>Difficulty breathing</option>
                  </select>
                </div>
              </div>

              {/* Key Symptoms Checklist */}
              <div>
                <label className="block text-xs text-gray-600 mb-2">Key Symptoms</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={patientData.chestPain} onChange={(e) => setPatientData({...patientData, chestPain: e.target.checked})} className="w-4 h-4" />
                    <span className="text-sm text-gray-700">Chest pain / pressure</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={patientData.radiatingPain} onChange={(e) => setPatientData({...patientData, radiatingPain: e.target.checked})} className="w-4 h-4" />
                    <span className="text-sm text-gray-700">Radiating pain (arm, jaw, back)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={patientData.shortnessOfBreath} onChange={(e) => setPatientData({...patientData, shortnessOfBreath: e.target.checked})} className="w-4 h-4" />
                    <span className="text-sm text-gray-700">Shortness of breath</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={patientData.sweating} onChange={(e) => setPatientData({...patientData, sweating: e.target.checked})} className="w-4 h-4" />
                    <span className="text-sm text-gray-700">Profuse sweating</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={patientData.nausea} onChange={(e) => setPatientData({...patientData, nausea: e.target.checked})} className="w-4 h-4" />
                    <span className="text-sm text-gray-700">Nausea / vomiting</span>
                  </label>
                </div>
              </div>

              {/* Additional Symptoms */}
              <div>
                <label className="block text-xs text-gray-600 mb-1">Additional Symptoms & Notes</label>
                <textarea
                  value={patientData.additionalSymptoms}
                  onChange={(e) => setPatientData({...patientData, additionalSymptoms: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded resize-none text-sm"
                  rows={3}
                  placeholder="Enter any additional symptoms, medical history, or relevant information..."
                ></textarea>
              </div>

              {/* Location */}
              <div className="pt-4 border-t border-gray-200">
                <label className="block text-xs text-gray-600 mb-1">Location</label>
                <input
                  type="text"
                  defaultValue="142 Pacific Highway, Charlestown NSW 2290"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Questioning Script & Reference Guide */}
        <div className="space-y-6">
          {/* Questioning Script - Compact */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-3 bg-purple-50 border-b border-purple-200">
              <div className="flex items-center justify-between">
                <h3 className="text-purple-900">Questioning Script - AMI Protocol</h3>
                <span className="text-sm text-purple-700">{elapsedTime}s / 90s</span>
              </div>
              <div className="mt-2 w-full bg-purple-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((elapsedTime / 90) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {questions.map((question, index) => (
                <div
                  key={question.id}
                  className={`p-4 ${question.completed ? 'bg-gray-50' : index === currentQuestion ? 'bg-yellow-50 border-l-4 border-l-yellow-500' : ''}`}
                >
                  <div className="flex items-start gap-2">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      question.completed ? 'bg-green-100 text-green-700' :
                      index === currentQuestion ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-400'
                    }`}>
                      {question.completed ? '✓' : index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 mb-1">{question.text}</p>
                      {question.completed && question.response && (
                        <p className="text-xs text-gray-600 bg-white border border-gray-200 rounded px-2 py-1">
                          {question.response}
                        </p>
                      )}
                      {index === currentQuestion && !question.completed && (
                        <div className="mt-2">
                          <input
                            type="text"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                            placeholder="Response..."
                          />
                          <button
                            onClick={() => setCurrentQuestion(currentQuestion + 1)}
                            className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-3 bg-amber-50 border-t border-amber-200">
              <p className="text-xs text-amber-800">
                <strong>Script Note:</strong> Atypical male presentation - adapted questions for radiation/sweating
              </p>
            </div>
          </div>

          {/* Confidence Score Guide */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="text-blue-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Confidence Score Guide
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded p-3 border border-blue-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-blue-900">85-100%</span>
                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">High</span>
                </div>
                <p className="text-xs text-gray-700">Proceed with AI recommendation. High confidence in classification accuracy.</p>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-blue-900">70-84%</span>
                  <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded">Moderate</span>
                </div>
                <p className="text-xs text-gray-700">Review symptoms carefully. Consider additional assessment before decision.</p>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-blue-900">&lt;70%</span>
                  <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded">Low</span>
                </div>
                <p className="text-xs text-gray-700">Exercise clinical judgment. AI uncertain - rely on dispatcher assessment.</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-xs text-blue-800">
                <strong>Note:</strong> AI is advisory only. Clinical decision authority remains with dispatcher at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
