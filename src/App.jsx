
import './App.css'

"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Calendar, Clock, ListTodo, Settings, User } from "lucide-react"
import { cn } from "./lib/utils"
import { useMediaQuery } from "./hooks/use-mobile"

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const targetDate = new Date("2025-09-28T00:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">Mi Organizador Personal</h1>

        <div className="w-full max-w-3xl bg-slate-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl text-center mb-4 text-blue-300">Tiempo restante hasta el 28/09/2025</h2>

          <div className="grid grid-cols-4 gap-4 text-center">
            <TimeBlock value={timeLeft.days} label="Días" />
            <TimeBlock value={timeLeft.hours} label="Horas" />
            <TimeBlock value={timeLeft.minutes} label="Minutos" />
            <TimeBlock value={timeLeft.seconds} label="Segundos" />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuickAccessCard
              title="Tareas Pendientes"
              description="3 tareas para hoy"
              icon={<ListTodo className="h-6 w-6 text-blue-400" />}
            />
            <QuickAccessCard
              title="Próximos Eventos"
              description="Reunión a las 15:00"
              icon={<Calendar className="h-6 w-6 text-blue-400" />}
            />
          </div>
        </div>
      </main>

      {isMobile && <BottomNavigation />}
      {!isMobile && <SideNavigation />}
    </div>
  )
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-700 rounded-lg w-full py-4 mb-2">
        <span className="text-2xl md:text-4xl font-bold text-blue-300">{value}</span>
      </div>
      <span className="text-sm text-slate-300">{label}</span>
    </div>
  )
}

function QuickAccessCard({ title, description, icon }) {
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

function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 px-2 py-3">
      <div className="flex justify-around items-center">
        <NavItem icon={<Clock />} label="Inicio" active />
        <NavItem icon={<ListTodo />} label="Tareas" />
        <NavItem icon={<Calendar />} label="Calendario" />
        <NavItem icon={<User />} label="Perfil" />
        <NavItem icon={<Settings />} label="Ajustes" />
      </div>
    </div>
  )
}

function SideNavigation() {
  return (
    <div className="fixed top-0 left-0 h-full w-16 bg-slate-800 border-r border-slate-700 flex flex-col items-center py-8 gap-8">
      <NavItem icon={<Clock />} label="Inicio" active />
      <NavItem icon={<ListTodo />} label="Tareas" />
      <NavItem icon={<Calendar />} label="Calendario" />
      <NavItem icon={<User />} label="Perfil" />
      <NavItem icon={<Settings />} label="Ajustes" />
    </div>
  )
}

function NavItem({ icon, label, active = false }) {
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