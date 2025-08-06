import React, { useState } from 'react';
import { Search, Plus, Share, Calendar, Filter } from 'lucide-react';

const Tests: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const tests = [
    {
      id: 1,
      name: 'Load Test 1',
      status: 'Running',
      lastRun: '2024-01-20 10:00 AM',
      metric: 'Average response time: 200ms',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=200'
    },
    {
      id: 2,
      name: 'Stress Test 2',
      status: 'Completed',
      lastRun: '2024-01-19 03:00 PM',
      metric: 'Peak load: 1000 users',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400&h=200'
    },
    {
      id: 3,
      name: 'Endurance Test 3',
      status: 'Failed',
      lastRun: '2024-01-18 09:00 AM',
      metric: 'Error rate: 5%',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=200'
    },
    {
      id: 4,
      name: 'Smoke Test 4',
      status: 'Completed',
      lastRun: '2024-01-17 02:00 PM',
      metric: 'All checks passed',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=200'
    }
  ];

  const filteredTests = tests.filter(test =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-[#111418] text-[32px] font-bold leading-tight">Tests</h1>
        <button className="flex items-center gap-2 bg-[#2086f3] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1d7ae4] transition-colors">
          <Plus size={16} />
          New Test
        </button>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#60758a] w-5 h-5" />
            <input
              type="text"
              placeholder="Search tests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#f0f2f5] rounded-lg border-none focus:ring-2 focus:ring-[#2086f3] transition-all"
            />
          </div>
          <button className="flex items-center gap-2 bg-[#f0f2f5] text-[#111418] px-4 py-3 rounded-lg font-medium hover:bg-[#e8eaed] transition-colors">
            <Filter size={16} />
            Filters
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="bg-[#f0f2f5] text-[#111418] px-4 py-2 rounded-lg font-medium hover:bg-[#e8eaed] transition-colors">
            Saved Filters
          </button>
          <button className="bg-[#2086f3] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1d7ae4] transition-colors">
            Save Filters
          </button>
          <button className="bg-[#2086f3] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1d7ae4] transition-colors">
            Export to CSV
          </button>
        </div>
      </div>

      {/* Calendar Widget */}
      <div className="bg-white rounded-lg border border-[#dbe0e6] p-6 max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#111418] font-bold">January 2024</h3>
          <Calendar className="w-5 h-5 text-[#60758a]" />
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
            <div key={day} className="py-2 font-bold text-[#111418]">{day}</div>
          ))}
          {Array.from({ length: 31 }, (_, i) => (
            <button
              key={i + 1}
              className={`py-2 hover:bg-[#f0f2f5] rounded ${
                i + 1 === 15 ? 'bg-[#2086f3] text-white' : 'text-[#111418]'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="bg-[#f0f2f5] text-[#111418] px-3 py-1 rounded-lg text-sm">
          Status: Running
        </span>
        <span className="bg-[#f0f2f5] text-[#111418] px-3 py-1 rounded-lg text-sm">
          Date: 2024-01-15 - 2024-01-22
        </span>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-[#dbe0e6]">
        <div className="flex gap-8">
          <button className="pb-3 border-b-2 border-[#111418] text-[#111418] font-bold">All</button>
          <button className="pb-3 text-[#60758a] hover:text-[#111418] transition-colors">Running</button>
          <button className="pb-3 text-[#60758a] hover:text-[#111418] transition-colors">Completed</button>
        </div>
      </div>

      {/* Test Cards */}
      <div className="space-y-6">
        {filteredTests.map((test) => (
          <div key={test.id} className="bg-white rounded-lg border border-[#dbe0e6] p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-[#111418] text-lg font-bold">{test.name}</h3>
                  <p className="text-[#60758a] text-sm">
                    Status: <span className={`font-medium ${
                      test.status === 'Completed' ? 'text-green-600' :
                      test.status === 'Running' ? 'text-blue-600' :
                      'text-red-600'
                    }`}>{test.status}</span> · Last Run: {test.lastRun} · {test.metric}
                  </p>
                </div>
                <button className="flex items-center gap-2 bg-[#f0f2f5] text-[#111418] px-4 py-2 rounded-lg font-medium hover:bg-[#e8eaed] transition-colors w-fit">
                  <Share size={16} />
                  Share
                </button>
              </div>
              <div
                className="w-full lg:w-64 h-32 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url("${test.image}")` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center text-[#111418] hover:bg-[#f0f2f5] rounded-full transition-colors">
          ‹
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-[#f0f2f5] text-[#111418] rounded-full font-bold">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-[#111418] hover:bg-[#f0f2f5] rounded-full transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-[#111418] hover:bg-[#f0f2f5] rounded-full transition-colors">
          3
        </button>
        <span className="px-2">...</span>
        <button className="w-10 h-10 flex items-center justify-center text-[#111418] hover:bg-[#f0f2f5] rounded-full transition-colors">
          10
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-[#111418] hover:bg-[#f0f2f5] rounded-full transition-colors">
          ›
        </button>
      </div>
    </div>
  );
};

export default Tests;