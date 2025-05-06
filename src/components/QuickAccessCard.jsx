

"use client";




export function QuickAccessCard({ title, description, icon }) {
    return (
      <div className="bg-slate-700 p-4 rounded-lg flex items-center gap-4 hover:bg-slate-600 transition-colors cursor-pointer">
        {icon}
        <div>
          <h3 className="font-medium text-blue-200">{title}</h3>
          <p className="text-sm text-slate-300">{description}</p>
        </div>
      </div>
    )
  }
  