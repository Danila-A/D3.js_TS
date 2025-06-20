import { arc, interpolateSpectral, pie, quantize, scaleOrdinal, type PieArcDatum } from "d3";
import type { ChartData, ChartDataItem, ChartDimensions } from "../interfaces";

export const useArcsData = (data: ChartData, dimensions: ChartDimensions) => {
    const colorScale = scaleOrdinal<string>()
        .domain(data.map((item) => item.name))
        .range(quantize((t) => interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

    const pieChart = pie<void, ChartDataItem>()
        .sort(null)
        .padAngle(0.025)
        .value((item) => item.value);

    const pieArc = arc<void, PieArcDatum<ChartDataItem>>()
        .innerRadius(Math.min(dimensions.width, dimensions.height) / 5 - 1)
        .outerRadius(Math.min(dimensions.width, dimensions.height) / 2 - 1);
    // -1 - это ширина strokeWidth.

    const arcs = pieChart(data);

    const labelRadius = pieArc.outerRadius()(arcs[0]) * 0.8;

    const arcLabel = arc<void, PieArcDatum<ChartDataItem>>()
        .innerRadius(labelRadius)
        .outerRadius(labelRadius);

    return { colorScale, arcs, pieArc, arcLabel };
}
