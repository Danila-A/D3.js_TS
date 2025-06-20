import type { ChartData, ChartDimensions, DisplaysWidths, YAxisData } from "../interfaces";

export const displaysWidths: DisplaysWidths = {
    smartPhone: 500,
    PC: 1920,
}

export const dataArray: ChartData = [
    ['A', 20],
    ['B', 30],
    ['C', 40],
    ['D', 50],
    ['E', 60],
    ['F', 70],
    ['G', 80],
];
export const yAxisData: YAxisData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export const dimensions: ChartDimensions = {
    width: 840,
    height: 600,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 30
}
