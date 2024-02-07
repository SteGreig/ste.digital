import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    children: React.ReactNode,
    className: string,
    offset: any
}

export const MouseTracker = ({ children, className, offset = { x: 0, y: 0} }: Props) => {
    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handler(e: MouseEvent) {
            if (element.current instanceof HTMLElement) {
                const x = e.clientX + offset.x, y = e.clientY + offset.y;
                element.current.style.transform = `translate(${x}px, ${y}px)`;
                element.current.style.visibility = 'visible';
            }
        }
        document.addEventListener('mousemove', handler);
        return () => document.removeEventListener('mousemove', handler);
    }, [offset.x, offset.y]);

    return createPortal(
        <div className={`${className} fixed top-0 left-0 invisible pointer-events-none`} ref={element}>
            {children}
        </div>
    , document.body);
};