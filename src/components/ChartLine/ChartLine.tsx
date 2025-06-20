import { line } from "d3";
import type { ChartData, Scale } from "../../interfaces";
import type { FC } from "react";

interface Props {
    data: ChartData;
    xScale: Scale;
    yScale: Scale;
}

export const ChartLine: FC<Props> = ({ data, xScale, yScale }) => {

    const chartLine = line((d) => xScale(d[0]), (d) => yScale(d[1]));
    return (
    <>
        <path
            fill="none"
            stroke="red"
            strokeWidth="3"
            d={chartLine(data) || undefined}
        />
        <g strokeWidth="1.5">
            {data.map((item, index) => (
                <circle 
                    fill="red" 
                    stroke="black" 
                    key={index} 
                    cx={xScale(item[0])} 
                    cy={yScale(item[1])} 
                    r="3.5" 
                />
            ))}
        </g>
    </>
    );
}
