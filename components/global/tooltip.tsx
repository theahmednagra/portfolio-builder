"use client";

import React from "react";

interface TooltipProps {
    children: React.ReactNode;
    content: string;
    position?: "top" | "bottom" | "left" | "right"; // Expanded positions
}

export default function Tooltip({
    children,
    content,
    position = "bottom" // Default set to bottom
}: TooltipProps) {

    // Dynamic classes for positioning and centering based on direction
    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2 origin-bottom",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2 origin-top",
        left: "right-full top-1/2 -translate-y-1/2 mr-2 origin-right",
        right: "left-full top-1/2 -translate-y-1/2 ml-2 origin-left",
    };

    return (
        <div className="relative group/tooltip flex items-center justify-center w-max">
            {/* Target Element Hook */}
            {children}

            {/* Reusable Tooltip Overlay */}
            <span
                className={`z-110 absolute scale-0 group-hover/tooltip:scale-100 min-w-max rounded-lg px-2.5 py-1.5 text-[11px] font-mono font-bold tracking-tight transition-all duration-150 shadow-xl pointer-events-none select-none bg-portfolio-card text-portfolio-text border border-portfolio-border backdrop-blur-md ${positionClasses[position]}`}
            >
                {content}
            </span>
        </div>
    );
}