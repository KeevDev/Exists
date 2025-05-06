
"use client";
import { cn } from "../lib/utils"


export function NavItem({ icon, label, active = false }) {
    return (
      <div className="flex flex-col items-center gap-1">
        <button
          className={cn(
            "p-2 rounded-full transition-colors",
            active ? "text-blue-400 bg-slate-700" : "text-slate-400 hover:text-blue-300",
          )}
        >
          {icon}
        </button>
        <span className="text-xs text-slate-400">{label}</span>
      </div>
    )
  }