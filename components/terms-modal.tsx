"use client"

import { X, ShieldAlert } from "lucide-react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/70 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-white rounded-t-2xl sm:rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 border-b border-slate-200 bg-slate-50 px-4 pt-5 pb-4 sm:px-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors shadow-sm"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-start gap-3 pr-12">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-700 text-white">
              <ShieldAlert className="w-6 h-6" strokeWidth={2} />
            </div>
            <div>
              <h2 id="terms-modal-title" className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                Site rules &amp; 18+
              </h2>
              <p className="text-xs text-slate-500 font-semibold mt-0.5 uppercase tracking-wider">Terms of use</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 space-y-4 text-slate-600 text-sm leading-relaxed">
          <p>
            Using <strong>ielistbettingsites.com</strong> means you accept these rules. They apply on all devices.
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-bold text-slate-800 mb-1">Age</p>
            <p>You must be 18 or older. This site is about gambling; it is not for minors.</p>
          </div>
          <div>
            <p className="font-bold text-slate-800 mb-1">Responsible play</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Set time and money limits before you bet</li>
              <li>Never chase losses</li>
              <li>Get help early — GambleAware, GamCare, Gamblers Anonymous</li>
            </ul>
          </div>
          <p>
            We do not guarantee that offers or info stay accurate; operators change terms. External sites have their own policies; we are not responsible for them.
          </p>
          <p className="text-xs text-slate-500">
            No warranty; this site is not legal advice. See our Cookie and Privacy pages for data use.
          </p>
        </div>

        <div className="shrink-0 border-t border-slate-200 bg-slate-800 text-white px-4 py-3 sm:px-6 sm:rounded-b-2xl">
          <p className="text-center text-xs sm:text-sm font-semibold text-slate-200">18+ · T&amp;Cs apply · Play responsibly</p>
        </div>
      </div>
    </div>
  )
}
