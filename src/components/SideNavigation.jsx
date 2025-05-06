
"use client";

import { NavItem } from "./NavItem"
import { Calendar, Clock, ListTodo, Settings, User } from "lucide-react"


export function SideNavigation() {
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
  