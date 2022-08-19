import {useRef} from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";

const variants = {
    hidden: { pathLength: 0 },
    shown: { pathLength: 1}
}

export default function ConnectLine() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
    return(
        <motion.svg className="input-lines connect" ref={ref}  width="3" height="174" viewBox="0 0 3 174" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M1.5 -0.000152588V47.4999V174.001" stroke="url(#paint0_linear_57_707)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2, from:0}}
            />
            <defs>
                <linearGradient id="paint0_linear_57_707" x1="272.129" y1="157.081" x2="272.129" y2="-81.573" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#1DADCC"/>
                    <stop offset="1" stop-color="#306ECB"/>
                </linearGradient>
            </defs>
        </motion.svg>
    )
}
