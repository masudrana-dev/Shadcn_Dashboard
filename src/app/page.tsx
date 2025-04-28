import Calendar from "@/components/Card/Calender";
import { DataTableDemo } from "@/components/Card/DataTable";
import Genaral from "@/components/Card/Genaral";
import Line from "@/components/Card/Line";
import { Chart } from "@/components/Card/Piechart";
import { TableDemo } from "@/components/Card/Table";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table } from "@/components/ui/table";


export default function Home() {
  return (
    <div className=" grid gap-[32px]">
      <div className="grid lg:grid-cols-2 gap-[32px]">
        <Genaral />
        <div className="space-y-[32px]">
          <Calendar />
          <Calendar />
        </div>

      </div>
      <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px] overflow-hidden ">
        <Line />

        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Table</CardTitle>
            <CardDescription className="mb-0">These are the numbers of this year.</CardDescription>
          </CardHeader>
          <div className="p-[20px] pt-0">
            <TableDemo />
          </div>
        </Card>

        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>These are the users of this year.</CardDescription>
          </CardHeader>
          <div className="p-[20px] pt-0">
            <DataTableDemo />
          </div>
        </Card>
      </div>
    </div>

  );
}
