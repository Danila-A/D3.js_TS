import type { Arc, PieArcDatum } from "d3";
import type { ChartDataItem } from "../../interfaces";
import type { FC } from "react";

interface Props {
    arcs: PieArcDatum<ChartDataItem>[];
    arcLabel: Arc<void, PieArcDatum<ChartDataItem>>;
}

export const ArcsLabels: FC<Props> = ({ arcs, arcLabel }) => {
  return (
    <g textAnchor="middle">
        {arcs.map((item) => (
            <text key={item.index} transform={`translate(${arcLabel.centroid(item)})`}>
                <tspan>
                    {item.data.name}
                </tspan>
                {(item.endAngle - item.startAngle) > 0.25 ? 
                    <tspan
                        x="0"
                        y="0.9em"
                        fillOpacity={0.7}
                    >
                        {item.data.value.toLocaleString('en-US')}
                    </tspan> 
                : null}
            </text>
        ))}
    </g>
  );
}
