export interface DisplaysWidths {
    smartPhone: number;
    PC: number;
}
export type ChartData = ChartDataItem[];
export interface ChartDataItem {
    name: string;
    value: number;
}
export interface ChartDimensions {
    width: number;
    height: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
}
export type CombinedChartDimensions = ChartDimensions & {boundedHeight: number; boundedWidth: number;}
