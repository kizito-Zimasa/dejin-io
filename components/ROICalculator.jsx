'use client';

import { useState } from 'react';
import Link from 'next/link';
import { roiDefaults } from '../content/readiness';

const SERVICES = [
  {
    id: 'chatbot',
    label: 'Customer Service Chatbot',
    href: '/services/chatbot',
    inputs: [
      { id: 'dailyInquiries', label: 'Customer inquiries per day', min: 10, max: 5000, step: 10, unit: 'inquiries/day' },
      { id: 'handlingMinutes', label: 'Minutes per inquiry (staff time)', min: 1, max: 60, step: 1, unit: 'min' },
      { id: 'staffCostPerHour', label: 'Average staff cost per hour', min: 5, max: 100, step: 5, unit: '$/hr' },
    ],
    calculate(vals) {
      const { dailyInquiries, handlingMinutes, staffCostPerHour, automationRate } = vals;
      const monthlyInquiries = dailyInquiries * 22; // working days
      const automatedMonthly = monthlyInquiries * automationRate;
      const hoursSaved = (automatedMonthly * handlingMinutes) / 60;
      const monthlySavings = hoursSaved * staffCostPerHour;
      const investment = (roiDefaults.chatbot.investmentLow + roiDefaults.chatbot.investmentHigh) / 2;
      const paybackMonths = monthlySavings > 0 ? Math.ceil(investment / monthlySavings) : null;
      const annualROI = monthlySavings > 0 ? Math.round(((monthlySavings * 12 - investment) / investment) * 100) : null;
      return { monthlySavings, paybackMonths, annualROI, investment };
    },
    automationRate: roiDefaults.chatbot.automationRate,
    automationLabel: '35% of inquiries automated',
    investmentDisplay: '$18k – $22k',
  },
  {
    id: 'documentRouting',
    label: 'Document Routing',
    href: '/services/document-routing',
    inputs: [
      { id: 'documentsPerDay', label: 'Documents processed per day', min: 5, max: 2000, step: 5, unit: 'docs/day' },
      { id: 'minutesPerDocument', label: 'Minutes to triage one document', min: 2, max: 120, step: 2, unit: 'min' },
      { id: 'staffCostPerHour', label: 'Average staff cost per hour', min: 5, max: 100, step: 5, unit: '$/hr' },
    ],
    calculate(vals) {
      const { documentsPerDay, minutesPerDocument, staffCostPerHour, errorReductionRate } = vals;
      const monthlyDocs = documentsPerDay * 22;
      const hoursSaved = (monthlyDocs * minutesPerDocument * errorReductionRate) / 60;
      const monthlySavings = hoursSaved * staffCostPerHour;
      const investment = roiDefaults.documentRouting.investmentFixed;
      const paybackMonths = monthlySavings > 0 ? Math.ceil(investment / monthlySavings) : null;
      const annualROI = monthlySavings > 0 ? Math.round(((monthlySavings * 12 - investment) / investment) * 100) : null;
      return { monthlySavings, paybackMonths, annualROI, investment };
    },
    automationRate: roiDefaults.documentRouting.errorReductionRate,
    automationLabel: '45% of triage time eliminated',
    investmentDisplay: '$18k (fixed)',
  },
  {
    id: 'statusAutomation',
    label: 'Status Inquiry Automation',
    href: '/services/status-automation',
    inputs: [
      { id: 'dailyInquiries', label: 'Status inquiries per day', min: 10, max: 5000, step: 10, unit: 'inquiries/day' },
      { id: 'handlingMinutes', label: 'Minutes per inquiry (staff time)', min: 1, max: 30, step: 1, unit: 'min' },
      { id: 'staffCostPerHour', label: 'Average staff cost per hour', min: 5, max: 100, step: 5, unit: '$/hr' },
    ],
    calculate(vals) {
      const { dailyInquiries, handlingMinutes, staffCostPerHour, automationRate } = vals;
      const monthlyInquiries = dailyInquiries * 22;
      const automatedMonthly = monthlyInquiries * automationRate;
      const hoursSaved = (automatedMonthly * handlingMinutes) / 60;
      const monthlySavings = hoursSaved * staffCostPerHour;
      const investment = (roiDefaults.statusAutomation.investmentLow + roiDefaults.statusAutomation.investmentHigh) / 2;
      const paybackMonths = monthlySavings > 0 ? Math.ceil(investment / monthlySavings) : null;
      const annualROI = monthlySavings > 0 ? Math.round(((monthlySavings * 12 - investment) / investment) * 100) : null;
      return { monthlySavings, paybackMonths, annualROI, investment };
    },
    automationRate: roiDefaults.statusAutomation.automationRate,
    automationLabel: '65% of inquiries automated',
    investmentDisplay: '$15k – $18k',
  },
];

