import { useRef, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
export default function Cursor({targets}) {
    const delay = 5;

    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const endX = useRef(0);
    const endY = useRef(0);
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    const dot = useRef(null);
    const dotOutline = useRef(null);

    const toggleCursorVisibility = () => {
        if(cursorVisible.current){
            dot.current.style.opacity = 1;
            dotOutline.current.style.opacity = 1;
        } else {
            dot.current.style.opacity = 0;
            dotOutline.current.style.opacity = 0;
        }
    };

    const toggleCursorSize = () => {
        if(cursorEnlarged.current){
            dot.current.style.width = '15px';
            dot.current.style.height = '15px';
            // dot.current.style.transform = 'translate(-50%,-50%) scale (0.75)';
            dotOutline.current.style.transform = 'translate(-50%,-50%) scale (1.5)';
        } else {
            dot.current.style.width = '5px';
            dot.current.style.height = '5px';
            // dot.current.style.transform = 'translate(-50%,-50%) scale (1)';
            dotOutline.current.style.transform = 'translate(-50%,-50%) scale (1)';
        }
    }

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    }

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    }

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    }

    const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    }

    const mouseMoveEvent = e => {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;
        dot.current.style.top = endY.current + 'px';
        dot.current.style.left = endX.current + 'px';
    }

    const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;
        dotOutline.current.style.top = _y.current + 'px';
        dotOutline.current.style.left = _x.current + 'px';

        requestRef.current = requestAnimationFrame(animateDotOutline);
    }

    useEffect(() => {
        endX.current = window.innerWidth / 2;
        endY.current = window.innerHeight / 2;  
    },[]);

    useEffect(() => {
        addHoverEvent(targets);
        document.addEventListener("mousedown", mouseOverEvent);
        document.addEventListener("mouseup", mouseOutEvent);
        document.addEventListener("mousemove", mouseMoveEvent);
        document.addEventListener("mouseenter", mouseEnterEvent);
        document.addEventListener("mouseleave", mouseLeaveEvent);
        
        animateDotOutline();

        return () => {
            removeHoverEvent(targets);
            document.removeEventListener("mousedown", mouseOverEvent);
            document.removeEventListener("mouseup", mouseOutEvent);
            document.removeEventListener("mousemove", mouseMoveEvent);
            document.removeEventListener("mouseenter", mouseEnterEvent);
            document.removeEventListener("mouseleave", mouseLeaveEvent);
            
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const addHoverEvent = (targets) => {
        if (!targets) return;
      
        if (Array.isArray(targets)) {
          targets.forEach((target) => {
            [].forEach.call(document.querySelectorAll(target), (el) => {
              el.addEventListener('mouseenter', mouseOverEvent);
              el.addEventListener('mouseleave', mouseOutEvent);
            });
          });
        } else {
          [].forEach.call(document.querySelectorAll(targets), (el) => {
            el.addEventListener('mouseenter', mouseOverEvent);
            el.addEventListener('mouseleave', mouseOutEvent);
          });
        }
    };
      
    const removeHoverEvent = (targets) => {
        if (!targets) return;
      
        if (Array.isArray(targets)) {
          targets.forEach((target) => {
            [].forEach.call(document.querySelectorAll(target), (el) => {
              el.removeEventListener('mouseenter', mouseEnterEvent);
              el.removeEventListener('mouseleave', mouseLeaveEvent);
            });
          });
        } else {
          [].forEach.call(document.querySelectorAll(targets), (el) => {
            el.removeEventListener('mouseenter', mouseEnterEvent);
            el.removeEventListener('mouseleave', mouseLeaveEvent);
          });
        }
    };

    return(
        <>
            <div ref={dotOutline} className="cursor-dot-outline"/>
            <div ref={dot} className="cursor-dot"/>
        </>
    )
}