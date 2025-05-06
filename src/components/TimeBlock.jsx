
"use client";




export function TimeBlock({ value, label }) {
    return (
      <div className="flex flex-col items-center">
        <div className="bg-slate-700 rounded-lg w-full py-4 mb-2">
          <span className="text-2xl md:text-4xl font-bold text-blue-300">{value}</span>
        </div>
        <span className="text-sm text-slate-300">{label}</span>
      </div>
    )
  }
  