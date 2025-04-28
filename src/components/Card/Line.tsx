'use client'
import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const MyResponsiveLine = ({ data }: any) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
        />
    )
}
export default function Line() {
    const data = [
        {
            "id": "japan",
            "color": "hsl(59, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 3
                },
                {
                    "x": "helicopter",
                    "y": 115
                },
                {
                    "x": "boat",
                    "y": 34
                },
                {
                    "x": "train",
                    "y": 223
                },
                {
                    "x": "subway",
                    "y": 126
                },
                {
                    "x": "bus",
                    "y": 102
                },
                {
                    "x": "car",
                    "y": 76
                },
                {
                    "x": "moto",
                    "y": 153
                },
                {
                    "x": "bicycle",
                    "y": 90
                },
                {
                    "x": "horse",
                    "y": 112
                },
                {
                    "x": "skateboard",
                    "y": 253
                },
                {
                    "x": "others",
                    "y": 95
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(175, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 253
                },
                {
                    "x": "helicopter",
                    "y": 164
                },
                {
                    "x": "boat",
                    "y": 194
                },
                {
                    "x": "train",
                    "y": 58
                },
                {
                    "x": "subway",
                    "y": 158
                },
                {
                    "x": "bus",
                    "y": 189
                },
                {
                    "x": "car",
                    "y": 69
                },
                {
                    "x": "moto",
                    "y": 189
                },
                {
                    "x": "bicycle",
                    "y": 180
                },
                {
                    "x": "horse",
                    "y": 174
                },
                {
                    "x": "skateboard",
                    "y": 276
                },
                {
                    "x": "others",
                    "y": 290
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(244, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 249
                },
                {
                    "x": "helicopter",
                    "y": 103
                },
                {
                    "x": "boat",
                    "y": 225
                },
                {
                    "x": "train",
                    "y": 299
                },
                {
                    "x": "subway",
                    "y": 119
                },
                {
                    "x": "bus",
                    "y": 267
                },
                {
                    "x": "car",
                    "y": 186
                },
                {
                    "x": "moto",
                    "y": 115
                },
                {
                    "x": "bicycle",
                    "y": 170
                },
                {
                    "x": "horse",
                    "y": 166
                },
                {
                    "x": "skateboard",
                    "y": 124
                },
                {
                    "x": "others",
                    "y": 21
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(331, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 118
                },
                {
                    "x": "helicopter",
                    "y": 191
                },
                {
                    "x": "boat",
                    "y": 140
                },
                {
                    "x": "train",
                    "y": 72
                },
                {
                    "x": "subway",
                    "y": 108
                },
                {
                    "x": "bus",
                    "y": 96
                },
                {
                    "x": "car",
                    "y": 259
                },
                {
                    "x": "moto",
                    "y": 82
                },
                {
                    "x": "bicycle",
                    "y": 159
                },
                {
                    "x": "horse",
                    "y": 161
                },
                {
                    "x": "skateboard",
                    "y": 81
                },
                {
                    "x": "others",
                    "y": 64
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(87, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 249
                },
                {
                    "x": "helicopter",
                    "y": 35
                },
                {
                    "x": "boat",
                    "y": 3
                },
                {
                    "x": "train",
                    "y": 112
                },
                {
                    "x": "subway",
                    "y": 158
                },
                {
                    "x": "bus",
                    "y": 96
                },
                {
                    "x": "car",
                    "y": 86
                },
                {
                    "x": "moto",
                    "y": 22
                },
                {
                    "x": "bicycle",
                    "y": 232
                },
                {
                    "x": "horse",
                    "y": 66
                },
                {
                    "x": "skateboard",
                    "y": 23
                },
                {
                    "x": "others",
                    "y": 102
                }
            ]
        }
    ]
    return <Card>
        <CardHeader>
            <CardTitle>Line</CardTitle>
            <CardDescription>These are the numbers of this year.</CardDescription>
        </CardHeader>
        <CardContent className="w-full flex items-center h-[100px] ">
            <div style={{ height: 250 }}>
                <MyResponsiveLine data={data} />
            </div>
        </CardContent>
    </Card>
}