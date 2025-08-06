import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, ExternalLink } from 'lucide-react';

const Reports: React.FC = () => {
  const keyMetrics = [
    {
      label: 'Throughput',
      value: '1200 req/s',
      change: '+10%',
      trend: 'up'
    },
    {
      label: 'Avg. Response Time',
      value: '150 ms',
      change: '-5%',
      trend: 'down'
    },
    {
      label: 'Error Rate',
      value: '0.5%',
      change: '-0.2%',
      trend: 'down'
    },
    {
      label: 'Concurrent Users',
      value: '500',
      change: '+20%',
      trend: 'up'
    }
  ];

  const requestDetails = [
    { request: '/api/users', method: 'GET', responseTime: '100 ms', throughput: '500 req/s', errorRate: '0.2%' },
    { request: '/api/products', method: 'GET', responseTime: '120 ms', throughput: '300 req/s', errorRate: '0.1%' },
    { request: '/api/orders', method: 'POST', responseTime: '200 ms', throughput: '200 req/s', errorRate: '1.0%' },
    { request: '/api/cart', method: 'GET', responseTime: '80 ms', throughput: '150 req/s', errorRate: '0.0%' },
    { request: '/api/checkout', method: 'POST', responseTime: '250 ms', throughput: '50 req/s', errorRate: '2.0%' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-[#131118] text-[32px] font-bold leading-tight">Test Report: Load Test - 2024-03-15</h1>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-[#dedbe6]">
        <div className="flex gap-8">
          <button className="pb-3 border-b-2 border-[#131118] text-[#131118] font-bold">Summary</button>
          <button className="pb-3 text-[#6c6189] hover:text-[#131118] transition-colors">Charts</button>
          <button className="pb-3 text-[#6c6189] hover:text-[#131118] transition-colors">Details</button>
          <button className="pb-3 text-[#6c6189] hover:text-[#131118] transition-colors">Monitoring</button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="space-y-4">
        <h2 className="text-[#131118] text-xl font-bold">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#dedbe6] p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#131118] text-base font-medium">{metric.label}</p>
                <div className="text-[#6b608a]">
                  <BarChart3 size={20} />
                </div>
              </div>
              <p className="text-[#131118] text-2xl font-bold mb-1">{metric.value}</p>
              <div className="flex items-center gap-1">
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-[#078843]" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-[#e74408]" />
                )}
                <p className={`text-base font-medium ${metric.trend === 'up' ? 'text-[#078843]' : 'text-[#e74408]'}`}>
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Trends */}
      <div className="space-y-4">
        <h2 className="text-[#131118] text-xl font-bold">Performance Trends</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-[#dedbe6] p-6">
            <div className="space-y-4">
              <div>
                <p className="text-[#131118] text-base font-medium">Throughput Over Time</p>
                <p className="text-[#131118] text-2xl font-bold">1200 req/s</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#6c6189] text-base">Last 24 Hours</p>
                  <p className="text-[#078843] text-base font-medium">+10%</p>
                </div>
              </div>
              <div className="h-40 flex items-center justify-center bg-[#f8f9fa] rounded-lg">
                <svg width="100%" height="100%" viewBox="0 0 400 120" className="max-w-full">
                  <defs>
                    <linearGradient id="throughputGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6c6189" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#6c6189" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 80 Q50 60 100 70 T200 40 T300 50 T400 30"
                    fill="none"
                    stroke="#6c6189"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 80 Q50 60 100 70 T200 40 T300 50 T400 30 L400 120 L0 120 Z"
                    fill="url(#throughputGradient)"
                  />
                </svg>
              </div>
              <div className="flex justify-between text-xs text-[#6c6189]">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span>24:00</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-[#dedbe6] p-6">
            <div className="space-y-4">
              <div>
                <p className="text-[#131118] text-base font-medium">Response Time Over Time</p>
                <p className="text-[#131118] text-2xl font-bold">150 ms</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#6c6189] text-base">Last 24 Hours</p>
                  <p className="text-[#e74408] text-base font-medium">-5%</p>
                </div>
              </div>
              <div className="h-40 flex items-center justify-center bg-[#f8f9fa] rounded-lg">
                <svg width="100%" height="100%" viewBox="0 0 400 120" className="max-w-full">
                  <defs>
                    <linearGradient id="responseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e74408" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#e74408" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 90 Q50 70 100 60 T200 80 T300 65 T400 55"
                    fill="none"
                    stroke="#e74408"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 90 Q50 70 100 60 T200 80 T300 65 T400 55 L400 120 L0 120 Z"
                    fill="url(#responseGradient)"
                  />
                </svg>
              </div>
              <div className="flex justify-between text-xs text-[#6c6189]">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span>24:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Details */}
      <div className="space-y-4">
        <h2 className="text-[#131118] text-xl font-bold">Request Details</h2>
        <div className="bg-white rounded-lg border border-[#dedbe6] overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-[#131118] text-sm font-medium">Request</th>
                <th className="px-4 py-3 text-left text-[#131118] text-sm font-medium">Method</th>
                <th className="px-4 py-3 text-left text-[#131118] text-sm font-medium">Avg. Response Time</th>
                <th className="px-4 py-3 text-left text-[#131118] text-sm font-medium">Throughput</th>
                <th className="px-4 py-3 text-left text-[#131118] text-sm font-medium">Error Rate</th>
              </tr>
            </thead>
            <tbody>
              {requestDetails.map((request, index) => (
                <tr key={index} className="border-t border-[#dedbe6] hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-[#131118] font-medium">{request.request}</td>
                  <td className="px-4 py-3 text-[#6c6189]">{request.method}</td>
                  <td className="px-4 py-3 text-[#6c6189]">{request.responseTime}</td>
                  <td className="px-4 py-3 text-[#6c6189]">{request.throughput}</td>
                  <td className="px-4 py-3 text-[#6c6189]">{request.errorRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* External Monitoring */}
      <div className="space-y-4">
        <h2 className="text-[#131118] text-xl font-bold">External Monitoring</h2>
        <p className="text-[#131118] text-base mb-4">
          View detailed system metrics in Grafana or Prometheus. Click the links below to access the dashboards.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-[#f1f0f4] text-[#131118] px-4 py-2 rounded-lg font-medium hover:bg-[#e8e7ec] transition-colors">
            <ExternalLink size={16} />
            Grafana Dashboard
          </button>
          <button className="flex items-center gap-2 bg-[#f1f0f4] text-[#131118] px-4 py-2 rounded-lg font-medium hover:bg-[#e8e7ec] transition-colors">
            <ExternalLink size={16} />
            Prometheus Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;