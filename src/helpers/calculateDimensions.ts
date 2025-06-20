import type { RefObject } from "react";
import type { ChartDimensions, CombinedChartDimensions, DisplaysWidths } from "../interfaces";
import { combineChartDimensions } from "./combineChartDimensions";

export const calculateDimensions = (
    initialDimensions: RefObject<ChartDimensions>, 
    displaysWidths: DisplaysWidths
): CombinedChartDimensions => {

    if (window.innerWidth <= displaysWidths.smartPhone) {
        const { widthFactor, percentFactor } = getMobileCalculationFactors(window.innerWidth, initialDimensions, displaysWidths);
        
        return combineChartDimensions({
            ...initialDimensions.current,
            width: window.innerWidth - 20,
            height: (window.innerWidth - 20) * widthFactor,
            marginTop: initialDimensions.current.marginTop * percentFactor,
            marginRight: initialDimensions.current.marginRight * percentFactor,
        });    
    } else {
        const percentFactor = getPCCalculationFactor(window.innerWidth, displaysWidths);

        return combineChartDimensions({
            ...initialDimensions.current,
            width: initialDimensions.current.width * percentFactor,
            height: initialDimensions.current.height * percentFactor,
            marginTop: initialDimensions.current.marginTop * percentFactor,
            marginRight: initialDimensions.current.marginRight * percentFactor,
        });
    }
};

function getMobileCalculationFactors(
    currentWidth: number, 
    initialDimensions: RefObject<ChartDimensions>, 
    displaysWidths: DisplaysWidths
): {widthFactor: number; percentFactor: number} {
    const onePercent = displaysWidths.smartPhone / 100;        
    const currentPercentWidth = currentWidth / onePercent;
    const percentFactor = percentWidthToFactor(currentPercentWidth);
    const widthFactor = initialDimensions.current.height / initialDimensions.current.width;

    return {widthFactor, percentFactor};
}

function getPCCalculationFactor(currentWidth: number, displaysWidths: DisplaysWidths): number {
    const onePercent = displaysWidths.PC / 100;
    const currentPercentWidth = currentWidth / onePercent;
    const percentFactor = percentWidthToFactor(currentPercentWidth);

    return percentFactor;
}

function percentWidthToFactor(currentPercentWidth: number): number {
    return currentPercentWidth / 100;
}
