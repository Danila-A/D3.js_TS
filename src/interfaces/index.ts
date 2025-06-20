import type { ScaleLinear } from "d3";

export interface DisplaysWidths {
    smartPhone: number;
    PC: number;
}
export type ChartData = [number, number][];
export interface ChartDimensions {
    width: number;
    height: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
}
export type CombinedChartDimensions = ChartDimensions & {boundedHeight: number; boundedWidth: number;}
export interface Ticks {
    value: number;
    offset: number;
}
export type Scale = ScaleLinear<number, number, never>;
