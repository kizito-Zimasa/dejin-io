'use client';

import { useState, useRef } from 'react';

const SAMPLE_DOCUMENTS = [
  {
    label: 'Claims form',
    text: `MEDICAL CLAIM FORM\nMember ID: MBR-447821\nPatient Name: Sarah Wanjiku\nDate of Service: 2024-03-15\nProvider: Nairobi Central Hospital\nDiagnosis Code: J06.9 (Acute upper respiratory infection)\nProcedure Code: 99213 (Office visit, established patient)\nClaim Amount: KES 12,500\nProvider ID: PRV-2041\nSubmission Date: 2024-03-18`,
  },
  {
    label: 'Pre-auth request',
    text: `PRE-AUTHORIZATION REQUEST\nUrgency: URGENT\nMember: James Omondi\nMembership ID: MBR-229103\nRequesting Provider: Dr. Amina Hassan, Aga Khan Hospital\nRequested Service: MRI Brain with contrast\nProcedure Code: 70553\nDiagnosis: R51 (Headache with neurological symptoms)\nDate Needed: 2024-03-22\nClinical Justification: Patient presenting with severe headaches and visual disturbances for 3 weeks unresponsive to conservative treatment.`,
  },
  {
    label: 'Lab report',
    text: `LABORATORY REPORT\nLaboratory: PathCare Kenya\nPatient: Grace Mutua, DOB: 1985-06-12\nOrdering Physician: Dr. Peter Njoroge\nDate Collected: 2024-03-14\nTests Performed:\n- Complete Blood Count (CBC)\n  WBC: 7.2 (Normal)\n  RBC: 4.1 (Normal)\n  Hemoglobin: 11.2 g/dL (Low)\n  Platelets: 245,000 (Normal)\n- Malaria RDT: Negative\nClinical Notes: Mild anemia, recommend follow-up with iron studies.`,
  },
];

const PRIORITY_COLORS = {
  low: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  high: 'bg-orange-100 text-orange-700',
  critical: 'bg-red-100 text-red-700',
};

function ConfidenceBar({ value }) {
  const pct = Math.round(value * 100);
  const color = pct >= 90 ? 'bg-green-500' : pct >= 70 ? 'bg-yellow-400' : 'bg-orange-400';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-body font-semibold text-gray-600 w-8 text-right">{pct}%</span>
    </div>
  );
}

