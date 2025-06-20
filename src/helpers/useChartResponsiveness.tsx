import { useEffect, type RefObject } from "react";
import { calculateDimensions } from "./calculateDimensions";
import { displaysWidths } from "./variables";
import type { ChartDimensions, CombinedChartDimensions } from "../interfaces";

export const useChartResponsiveness = (
    initialDimensions: RefObject<ChartDimensions>, 
    setDimensions: React.Dispatch<React.SetStateAction<CombinedChartDimensions>>
): void => {
    useEffect(()=> {
        const recalculateDimensions = () => {
            setDimensions(calculateDimensions(initialDimensions, displaysWidths));
        };

        window.addEventListener("resize", recalculateDimensions);

        return () => window.removeEventListener('resize', recalculateDimensions);
    }, []);
}
