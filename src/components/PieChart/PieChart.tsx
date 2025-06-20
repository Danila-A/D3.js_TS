import { useRef, useState, type FC } from "react";
import { calculateDimensions } from "../../helpers/calculateDimensions";
import { useChartResponsiveness } from "../../helpers/useChartResponsiveness";
import { displaysWidths } from "../../helpers/variables";
import { useArcsData } from "../../helpers/useArcsData";
import { Arcs } from "../Arcs/Arcs";
import { ArcsLabels } from "../ArcsLabels/ArcsLabels";
import styles from './PieChart.module.css';
import type { ChartData, ChartDimensions } from "../../interfaces";

interface Props {
    data: ChartData;
    startDimensions: ChartDimensions;
}

export const PieChart: FC<Props> = ({ data, startDimensions }) => {
    const initialDimensions = useRef(startDimensions);
    const [dimensions, setDimensions] = useState(calculateDimensions(initialDimensions, displaysWidths));
    useChartResponsiveness(initialDimensions, setDimensions);
    const { arcs, colorScale, pieArc, arcLabel } = useArcsData(data, dimensions);
    const viewBoxDimensions: string = [
                    -dimensions.width/2, 
                    -dimensions.height/2, 
                    dimensions.width, 
                    dimensions.height
                ].toString();
    return (
        <svg 
            width={dimensions.width} 
            height={dimensions.height} 
            viewBox={viewBoxDimensions}
            className={styles.svg}
        >
            <Arcs 
                arcs={arcs}
                colorScale={colorScale}
                pieArc={pieArc}
            />
            <ArcsLabels
                arcs={arcs}
                arcLabel={arcLabel}
            />
        </svg>
    );
}
