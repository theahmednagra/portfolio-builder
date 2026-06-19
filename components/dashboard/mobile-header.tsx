"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGrid, FiUser, FiBarChart2, FiSettings, FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "@/context/auth-context";
import LogoutButton from "./logout-button";

export default function DashboardMobileHeader() {
    const { user } = useAuth();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Handle locking body scroll when layout modal overlays break viewports
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const navItems = [
        { label: "Overview", href: "/dashboard", icon: FiGrid },
        { label: "Portfolio", href: "/dashboard/portfolio", icon: FiUser },
        { label: "Analytics", href: "/dashboard/analytics", icon: FiBarChart2 },
        { label: "Settings", href: "/dashboard/settings", icon: FiSettings },
    ];

    return (
        <>
            <div className="md:hidden w-full h-14 border-b border-portfolio-border/60 bg-portfolio-bg/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 px-4 flex items-center justify-between select-none">
                <span className="font-black tracking-tight text-portfolio-text">
                    Stackfold
                </span>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-portfolio-text p-1.5 hover:bg-portfolio-card border border-transparent hover:border-portfolio-border/40 rounded-lg transition-all cursor-pointer flex items-center justify-center w-8 h-8"
                    aria-label="Toggle Navigation Hub Menu"
                >
                    {/* Animated 2-Line Container */}
                    <div className="flex flex-col gap-1 w-4.5 items-center justify-center">
                        {/* Top Line */}
                        <span
                            className={`h-0.5 w-full bg-portfolio-text rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-0.75" : ""
                                }`}
                        />
                        {/* Bottom Line */}
                        <span
                            className={`h-0.5 w-full bg-portfolio-text rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-0.75" : ""
                                }`}
                        />
                    </div>
                </button>
            </div>

            <div className={`fixed inset-0 z-30 md:hidden ${isOpen ? "visible" : "invisible pointer-events-none"}`}>
                {/* Backdrop Mask overlay */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsOpen(false)}
                />

                <aside className={`absolute top-0 bottom-0 left-0 w-64 bg-portfolio-bg border-r border-portfolio-border p-5 pt-20 flex flex-col justify-between transition-transform duration-300 ease-out transform will-change-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <nav className="space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13.5px] font-bold border transition-all duration-200 ${isActive
                                        ? "bg-portfolio-card border-portfolio-border text-portfolio-accent"
                                        : "text-portfolio-muted/70 border-transparent active:bg-portfolio-card/30"
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? "text-portfolio-accent" : "text-portfolio-muted/40"}`} />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Connected Identity Footer Node */}
                    <div className="border-t border-portfolio-border/60 pt-4 px-1 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-8 h-8 rounded-full bg-portfolio-accent/10 border border-portfolio-accent/20 flex items-center justify-center font-mono text-[11px] font-bold text-portfolio-accent shrink-0">
                                {user?.email?.slice(0, 1).toUpperCase() || "U"}
                            </div>
                            <div className="flex flex-col min-w-0 space-y-0.5">
                                <span className="text-[12px] font-bold truncate text-portfolio-text tracking-tight">{user?.email}</span>
                                <span className="text-[10px] font-mono text-portfolio-muted/50 truncate">@{user?.username}</span>
                            </div>
                        </div>
                        <LogoutButton />
                    </div>
                </aside>
            </div>
        </>
    );
}