import { useEffect, useRef } from "react";

export default function useElementVisibility(setIsVisible) {
    const containerRef = useRef(null);

    const options = {
        root: null,
        rootMargin: "0px",
    }

    const callback = (entries) => {
        const [ entry ] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [containerRef]);

    return [containerRef];
}