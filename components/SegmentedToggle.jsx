"use client";

import * as React from "react";

export default function SegmentedToggle({ label, options, value, onChange }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {label ? <span className="text-sm text-slate-600">{label}</span> : null}

      <div
        className="rounded-full bg-white/60 p-1 shadow-sm ring-1 ring-slate-200 backdrop-blur"
        role="tablist"
        aria-label={label ?? "Segmented toggle"}
      >
        <div className="flex items-center">
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onChange(opt.value)}
                className={[
                  "relative rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-white text-slate-900  border-1 border-blue-400 shadow ring-1 ring-slate-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-gray-300",
                ].join(" ")}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
