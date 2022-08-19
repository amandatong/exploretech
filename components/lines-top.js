import {useRef} from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";

const variants = {
    hidden: { pathLength: 0 },
    shown: { pathLength: 1}
}

export default function LinesTop() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
    return(
        <motion.svg className="input-lines" ref={ref} width="1145" height="174" viewBox="0 0 1145 174" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{opacity:0}}
            whileInView={{opacity:1}}>
            <motion.path d="M435 0V81.9602L1 81.9591V174" stroke="url(#paint0_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2, from:0}}
            />
            <motion.path d="M710 0V81.9602L1144 81.9591V174" stroke="url(#paint1_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2}}
                />
            <motion.path d="M639 -1.52588e-05V127.001L872.5 127V174" stroke="url(#paint2_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2}}
            />
            <motion.path d="M506.5 -1.52588e-05V127.001L273 127V174" stroke="url(#paint3_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2}}
            />
            <motion.path d="M572.5 -3.05176e-05V47.5V174.001" stroke="url(#paint4_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} 
                style={{pathLength: pathLength, opacity: opacity}} transition={{duration:2}}
            />
            <defs>
            <linearGradient id="paint0_linear_57_678" x1="299.5" y1="240.5" x2="303.5" y2="9.50001" gradientUnits="userSpaceOnUse">
            <stop stop-color="#14237D"/>
            <stop offset="1" stop-color="#306ECB"/>
            </linearGradient>
            <linearGradient id="paint1_linear_57_678" x1="847" y1="270.5" x2="844.5" y2="-17.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#14237D"/>
            <stop offset="1" stop-color="#306ECB"/>
            </linearGradient>
            <linearGradient id="paint2_linear_57_678" x1="592.5" y1="223.5" x2="596.5" y2="37.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#14237D"/>
            <stop offset="1" stop-color="#306ECB"/>
            </linearGradient>
            <linearGradient id="paint3_linear_57_678" x1="553" y1="223.5" x2="549" y2="37.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#14237D"/>
            <stop offset="1" stop-color="#306ECB"/>
            </linearGradient>
            <linearGradient id="paint4_linear_57_678" x1="842" y1="235" x2="844.5" y2="36.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#14237D"/>
            <stop offset="1" stop-color="#306ECB"/>
            </linearGradient>
            </defs>


            {/* <motion.path d="M1 174V92.0398L435 92.0409V0" stroke="url(#paint0_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} style={{pathLength: pathLength, opacity: opacity}} transition={{duration:0.7}}
            />
            <motion.path d="M1144 174V92.0398L710 92.0409V0" stroke="url(#paint1_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} style={{pathLength: pathLength, opacity: opacity}} transition={{duration:0.7}}/>
            <motion.path d="M272.5 174V126.5L506 126.501V0M506 126.501L272.5 126.5" stroke="url(#paint2_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} style={{pathLength: pathLength, opacity: opacity}} transition={{duration:0.7}}/>
            <motion.path d="M872.5 174V126.5L639 126.501V0M639 126.501L872.5 126.5" stroke="url(#paint3_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} style={{pathLength: pathLength, opacity: opacity}} transition={{duration:0.7}}/>
            <motion.path d="M572.5 174.001V126.501V0" stroke="url(#paint4_linear_57_678)" stroke-width="2"
                variants={variants} initial="hidden" animate={isInView ? 'shown' : 'hidden'} style={{pathLength: pathLength, opacity: opacity}} transition={{duration:0.7}}/>
            <defs>
                <linearGradient id="paint0_linear_57_678" x1="132.371" y1="16.9199" x2="132.371" y2="255.574" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#306ECB"/>
                    <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
                <linearGradient id="paint1_linear_57_678" x1="1012.63" y1="16.9199" x2="1012.63" y2="255.574" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#306ECB"/>
                    <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
                <linearGradient id="paint2_linear_57_678" x1="235.371" y1="16.9199" x2="235.371" y2="255.574" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#306ECB"/>
                    <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
                <linearGradient id="paint3_linear_57_678" x1="909.629" y1="16.9199" x2="909.629" y2="255.574" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#306ECB"/>
                    <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
                <linearGradient id="paint4_linear_57_678" x1="301.871" y1="16.9199" x2="301.871" y2="255.574" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#306ECB"/>
                    <stop offset="1" stop-color="#14237D"/>
                </linearGradient>
            </defs> */}
        </motion.svg>
    )
}