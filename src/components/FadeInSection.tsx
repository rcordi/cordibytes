/**
 * FadeInSection
 * 
 * Reveals wrapped content with animation when it enters the viewport
 */

import {useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

type FadeInSectionProps = {
    children: ReactNode
}

export default function FadeInSection({ children }: FadeInSectionProps) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            {threshold: 0.15,}
        )

        if (ref.current) observer.observe(ref.current)
        
        return () => observer.disconnect()
    }, [])

    return (
        <div
         ref={ref}
         className={[
            "transition duration-700 ease-out will-change-transform",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
         ].join(" ")}
        >
         {children}
    </div>
    )
}