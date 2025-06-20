import { scaleBand, scaleLinear } from "d3";
import { useRef } from "react";
import type { ChartData, ChartDimensions } from "../interfaces";
import { yAxisData } from "./variables";

export const useAxisData = (data: ChartData, dimensions: ChartDimensions) => {
    const refXAxis = useRef<SVGGElement>(null);
    const refYAxis = useRef<SVGGElement>(null);

    const xScale = scaleBand(
        data.map((item) => item[0]), [dimensions.marginLeft, dimensions.width-dimensions.marginLeft]
    );
    const yScale = scaleLinear()
        .domain([yAxisData[0], yAxisData[yAxisData.length-1]])
        .range([dimensions.height-dimensions.marginBottom, dimensions.marginTop]);

    return { xScale, yScale, refXAxis, refYAxis };
}
