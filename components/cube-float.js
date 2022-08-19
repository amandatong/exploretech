import { motion } from "framer-motion";

export default function CubeFloat({number=200, bigger=false}) {

    const generate_snow = [];
    for (let i = 0;i < number;i++){
      generate_snow.push(<div key={i} className={`snowcube ${bigger ? "bigger" : null}`}></div>)
    }

    return (
        <motion.div className="snow-contain">{generate_snow}</motion.div>
    )

}