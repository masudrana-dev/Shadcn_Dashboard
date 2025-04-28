'use client'

import { ResponsiveCalendar } from '@nivo/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const MyResponsiveCalendar = ({ data }: { data: any }) => {
    return (
        <ResponsiveCalendar
            data={data}
            from="2023-01-01"
            to="2023-12-31"
            emptyColor="#eeeeee"
            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            yearSpacing={0}
            dayBorderWidth={1}
            dayBorderColor="#ffffff"
            monthBorderColor="#ffffff"
            monthLegendPosition="after"
            direction="horizontal"
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left'
                }
            ]}
        />
    )
}

export default function Calendar() {
    function generateDataForYear2023() {
        const data = []
        const startDate = new Date('2023-01-01')
        const endDate = new Date('2023-12-31')
        while (startDate <= endDate) {
            const value = Math.floor(Math.random() * 301)
            const formattedDate = startDate.toISOString().split('T')[0]
            data.push({
                value: value,
                day: formattedDate
            })
            startDate.setDate(startDate.getDate() + 1)
        }
        return data
    }

    const dataArray = generateDataForYear2023()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>These are the numbers of this year.</CardDescription>
            </CardHeader>
            <CardContent className="w-full overflow-x-auto">
                <div style={{ height: 110, minWidth: 700 }}>
                    <MyResponsiveCalendar data={dataArray} />
                </div>
            </CardContent>
        </Card>
    )
}