function ResultDisplay({ result }) {
  const { documentType, confidence, extractedFields, routingDecision, summary } = result;
  const priorityClass = PRIORITY_COLORS[routingDecision.priority] || PRIORITY_COLORS.medium;

  const fieldLabels = {
    patientName: 'Patient',
    dateOfService: 'Date of service',
    providerId: 'Provider ID',
    diagnosisCode: 'Diagnosis code',
    procedureCode: 'Procedure code',
    claimAmount: 'Amount',
    membershipId: 'Membership ID',
    urgency: 'Urgency',
  };

  const populatedFields = Object.entries(extractedFields).filter(([, v]) => v !== null);

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Summary */}
      <div className="bg-brand-light rounded-xl p-4">
        <p className="text-sm font-body text-gray-700">{summary}</p>
      </div>

      {/* Document type + confidence */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface rounded-xl p-4">
          <p className="text-xs font-body text-gray-500 mb-1">Document type</p>
          <p className="text-sm font-body font-semibold text-brand-dark capitalize">
            {documentType.replace(/_/g, ' ')}
          </p>
        </div>
        <div className="bg-surface rounded-xl p-4">
          <p className="text-xs font-body text-gray-500 mb-2">Confidence</p>
          <ConfidenceBar value={confidence} />
        </div>
      </div>

      {/* Routing Decision */}
      <div className="border-2 border-brand-primary rounded-xl p-4">
        <p className="text-xs font-body font-semibold text-brand-primary uppercase tracking-wide mb-3">Routing Decision</p>
        <div className="flex items-start justify-between gap-3 mb-2">
          <p className="text-base font-display font-bold text-brand-dark">{routingDecision.department}</p>
          <span className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${priorityClass}`}>
            {routingDecision.priority.charAt(0).toUpperCase() + routingDecision.priority.slice(1)} priority
          </span>
        </div>
        <p className="text-sm font-body text-gray-600 mb-2">{routingDecision.reason}</p>
        <p className="text-xs font-body text-gray-400">SLA: {routingDecision.sla}</p>
      </div>

      {/* Extracted Fields */}
      {populatedFields.length > 0 && (
        <div>
          <p className="text-xs font-body font-semibold text-gray-500 uppercase tracking-wide mb-2">Extracted fields</p>
          <div className="grid grid-cols-2 gap-2">
            {populatedFields.map(([key, value]) => (
              <div key={key} className="bg-surface rounded-lg px-3 py-2">
                <p className="text-xs font-body text-gray-400">{fieldLabels[key] || key}</p>
                <p className="text-xs font-body font-semibold text-gray-700 truncate">{String(value)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DocumentDemo() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  async function processDocument(payload) {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/document-route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setError('Demo limit reached. Please try again in an hour.');
        } else {
          setError(data.error || 'Something went wrong. Please try again.');
        }
        return;
      }

      setResult(data.result);
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }

  function handleTextSubmit() {
    if (!text.trim()) return;
    processDocument({ text });
  }

  function handleFile(file) {
    if (!file) return;
    const supportedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp'];
    if (!supportedTypes.includes(file.type)) {
      setError('Unsupported file type. Please use PDF, PNG, JPEG, or WEBP.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('File too large. Maximum 5 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result.split(',')[1];
      processDocument({ fileBase64: base64, mimeType: file.type });
    };
    reader.readAsDataURL(file);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  }

  function loadSample(sample) {
    setText(sample.text);
    setResult(null);
    setError(null);
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-brand-dark px-5 py-4">
        <p className="text-white font-display font-bold">Document Routing Demo</p>
        <p className="text-gray-400 font-body text-xs mt-0.5">Paste text or upload a file — AI reads and routes instantly</p>
      </div>

      <div className="p-5 space-y-5">
        {/* Sample buttons */}
        <div>
          <p className="text-xs font-body font-semibold text-gray-500 uppercase tracking-wide mb-2">Try a sample</p>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_DOCUMENTS.map((s) => (
              <button
                key={s.label}
                onClick={() => loadSample(s)}
                className="text-xs font-body font-semibold px-3 py-1.5 rounded-full border border-brand-primary text-brand-primary hover:bg-brand-light transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Drop zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${
            dragOver ? 'border-brand-primary bg-brand-light' : 'border-border hover:border-brand-primary hover:bg-brand-light'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.webp"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />
          <svg className="mx-auto mb-2 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="text-sm font-body text-gray-500">Drop a file here or <span className="text-brand-primary font-semibold">browse</span></p>
          <p className="text-xs font-body text-gray-400 mt-1">PDF, PNG, JPEG · Max 5 MB</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-body text-gray-400">or paste text</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Text area */}
        <textarea
          rows={5}
          value={text}
          onChange={(e) => { setText(e.target.value); setResult(null); setError(null); }}
          placeholder="Paste document text here — e.g. a claim form, referral letter, or lab report..."
          className="w-full rounded-xl border border-border px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-primary transition-colors resize-none"
        />

        <button
          onClick={handleTextSubmit}
          disabled={loading || !text.trim()}
          className="w-full py-3 bg-brand-primary text-white font-body font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeDashoffset="20" />
              </svg>
              Analyzing document...
            </>
          ) : (
            'Route This Document →'
          )}
        </button>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm font-body rounded-xl px-4 py-3">{error}</div>
        )}

        {result && <ResultDisplay result={result} />}

        <p className="text-xs font-body text-gray-400 text-center">
          Demo only — no document data is stored or retained.
        </p>
      </div>
    </div>
  );
}
