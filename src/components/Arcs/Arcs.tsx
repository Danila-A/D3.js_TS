import type { Arc, PieArcDatum, ScaleOrdinal } from "d3";
import type { ChartDataItem } from "../../interfaces";
import type { FC } from "react";

interface Props {
    arcs: PieArcDatum<ChartDataItem>[];
    colorScale: ScaleOrdinal<string, string, never>;
    pieArc: Arc<void, PieArcDatum<ChartDataItem>>;
}

export const Arcs: FC<Props> = ({ arcs, colorScale, pieArc }) => {
  return (
    <g stroke="white">
        {arcs.map((item) => (
            <path
                key={item.index}
                fill={colorScale(item.data.name)}
                d={pieArc(item) || undefined}
            >
                <title>
                    {`${item.data.name}: ${item.data.value.toLocaleString('en-US')}`}
                </title>
            </path>
        ))}
    </g>
  );
}
