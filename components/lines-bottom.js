import {useRef} from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";

const variants = {
    hidden: { pathLength: 0 },
    shown: { pathLength: 1}
}

export default function LinesBottom() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
    return(
        <motion.svg  className="input-lines bottom" width="1145" height="174" viewBox="0 0 1145 174" fill="none" xmlns="http://www.w3.org/2000/svg"
        ref={ref}  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4}}>
            <motion.path d="M1 0.00109863V81.9613L435 81.9602V174.001" stroke="url(#paint0_linear_57_679)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2, from:0}}
            />
            <motion.path d="M1144 0.00109863V81.9613L710 81.9602V174.001" stroke="url(#paint1_linear_57_679)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2, from:0}}
            />
            <motion.path d="M272.5 0.00108337V47.5011L506 47.5V174.001M506 47.5L272.5 47.5011" stroke="url(#paint2_linear_57_679)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2, from:0}}
            />
            <motion.path d="M872.5 0.00108337V47.5011L639 47.5V174.001M639 47.5L872.5 47.5011" stroke="url(#paint3_linear_57_679)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2, from:0}}
            />
            <motion.path d="M572.5 -3.05176e-05V47.5V174.001" stroke="url(#paint4_linear_57_679)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2, from:0}}
            />
            <defs>
                <linearGradient id="paint0_linear_57_679" x1="132.371" y1="157.081" x2="132.371" y2="-81.5728" gradientUnits="userSpaceOnUse">
                <stop stop-color="#306ECB"/>
                <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
                <linearGradient id="paint1_linear_57_679" x1="1012.63" y1="157.081" x2="1012.63" y2="-81.5728" gradientUnits="userSpaceOnUse">
                <stop stop-color="#306ECB"/>
                <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
                <linearGradient id="paint2_linear_57_679" x1="235.371" y1="157.081" x2="235.371" y2="-81.5729" gradientUnits="userSpaceOnUse">
                <stop stop-color="#306ECB"/>
                <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
                <linearGradient id="paint3_linear_57_679" x1="909.629" y1="157.081" x2="909.629" y2="-81.5729" gradientUnits="userSpaceOnUse">
                <stop stop-color="#306ECB"/>
                <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
                <linearGradient id="paint4_linear_57_679" x1="301.871" y1="157.081" x2="301.871" y2="-81.5729" gradientUnits="userSpaceOnUse">
                <stop stop-color="#306ECB"/>
                <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
            </defs>
        </motion.svg>

    )
}