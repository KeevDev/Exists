

"use client";

import { NavItem } from "./NavItem"
import { Calendar, Clock, ListTodo, Settings, User } from "lucide-react"


export function BottomNavigation() {
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