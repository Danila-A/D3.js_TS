import { scaleLinear } from "d3";
import { useMemo } from "react";
import type { ChartData, ChartDimensions } from "../interfaces";

export const useAxisData = (data: ChartData, dimensions: ChartDimensions) => {
    const xScale = useMemo(()=> {
        return scaleLinear([0, data.length], [dimensions.marginLeft, dimensions.width - dimensions.marginRight]);
    }, [dimensions]);
    const yScale = useMemo(()=> {
        return scaleLinear([0, data.length], [dimensions.height - dimensions.marginBottom, dimensions.marginTop]);
    }, [dimensions]);

    const xTicks = useMemo(() => {
        return xScale.ticks().map((value) => ({
            value,
            offset: xScale(value),
        }))
    }, [dimensions]);
    const yTicks = useMemo(() => {
        return yScale.ticks().map((value) => ({
            value,
            offset: yScale(value),
        }))
    }, [dimensions]);

    return { xScale, yScale, xTicks, yTicks };
}
