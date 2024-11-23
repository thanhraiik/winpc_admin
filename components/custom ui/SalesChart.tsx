"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const SalesChart = ({ data }: { data: any[] }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <LineChart className="w-full h-full" data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    </ResponsiveContainer>
  )
}

export default SalesChart