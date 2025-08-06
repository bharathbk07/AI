import React from 'react';
import { Play, TrendingUp, AlertCircle, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      label: 'Average Response Time',
      value: '250 ms',
      icon: <TrendingUp className="w-5 h-5" />,
      trend: '+5%'
    },
    {
      label: 'Throughput',
      value: '1500 req/s',
      icon: <Users className="w-5 h-5" />,
      trend: '+12%'
    },
    {
      label: 'Error Rate',
      value: '0.5%',
      icon: <AlertCircle className="w-5 h-5" />,
      trend: '-0.2%'
    }
  ];

  const recentTests = [
    {
      name: 'Load Test - E-commerce Checkout',
      status: 'Completed',
      time: '20 min',
      summary: 'Avg. response time: 280ms, Throughput: 1400 req/s'
    },
    {
      name: 'Stress Test - API Gateway',
      status: 'Running',
      time: '15 min',
      summary: 'Monitoring...'
    },
    {
      name: 'Soak Test - User Authentication',
      status: 'Completed',
      time: '24 hours',
      summary: 'No errors detected'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-[#131118] tracking-light text-[28px] font-bold leading-tight">Performance Overview</h1>
        <button className="flex items-center gap-2 bg-[#541bf3] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#4c18db] transition-colors">
          <Play size={16} />
          Run Test
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-[#f1f0f5] rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[#131118] text-base font-medium">{metric.label}</p>
              <div className="text-[#6b608a]">{metric.icon}</div>
            </div>
            <p className="text-[#131118] text-2xl font-bold mb-1">{metric.value}</p>
            <p className="text-[#078843] text-sm font-medium">{metric.trend}</p>
          </div>
        ))}
      </div>

      {/* Performance Trends Chart */}
      <div className="bg-white rounded-lg border border-[#dedbe6] p-6">
        <h2 className="text-[#131118] text-xl font-bold mb-4">Performance Trends</h2>
        <div className="h-48 flex items-center justify-center bg-[#f8f9fa] rounded-lg">
          <svg width="100%" height="100%" viewBox="0 0 400 150" className="max-w-full">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#541bf3" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#541bf3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 120 Q50 80 100 90 T200 60 T300 70 T400 50"
              fill="none"
              stroke="#541bf3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M0 120 Q50 80 100 90 T200 60 T300 70 T400 50 L400 150 L0 150 Z"
              fill="url(#gradient)"
            />
          </svg>
        </div>
        <div className="flex justify-between mt-4 text-sm text-[#6b608a]">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-[#131118] text-xl font-bold">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-[#541bf3] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#4c18db] transition-colors">
            Run Last Test Again
          </button>
          <button className="bg-[#541bf3] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#4c18db] transition-colors">
            Create Test from Template
          </button>
        </div>
      </div>

      {/* Recent Tests */}
      <div className="space-y-4">
        <h2 className="text-[#131118] text-xl font-bold">Recent Tests</h2>
        <div className="bg-white rounded-lg border border-[#dedbe6] overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-[#131118] text-sm font-medium">Test Name</th>
                <th className="px-4 py-3 text-left text-[#131118] text-sm font-medium">Status</th>
                <th className="px-4 py-3 text-left text-[#131118] text-sm font-medium">Duration</th>
                <th className="px-4 py-3 text-left text-[#131118] text-sm font-medium">Summary</th>
              </tr>
            </thead>
            <tbody>
              {recentTests.map((test, index) => (
                <tr key={index} className="border-t border-[#dedbe6] hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-[#131118] font-medium">{test.name}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      test.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      test.status === 'Running' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {test.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#6b608a]">{test.time}</td>
                  <td className="px-4 py-3 text-[#6b608a]">{test.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;