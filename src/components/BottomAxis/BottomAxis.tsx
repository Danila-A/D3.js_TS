import type { FC } from "react";
import type { CombinedChartDimensions, Ticks } from "../../interfaces";

interface Props {
    dimensions: CombinedChartDimensions;
    xTicks: Ticks[];
}

export const BottomAxis: FC<Props> = ({dimensions, xTicks}) => {
  return (
    <>
        <g transform={`translate(0, ${dimensions.height - dimensions.marginBottom})`} >
            <path 
                d={["M", dimensions.marginLeft-6, 0, 'H', dimensions.width].join(" ")}
                stroke="blue"
            />
            {xTicks.map(({value, offset}) => (
                <g
                    key={value}
                    transform={`translate(${offset}, 0)`}
                >
                    <line
                        y2='6'
                        stroke='blue'
                    />
                    <line
                        y2={-dimensions.height+dimensions.marginTop}
                        stroke='#dddddd'
                    />
                    <text
                        key={value}
                        style={{
                            fontSize: '10px',
                            textAnchor: 'middle',
                            transform: 'translateY(20px)',
                            fontFamily: 'Arial',
                        }}
                    >
                        {value}
                    </text>
                </g>
            ))}
        </g>
    </>
  );
}