function fmt(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

function SliderInput({ input, value, onChange }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <label className="text-sm font-body font-semibold text-gray-700">{input.label}</label>
        <span className="text-sm font-body font-bold text-brand-primary">
          {value.toLocaleString()} <span className="font-normal text-gray-500">{input.unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={input.min}
        max={input.max}
        step={input.step}
        value={value}
        onChange={(e) => onChange(input.id, Number(e.target.value))}
        className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-brand-primary"
        suppressHydrationWarning
      />
      <div className="flex justify-between text-xs text-gray-400 font-body">
        <span>{input.min.toLocaleString()}</span>
        <span>{input.max.toLocaleString()}</span>
      </div>
    </div>
  );
}

function ResultMetric({ label, value, sublabel, highlight }) {
  return (
    <div className={`rounded-xl p-5 text-center ${highlight ? 'bg-brand-primary' : 'bg-surface'}`}>
      <p className={`text-3xl font-display font-bold ${highlight ? 'text-white' : 'text-brand-primary'}`}>{value}</p>
      <p className={`text-sm font-body font-semibold mt-1 ${highlight ? 'text-white opacity-90' : 'text-brand-dark'}`}>{label}</p>
      {sublabel && (
        <p className={`text-xs font-body mt-0.5 ${highlight ? 'text-white opacity-70' : 'text-gray-500'}`}>{sublabel}</p>
      )}
    </div>
  );
}

export default function ROICalculator() {
  const [selectedServiceId, setSelectedServiceId] = useState('chatbot');
  const service = SERVICES.find((s) => s.id === selectedServiceId);

  const defaultVals = roiDefaults[selectedServiceId] || roiDefaults.chatbot;
  const [inputVals, setInputVals] = useState(defaultVals);

  function handleServiceChange(id) {
    setSelectedServiceId(id);
    setInputVals(roiDefaults[id] || roiDefaults.chatbot);
  }

  function handleInputChange(id, value) {
    setInputVals((prev) => ({ ...prev, [id]: value }));
  }

  const calcVals = { ...inputVals, automationRate: service.automationRate, errorReductionRate: service.automationRate };
  const result = service.calculate(calcVals);

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-brand-dark px-8 py-5">
        <h3 className="text-xl font-display font-bold text-white">ROI Calculator</h3>
        <p className="text-gray-300 font-body text-sm mt-1">See what your numbers look like</p>
      </div>

      <div className="p-8 space-y-8">
        {/* Service selector */}
        <div>
          <p className="text-sm font-body font-semibold text-gray-700 mb-3">Select a Quick Win</p>
          <div className="flex flex-col sm:flex-row gap-2">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => handleServiceChange(s.id)}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-body font-semibold border-2 transition-all ${
                  selectedServiceId === s.id
                    ? 'bg-brand-primary border-brand-primary text-white'
                    : 'border-border text-gray-600 hover:border-brand-primary hover:text-brand-primary'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-6">
          {service.inputs.map((input) => (
            <SliderInput
              key={input.id}
              input={input}
              value={inputVals[input.id] ?? defaultVals[input.id]}
              onChange={handleInputChange}
            />
          ))}
          <p className="text-xs font-body text-gray-400 italic">
            Assumption: {service.automationLabel}. Estimates based on typical Dejin deployments.
          </p>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <ResultMetric
            label="Monthly savings"
            value={fmt(result.monthlySavings)}
            sublabel="estimated"
            highlight
          />
          <ResultMetric
            label="Investment"
            value={service.investmentDisplay}
            sublabel="one-time"
          />
          <ResultMetric
            label="Payback period"
            value={result.paybackMonths ? `${result.paybackMonths} mo` : '—'}
            sublabel="to break even"
          />
          <ResultMetric
            label="Year 1 ROI"
            value={result.annualROI ? `${result.annualROI}%` : '—'}
            sublabel="after investment"
          />
        </div>

        {/* CTA */}
        <div className="pt-2 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-body text-gray-500">
            Ready to see your actual numbers?
          </p>
          <Link
            href={service.href}
            className="px-6 py-2.5 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}
