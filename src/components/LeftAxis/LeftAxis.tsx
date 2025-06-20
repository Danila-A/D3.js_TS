import type { FC } from "react"
import type { CombinedChartDimensions, Ticks } from "../../interfaces"

interface Props {
    dimensions: CombinedChartDimensions;
    yTicks: Ticks[];
}

export const LeftAxis: FC<Props> = ({ dimensions, yTicks }) => {
  return (
    <>
        <g transform={`translate(${dimensions.marginLeft}, 0)`} >
            <path 
                d={["M", 0, 0, "V", dimensions.height-dimensions.marginBottom+6].join(" ")}
                stroke="blue"
            />
            {yTicks.map(({value, offset}) => (
                <g 
                    key={value}
                    transform={`translate(0, ${offset})`}
                >
                    <line 
                        x2='-6'
                        stroke='blue'
                    />
                    <line 
                        x2={dimensions.width}
                        stroke='#dddddd'
                    />
                    <text
                        key={value}
                        style={{
                            fontSize: '10px',
                            transform: 'translateX(-20px)',
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
