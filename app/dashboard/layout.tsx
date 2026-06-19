"use client";

import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import DashboardMobileHeader from "@/components/dashboard/mobile-header";
import { ToastProvider } from "@/context/toast-context";
import { AuthProvider } from "@/context/auth-context";
import TopButtons from "@/components/dashboard/top-buttons";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <AuthProvider>
            <div className="min-h-screen bg-portfolio-bg text-portfolio-text antialiased selection:bg-portfolio-accent/20 selection:text-portfolio-accent flex w-full relative">
                <ToastProvider>

                    {/* Structural Drawer Layout Columns */}
                    <DashboardSidebar />
                    <DashboardMobileHeader />

                    {/* Main Content Viewport Canvas Block */}
                    <main className="flex-1 w-full md:pl-64 pt-14 md:pt-5 min-w-0 flex flex-col min-h-screen">
                        <div className="w-full max-w-5xl mx-auto p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
                            <TopButtons />
                            <div className="flex-1 w-full animate-fadeIn">
                                {children}
                            </div>
                        </div>
                    </main>

                </ToastProvider>
            </div>
        </AuthProvider>
    );
}