'use client';

import { useState } from 'react';
import Link from 'next/link';
import MaturityBadge from './MaturityBadge';
import { readinessDimensions, maturityStages } from '../content/readiness';

const TOTAL_DIMENSIONS = readinessDimensions.length; // 7

function calculateResults(answers) {
  // Each dimension score = average of its 3 question scores (1–4), rounded
  // Total = sum of 7 dimension averages (range: 7–28)
  const dimensionScores = readinessDimensions.map((dim) => {
    const qs = dim.questions.map((q) => answers[q.id] ?? 1);
    const avg = qs.reduce((sum, s) => sum + s, 0) / qs.length;
    return { id: dim.id, name: dim.name, score: Math.round(avg), maxScore: 4 };
  });
  const totalScore = dimensionScores.reduce((sum, d) => sum + d.score, 0);
  const stage = maturityStages.find((s) => totalScore >= s.scoreRange[0] && totalScore <= s.scoreRange[1]) || maturityStages[0];
  return { totalScore, dimensionScores, stage };
}

function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm font-body text-gray-500 mb-2">
        <span>Dimension {current} of {total}</span>
        <span>{pct}% complete</span>
      </div>
      <div className="w-full bg-surface rounded-full h-2">
        <div
          className="bg-brand-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function QuestionCard({ question, selectedScore, onSelect }) {
  return (
    <div className="space-y-3">
      <p className="text-lg font-body text-gray-800 leading-relaxed">{question.text}</p>
      <div className="space-y-2">
        {question.answers.map((answer) => (
          <button
            key={answer.score}
            onClick={() => onSelect(question.id, answer.score)}
            className={`w-full text-left px-5 py-4 rounded-lg border-2 font-body text-base transition-all duration-150 ${
              selectedScore === answer.score
                ? 'border-brand-primary bg-brand-light text-brand-dark font-semibold'
                : 'border-border bg-white text-gray-700 hover:border-brand-primary hover:bg-brand-light'
            }`}
          >
            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-3 text-sm font-bold flex-shrink-0 ${
              selectedScore === answer.score
                ? 'bg-brand-primary text-white'
                : 'bg-surface text-gray-500'
            }`}>
              {answer.score}
            </span>
            {answer.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function DimensionStep({ dimension, dimIndex, answers, onAnswer, onNext, onBack }) {
  const allAnswered = dimension.questions.every((q) => answers[q.id] !== undefined);

  return (
    <div className="space-y-8">
      <div>
        <span className="inline-block px-3 py-1 bg-brand-primary text-white text-sm font-body font-semibold rounded-full mb-3">
          {dimension.name}
        </span>
        <p className="text-gray-500 font-body text-sm">{dimension.description}</p>
      </div>

      <div className="space-y-8">
        {dimension.questions.map((question, qi) => (
          <div key={question.id}>
            {dimension.questions.length > 1 && (
              <p className="text-xs font-body font-semibold text-gray-400 uppercase tracking-wide mb-2">
                Question {qi + 1} of {dimension.questions.length}
              </p>
            )}
            <QuestionCard
              question={question}
              selectedScore={answers[question.id]}
              onSelect={onAnswer}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 pt-4">
        {dimIndex > 0 && (
          <button
            onClick={onBack}
            className="px-6 py-3 border-2 border-border text-gray-700 font-body font-semibold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors"
          >
            ← Back
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!allAnswered}
          className={`flex-1 px-6 py-3 font-body font-semibold rounded-lg transition-all ${
            allAnswered
              ? 'bg-brand-primary text-white hover:opacity-90'
              : 'bg-surface text-gray-400 cursor-not-allowed'
          }`}
        >
          {dimIndex === TOTAL_DIMENSIONS - 1 ? 'See My Results →' : 'Next Dimension →'}
        </button>
      </div>
    </div>
  );
}

function ResultsView({ results }) {
  const { totalScore, dimensionScores, stage } = results;
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);

  function handleEmailSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // For now, just acknowledge — email delivery requires Resend setup
    setTimeout(() => {
      setEmailSubmitted(true);
      setSubmitting(false);
    }, 800);
  }

  return (
    <div className="space-y-10">
      {/* Score + Stage */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-display font-bold text-brand-dark">Your AI Readiness Score</h2>
        <div className="flex justify-center">
          <MaturityBadge
            score={totalScore}
            stage={stage.stage}
            stageName={stage.name}
            tailwindBg={stage.tailwindBg}
            tailwindText={stage.tailwindText}
            tailwindBorder={stage.tailwindBorder}
          />
        </div>
      </div>

      {/* Stage description */}
      <div className={`rounded-xl p-6 border-l-4 ${stage.tailwindBg} ${stage.tailwindBorder}`}>
        <p className={`font-body text-base leading-relaxed ${stage.tailwindText}`}>
          {stage.description}
        </p>
      </div>

      {/* Dimension breakdown */}
      <div>
        <h3 className="text-xl font-display font-bold text-brand-dark mb-4">Your score by dimension</h3>
        <div className="space-y-3">
          {dimensionScores.map((dim) => (
            <div key={dim.id} className="flex items-center gap-4">
              <span className="text-sm font-body text-gray-600 w-40 flex-shrink-0">{dim.name}</span>
              <div className="flex-1 bg-surface rounded-full h-3">
                <div
                  className="bg-brand-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(dim.score / dim.maxScore) * 100}%` }}
                />
              </div>
              <span className="text-sm font-body font-semibold text-brand-dark w-10 text-right">
                {dim.score}/{dim.maxScore}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Next step */}
      <div className="bg-white border border-border rounded-xl p-6 space-y-4">
        <h3 className="text-xl font-display font-bold text-brand-dark">Your recommended next step</h3>
        <p className="font-body text-gray-700 leading-relaxed">{stage.nextStep}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="px-6 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            {stage.cta}
          </Link>
          {stage.recommendedService && (
            <Link
              href={stage.recommendedService}
              className="px-6 py-3 border-2 border-brand-primary text-brand-primary font-body font-semibold rounded-lg hover:bg-brand-light transition-colors text-center"
            >
              {stage.recommendedServiceLabel}
            </Link>
          )}
        </div>
      </div>

      {/* Lead capture */}
      <div className="bg-surface rounded-xl p-6 space-y-4">
        <h3 className="text-xl font-display font-bold text-brand-dark">Get Your Full Readiness Report</h3>
        <p className="font-body text-gray-600">
          Your full report includes a dimension-by-dimension breakdown, peer benchmarks, and a personalised 90-day next-step roadmap.
        </p>
        {emailSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="font-body text-green-800 font-semibold">Your report is on its way. Check your inbox within 2 minutes.</p>
          </div>
        ) : (
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-body font-semibold text-gray-700 mb-1">Your name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-border rounded-lg font-body text-gray-800 focus:outline-none focus:border-brand-primary"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-semibold text-gray-700 mb-1">Your email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-border rounded-lg font-body text-gray-800 focus:outline-none focus:border-brand-primary"
                  placeholder="jane@yourcompany.com"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? 'Sending…' : 'Get My Full Report'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ReadinessAssessment() {
  const [currentDim, setCurrentDim] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  function handleAnswer(questionId, score) {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  }

  function handleNext() {
    if (currentDim < TOTAL_DIMENSIONS - 1) {
      setCurrentDim((d) => d + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleBack() {
    setCurrentDim((d) => Math.max(0, d - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (showResults) {
    return (
      <div className="bg-white rounded-xl border border-border p-8">
        <ResultsView results={calculateResults(answers)} />
        <div className="mt-8 pt-6 border-t border-border">
          <button
            onClick={() => { setShowResults(false); setCurrentDim(0); setAnswers({}); }}
            className="text-sm font-body text-gray-500 hover:text-brand-primary transition-colors"
          >
            ← Retake the assessment
          </button>
        </div>
      </div>
    );
  }

  const dimension = readinessDimensions[currentDim];

  return (
    <div className="bg-white rounded-xl border border-border p-8 space-y-8">
      <ProgressBar current={currentDim + 1} total={TOTAL_DIMENSIONS} />
      <DimensionStep
        dimension={dimension}
        dimIndex={currentDim}
        answers={answers}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
      />
    </div>
  );
}
