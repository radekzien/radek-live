"use client"

import { ReactNode, useEffect, useRef, useState } from "react"

type QualiFadeInSectionProps = {
    children: ReactNode,
    delay?: number,
    fromLeft?: boolean,
}

export const QualiFadeInSection = ({
    children,
    delay = 0,
    fromLeft = false
}: QualiFadeInSectionProps) => {
    const[isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        setVisible(true);
                    }
                })
            },
            {threshold: 0.1}
        )

        if (domRef.current) {
            observer.observe(domRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
        ref={domRef}
        className={`transition-opacity transition-transform duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-x-0'
            : fromLeft
            ? 'translate-x-20 opacity-0'
            : '-translate-x-20 opacity-0'}`}
            style={{transitionDelay : `${delay}s`}}
            > {children} </div>
    )
}