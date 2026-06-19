"use client";

import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGrid, FiUser, FiBarChart2, FiSettings } from "react-icons/fi";
import LogoutButton from "./logout-button";

export default function DashboardSidebar() {
    const { user } = useAuth();
    const pathname = usePathname();

    const navItems = [
        { label: "Overview", href: "/dashboard", icon: FiGrid },
        { label: "Portfolio", href: "/dashboard/portfolio", icon: FiUser },
        { label: "Analytics", href: "/dashboard/analytics", icon: FiBarChart2 },
        { label: "Settings", href: "/dashboard/settings", icon: FiSettings },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 border-r border-portfolio-border/60 bg-portfolio-bg fixed top-0 bottom-0 left-0 z-30 p-5 justify-between select-none">
            <div className="space-y-7">
                {/* Branding Hub */}
                <div className="px-3 pt-2">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-portfolio-muted/40 block uppercase">
                        Control Center
                    </span>
                    <span className="text-[18px] font-black tracking-tight text-portfolio-text font-sans block mt-1">
                        Stackfold
                    </span>
                </div>

                {/* Navigation Track */}
                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-bold tracking-tight transition-all duration-200 group border relative overflow-hidden ${isActive
                                        ? "bg-portfolio-card border-portfolio-border text-portfolio-accent"
                                        : "text-portfolio-muted/70 hover:text-portfolio-text hover:bg-portfolio-card/30 border-transparent"
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-2.5 bottom-2.5 w-0.75 bg-portfolio-accent rounded-r-full" />
                                )}
                                <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-portfolio-accent" : "text-portfolio-muted/40 group-hover:text-portfolio-text/70"}`} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* User Footer Profile Node */}
            <div className="border-t border-portfolio-border/60 pt-4 px-1.5 flex items-center justify-between gap-2 bg-portfolio-bg/50">
                <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-portfolio-accent/10 border border-portfolio-accent/20 flex items-center justify-center font-mono text-[11px] font-bold text-portfolio-accent shrink-0 shadow-inner">
                        {user?.email?.slice(0, 1).toUpperCase() || "U"}
                    </div>
                    <div className="flex flex-col min-w-0 space-y-0.5">
                        <span className="text-[12.5px] font-bold truncate text-portfolio-text tracking-tight">{user?.email}</span>
                        <span className="text-[10px] font-mono text-portfolio-muted/50 truncate">@{user?.username}</span>
                    </div>
                </div>
                <LogoutButton />
            </div>
        </aside>
    );
}