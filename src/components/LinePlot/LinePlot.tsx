import { useRef, useState, type FC } from "react";
import { calculateDimensions } from "../../helpers/calculateDimensions";
import { useChartResponsiveness } from "../../helpers/useChartResponsiveness";
import { displaysWidths } from "../../helpers/variables";
import { useAxisData } from "../../helpers/useAxisData";
import { BottomAxis } from "../BottomAxis/BottomAxis";
import { LeftAxis } from "../LeftAxis/LeftAxis";
import { ChartLine } from "../ChartLine/ChartLine";
import type { ChartData, ChartDimensions } from "../../interfaces";

interface Props {
    data: ChartData;
    startDimensions: ChartDimensions;
}

export const LinePlot: FC<Props> = ({ data, startDimensions }) => {
    const initialDimensions = useRef(startDimensions);
    const [dimensions, setDimensions] = useState(calculateDimensions(initialDimensions, displaysWidths));
    useChartResponsiveness(initialDimensions, setDimensions);
    const { xScale, yScale, xTicks, yTicks } = useAxisData(data, dimensions);

    return (
        <svg width={dimensions.width} height={dimensions.height} >
            <BottomAxis
                dimensions={ dimensions }
                xTicks={ xTicks }
            />

            <LeftAxis
                dimensions={ dimensions }
                yTicks={ yTicks }
            />

            <ChartLine 
                data={ data }
                xScale={ xScale }
                yScale={ yScale }
            />
        </svg>
    );
}
