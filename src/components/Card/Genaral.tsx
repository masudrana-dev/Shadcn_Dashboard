'use client'

import { ResponsiveAreaBump } from "@nivo/bump";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const MyResponsiveBump = ({ data }: { data: any }) => {
    return (
        <ResponsiveAreaBump
            data={data}
            colors={{ scheme: 'spectral' }}
            inactiveOpacity={0.15}
            pointSize={10}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ from: 'serie.color' }}
            axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -36,
                truncateTickAt: 0
            }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'ranking',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
            }}
            margin={{ top: 20, right: 60, bottom: 20, left: 20 }}
            axisRight={null}
        />
    )
}
export default function Genaral() {
    const data = [
        {
            "id": "Serie 1",
            "data": [
                {
                    "x": "2000",
                    "y": 9
                },
                {
                    "x": "2001",
                    "y": 12
                },
                {
                    "x": "2002",
                    "y": 6
                },
                {
                    "x": "2003",
                    "y": 12
                },
                {
                    "x": "2004",
                    "y": 3
                }
            ]
        },
        {
            "id": "Serie 2",
            "data": [
                {
                    "x": "2000",
                    "y": 8
                },
                {
                    "x": "2001",
                    "y": 1
                },
                {
                    "x": "2002",
                    "y": 8
                },
                {
                    "x": "2003",
                    "y": 9
                },
                {
                    "x": "2004",
                    "y": 2
                }
            ]
        },
        {
            "id": "Serie 3",
            "data": [
                {
                    "x": "2000",
                    "y": 6
                },
                {
                    "x": "2001",
                    "y": 3
                },
                {
                    "x": "2002",
                    "y": 10
                },
                {
                    "x": "2003",
                    "y": 11
                },
                {
                    "x": "2004",
                    "y": 9
                }
            ]
        },
        {
            "id": "Serie 4",
            "data": [
                {
                    "x": "2000",
                    "y": 10
                },
                {
                    "x": "2001",
                    "y": 2
                },
                {
                    "x": "2002",
                    "y": 1
                },
                {
                    "x": "2003",
                    "y": 7
                },
                {
                    "x": "2004",
                    "y": 12
                }
            ]
        },
        {
            "id": "Serie 5",
            "data": [
                {
                    "x": "2000",
                    "y": 1
                },
                {
                    "x": "2001",
                    "y": 7
                },
                {
                    "x": "2002",
                    "y": 2
                },
                {
                    "x": "2003",
                    "y": 3
                },
                {
                    "x": "2004",
                    "y": 10
                }
            ]
        },
        {
            "id": "Serie 6",
            "data": [
                {
                    "x": "2000",
                    "y": 3
                },
                {
                    "x": "2001",
                    "y": 10
                },
                {
                    "x": "2002",
                    "y": 9
                },
                {
                    "x": "2003",
                    "y": 5
                },
                {
                    "x": "2004",
                    "y": 5
                }
            ]
        },
        {
            "id": "Serie 7",
            "data": [
                {
                    "x": "2000",
                    "y": 11
                },
                {
                    "x": "2001",
                    "y": 6
                },
                {
                    "x": "2002",
                    "y": 3
                },
                {
                    "x": "2003",
                    "y": 8
                },
                {
                    "x": "2004",
                    "y": 6
                }
            ]
        },
        {
            "id": "Serie 8",
            "data": [
                {
                    "x": "2000",
                    "y": 5
                },
                {
                    "x": "2001",
                    "y": 11
                },
                {
                    "x": "2002",
                    "y": 7
                },
                {
                    "x": "2003",
                    "y": 2
                },
                {
                    "x": "2004",
                    "y": 1
                }
            ]
        },
        {
            "id": "Serie 9",
            "data": [
                {
                    "x": "2000",
                    "y": 4
                },
                {
                    "x": "2001",
                    "y": 5
                },
                {
                    "x": "2002",
                    "y": 4
                },
                {
                    "x": "2003",
                    "y": 6
                },
                {
                    "x": "2004",
                    "y": 11
                }
            ]
        },
        {
            "id": "Serie 10",
            "data": [
                {
                    "x": "2000",
                    "y": 2
                },
                {
                    "x": "2001",
                    "y": 9
                },
                {
                    "x": "2002",
                    "y": 12
                },
                {
                    "x": "2003",
                    "y": 10
                },
                {
                    "x": "2004",
                    "y": 7
                }
            ]
        },
        {
            "id": "Serie 11",
            "data": [
                {
                    "x": "2000",
                    "y": 12
                },
                {
                    "x": "2001",
                    "y": 8
                },
                {
                    "x": "2002",
                    "y": 5
                },
                {
                    "x": "2003",
                    "y": 4
                },
                {
                    "x": "2004",
                    "y": 8
                }
            ]
        },
        {
            "id": "Serie 12",
            "data": [
                {
                    "x": "2000",
                    "y": 7
                },
                {
                    "x": "2001",
                    "y": 4
                },
                {
                    "x": "2002",
                    "y": 11
                },
                {
                    "x": "2003",
                    "y": 1
                },
                {
                    "x": "2004",
                    "y": 4
                }
            ]
        }
    ]

    return <Card className='w-full '>
        <CardHeader>
            <CardTitle>This Week</CardTitle>
            <CardDescription>This are the result of this week</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 h-[300px]">
            <MyResponsiveBump data={data} />
        </CardContent>
    </Card>

}