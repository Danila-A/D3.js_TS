import { useEffect, useRef, useState, type FC } from "react";
import { calculateDimensions } from "../../helpers/calculateDimensions";
import { useChartResponsiveness } from "../../helpers/useChartResponsiveness";
import { displaysWidths } from "../../helpers/variables";
import { axisBottom, axisLeft, select } from "d3";
import type { NumberValue } from "d3";
import { useAxisData } from "../../helpers/useAxisData";
import type { ChartData, ChartDimensions } from "../../interfaces";

interface Props {
    data: ChartData;
    startDimensions: ChartDimensions;
}

export const BarChart: FC<Props> = ({ data, startDimensions }) => {
    const initialDimensions = useRef(startDimensions);
    const [dimensions, setDimensions] = useState(calculateDimensions(initialDimensions, displaysWidths));
    useChartResponsiveness(initialDimensions, setDimensions);
    const {refXAxis, refYAxis, xScale, yScale} = useAxisData(data, dimensions);
    
    useEffect(() => {
        refXAxis.current && select<SVGGElement, string>(refXAxis.current).call(axisBottom(xScale));
    }, [refXAxis, xScale]);
    useEffect(() => {
        refYAxis.current && select<SVGGElement, NumberValue>(refYAxis.current).call(axisLeft(yScale));
    }, [refYAxis, yScale]);

    return (
        <svg width={dimensions.width} height={dimensions.height} >
            <g ref={refXAxis} transform={`translate(0, ${dimensions.height-dimensions.marginBottom})`} />
            <g ref={refYAxis} transform={`translate(${dimensions.marginLeft}, 0)`} />
            <g fill="steelblue" stroke="white">
                {data.map(([letter, value]) => (
                    <rect
                        key={letter}
                        x={xScale(letter)}
                        y={yScale(value)}
                        width={xScale.bandwidth()}
                        height={yScale(0) - yScale(value)}
                    />
                ))}
            </g>
        </svg>
    );
}
