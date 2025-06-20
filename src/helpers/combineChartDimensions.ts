import type { ChartDimensions, CombinedChartDimensions } from "../interfaces"

export const combineChartDimensions = (dimensions: ChartDimensions): CombinedChartDimensions => {
    const parsedDimensions = {
        ...dimensions,
        marginTop: dimensions.marginTop || 10,
        marginRight: dimensions.marginRight || 10,
        marginBottom: dimensions.marginBottom || 40,
        marginLeft: dimensions.marginLeft || 75,
    }

    return {
        ...parsedDimensions,
        boundedHeight: Math.max(
            parsedDimensions.height - parsedDimensions.marginTop - parsedDimensions.marginBottom,
            0
        ),
        boundedWidth: Math.max(
            parsedDimensions.width - parsedDimensions.marginRight - parsedDimensions.marginLeft,
            0
        ),
    };
}