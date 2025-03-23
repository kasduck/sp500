import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Area, AreaChart, PieChart, Pie, Cell } from 'recharts';

interface VisualizationProps {
  type: 'sp500-returns' | 'comparison' | 'scenario-analysis' | 'probability' | 'recovery-range' | 'technical-trends';
  height?: number;
  data?: any; // You can refine this type later based on technicalTrendData
}

const Visualizations: React.FC<VisualizationProps> = ({ type, height = 400, data }) => {
  // S&P 500 Returns data
  const spReturnsData = [
    {
      name: '3 Months',
      return: 3,
      color: '#6eb9e5'
    },
    {
      name: '6 Months',
      return: 10,
      color: '#4287c8'
    },
    {
      name: '12 Months',
      return: 16,
      color: '#1d5698'
    }
  ];
  
  // NIFTY 50 comparison data
  const comparisonData = [
    {
      name: '3 Months',
      'S&P 500': 3,
      'NIFTY 50': 2.5,
    },
    {
      name: '6 Months',
      'S&P 500': 10,
      'NIFTY 50': 8,
    },
    {
      name: '12 Months',
      'S&P 500': 16,
      'NIFTY 50': 14,
    }
  ];
  
  // Scenario Analysis Data
  const scenarioData = [
    {
      name: '3 Months',
      'Base Case': 3,
      'Bull Case': 5,
      'Bear Case': -2,
    },
    {
      name: '6 Months',
      'Base Case': 10,
      'Bull Case': 17.5,
      'Bear Case': -2.5,
    },
    {
      name: '12 Months',
      'Base Case': 16,
      'Bull Case': 25,
      'Bear Case': 5,
    }
  ];
  
  // Probability Data
  const probabilityData = [
    { name: 'Base Case', value: 50, color: '#4287c8' },
    { name: 'Bull Case', value: 25, color: '#3fad46' },
    { name: 'Bear Case', value: 25, color: '#c84242' }
  ];

  // Recovery Range Data
  const recoveryRangeData = [
    { name: '3 Months', min: -5, max: 8, avg: 2.5 },
    { name: '6 Months', min: 0, max: 15, avg: 8 },
    { name: '12 Months', min: 5, max: 25, avg: 14 }
  ];
  
  const COLORS = ['#4287c8', '#3fad46', '#c84242'];
  
  const renderChartByType = () => {
    switch(type) {
      case 'sp500-returns':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={spReturnsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Return']} />
              <Bar dataKey="return" fill="#4287c8">
                {
                  spReturnsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'comparison':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={comparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Return']} />
              <Legend />
              <Bar dataKey="S&P 500" fill="#4287c8" />
              <Bar dataKey="NIFTY 50" fill="#3fad46" />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'scenario-analysis':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={scenarioData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Return']} />
              <Legend />
              <Line type="monotone" dataKey="Base Case" stroke="#4287c8" strokeWidth={3} dot={{ r: 6 }} />
              <Line type="monotone" dataKey="Bull Case" stroke="#3fad46" strokeWidth={3} dot={{ r: 6 }} />
              <Line type="monotone" dataKey="Bear Case" stroke="#c84242" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      
        case 'probability':
          return (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={probabilityData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={height > 300 ? 120 : 80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {probabilityData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Probability']} />
              </PieChart>
            </ResponsiveContainer>
          );
      
      case 'recovery-range':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={recoveryRangeData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, 'Return']} />
              <Area type="monotone" dataKey="max" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
              <Area type="monotone" dataKey="min" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              <Line type="monotone" dataKey="avg" stroke="#ff7300" strokeWidth={3} dot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        );

        case 'technical-trends':
  if (!data) return <div>No data provided for technical trends</div>;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`${value}`, 'Value']} />
        <Legend />
        <Line type="monotone" dataKey="rsi" stroke="#8884d8" name="RSI" strokeWidth={2} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="vix" stroke="#82ca9d" name="VIX" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
      
      default:
        return <div>Chart type not specified</div>;
    }
  };

  return (
    <div style={{ width: '100%', height: height }} className="chart-container">
      {renderChartByType()}
    </div>
  );
};

export default Visualizations;