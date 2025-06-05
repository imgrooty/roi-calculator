'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface ROIChartProps {
  revenue: number;
  cost: number;
}

export function ROIChart({ revenue, cost }: ROIChartProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const roi = revenue - cost;
  
  const data = [
    {
      name: 'Revenue',
      value: revenue,
      color: 'hsl(var(--chart-1))',
    },
    {
      name: 'Cost',
      value: cost,
      color: 'hsl(var(--chart-2))',
    },
    {
      name: 'ROI',
      value: roi,
      color: roi >= 0 ? 'hsl(var(--chart-4))' : 'hsl(var(--chart-5))',
    },
  ];

  // Format the tooltip values
  const formatTooltipValue = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium">{`${label}`}</p>
          <p className="text-sm">{`${formatTooltipValue(payload[0].value)}`}</p>
        </div>
      );
    }
    return null;
  };

  if (!mounted) return null;

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis 
            tickFormatter={(value) => `$${value >= 1000 ? `${value / 1000}k` : value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="value" name="Amount">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}