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
      color: '#00ffff',
    },
    {
      name: 'Cost',
      value: cost,
      color: '#ff8000',
    },
    {
      name: 'ROI',
      value: roi,
      color: roi >= 0 ? '#00ff00' : '#ff0040',
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
        <div className="cyber-card p-4 border border-neon-cyan/50 shadow-neon">
          <p className="font-mono font-bold text-neon-cyan text-sm">[{label.toUpperCase()}]</p>
          <p className="font-mono text-white text-lg">{formatTooltipValue(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  if (!mounted) return null;

  return (
    <div className="h-80 w-full relative">
      <div className="absolute top-2 left-2 z-10">
        <div className="flex items-center gap-2 text-neon-green font-mono text-xs">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
          CHART_ACTIVE
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="rgba(0, 255, 255, 0.2)"
          />
          <XAxis
            dataKey="name"
            tick={{ fill: '#00ffff', fontSize: 12, fontFamily: 'monospace' }}
            axisLine={{ stroke: '#00ffff' }}
          />
          <YAxis
            tickFormatter={(value) => `$${value >= 1000 ? `${value / 1000}k` : value}`}
            tick={{ fill: '#00ffff', fontSize: 12, fontFamily: 'monospace' }}
            axisLine={{ stroke: '#00ffff' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              color: '#00ffff',
              fontFamily: 'monospace',
              fontSize: '12px'
            }}
          />
          <Bar dataKey="value" name="Amount" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                style={{
                  filter: 'drop-shadow(0 0 8px currentColor)',
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}