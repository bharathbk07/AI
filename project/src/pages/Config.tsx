import React, { useState } from 'react';
import { Save, Calendar, Clock, Mail, Settings, Database, Code } from 'lucide-react';

const Config: React.FC = () => {
  const [config, setConfig] = useState({
    testName: 'Peak Load Test - E-commerce Checkout',
    description: '',
    template: '',
    githubRepo: '',
    githubBranch: '',
    environment: '',
    projectName: '',
    applicationName: '',
    version: '',
    emailId: '',
    emailSubject: '',
    attachments: '',
    loadGeneratorConfig: '',
    numberOfUsers: '',
    startDate: '',
    startTime: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  const generateYAML = () => {
    return `email_id: "${config.emailId}"
email_subject: "${config.emailSubject}"

attachments: ${config.attachments ? `["${config.attachments}"]` : '[]'}

project_name: "${config.projectName}"
application_name: "${config.applicationName}"
version: "${config.version}"

github_repo_name: "${config.githubRepo}"
github_branch_name: "${config.githubBranch}"

load_generator_configuration: "${config.loadGeneratorConfig}"
number_of_users: ${config.numberOfUsers || 0}`;
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-[#60758a]">Dashboard</span>
        <span className="text-[#60758a]">/</span>
        <span className="text-[#111418] font-medium">Test Configuration</span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-[#111418] text-[32px] font-bold leading-tight">
          Test Configuration: E-commerce Checkout Performance
        </h1>
      </div>

      {/* Basic Configuration */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#111418] text-base font-medium mb-2">Test Name</label>
            <input
              type="text"
              value={config.testName}
              onChange={(e) => handleInputChange('testName', e.target.value)}
              className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-[#111418] text-base font-medium mb-2">Test Description</label>
            <input
              type="text"
              value={config.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter test description"
              className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#111418] text-base font-medium mb-2">Test Template</label>
          <select
            value={config.template}
            onChange={(e) => handleInputChange('template', e.target.value)}
            className="w-full max-w-md px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
          >
            <option value="">Select a Template</option>
            <option value="load-test">Load Test</option>
            <option value="stress-test">Stress Test</option>
            <option value="spike-test">Spike Test</option>
          </select>
        </div>

        {/* Mode Toggle */}
        <div className="flex bg-[#f0f2f5] rounded-lg p-1 max-w-sm">
          <button className="flex-1 py-2 px-4 rounded-md text-sm font-medium text-[#60758a] hover:bg-white hover:shadow-sm transition-all">
            Simple Mode
          </button>
          <button className="flex-1 py-2 px-4 rounded-md text-sm font-medium bg-white shadow-sm text-[#111418]">
            Advanced Mode
          </button>
        </div>
      </div>

      {/* Advanced Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <h2 className="text-[#111418] text-xl font-bold text-center">Advanced Configuration</h2>

          {/* Source Management */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <Code className="w-5 h-5 text-[#60758a]" />
              <h3 className="text-[#111418] text-lg font-medium">Source Management</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[#111418] text-base font-medium mb-2">GitHub Repo Name</label>
                <input
                  type="text"
                  value={config.githubRepo}
                  onChange={(e) => handleInputChange('githubRepo', e.target.value)}
                  placeholder="Enter GitHub repo name"
                  className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-[#111418] text-base font-medium mb-2">GitHub Branch Name</label>
                <input
                  type="text"
                  value={config.githubBranch}
                  onChange={(e) => handleInputChange('githubBranch', e.target.value)}
                  placeholder="Enter GitHub branch name"
                  className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Environment Configuration */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <Settings className="w-5 h-5 text-[#60758a]" />
              <h3 className="text-[#111418] text-lg font-medium">Environment Configuration</h3>
            </div>
            <div>
              <label className="block text-[#111418] text-base font-medium mb-2">Environment</label>
              <select
                value={config.environment}
                onChange={(e) => handleInputChange('environment', e.target.value)}
                className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
              >
                <option value="">Select Environment</option>
                <option value="dev">Development</option>
                <option value="qa">QA</option>
                <option value="staging">Staging</option>
                <option value="prod">Production</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <Database className="w-5 h-5 text-[#60758a]" />
              <h3 className="text-[#111418] text-lg font-medium">Project Details</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[#111418] text-base font-medium mb-2">Project Name</label>
                <input
                  type="text"
                  value={config.projectName}
                  onChange={(e) => handleInputChange('projectName', e.target.value)}
                  placeholder="Enter project name"
                  className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-[#111418] text-base font-medium mb-2">Application Name</label>
                <input
                  type="text"
                  value={config.applicationName}
                  onChange={(e) => handleInputChange('applicationName', e.target.value)}
                  placeholder="Enter application name"
                  className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-[#111418] text-base font-medium mb-2">Version</label>
                <input
                  type="text"
                  value={config.version}
                  onChange={(e) => handleInputChange('version', e.target.value)}
                  placeholder="Enter version"
                  className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Report Publishing */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <Mail className="w-5 h-5 text-[#60758a]" />
              <h3 className="text-[#111418] text-lg font-medium">Report Publishing</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[#111418] text-base font-medium mb-2">Email ID</label>
                <input
                  type="email"
                  value={config.emailId}
                  onChange={(e) => handleInputChange('emailId', e.target.value)}
                  placeholder="Enter email ID"
                  className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-[#111418] text-base font-medium mb-2">Email Subject</label>
                <input
                  type="text"
                  value={config.emailSubject}
                  onChange={(e) => handleInputChange('emailSubject', e.target.value)}
                  placeholder="Enter email subject"
                  className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Test Scheduling */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <Calendar className="w-5 h-5 text-[#60758a]" />
              <h3 className="text-[#111418] text-lg font-medium">Test Schedule</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#111418] text-base font-medium mb-2">Start Date</label>
                <input
                  type="date"
                  value={config.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-[#111418] text-base font-medium mb-2">Start Time</label>
                <input
                  type="time"
                  value={config.startTime}
                  onChange={(e) => handleInputChange('startTime', e.target.value)}
                  className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* YAML Preview */}
        <div className="bg-[#f8fafc] rounded-lg p-6">
          <h2 className="text-[#111418] text-xl font-bold mb-2">YAML Configuration</h2>
          <p className="text-[#60758a] text-base mb-4">Preview of your configuration in YAML format</p>
          <pre className="bg-[#f0f2f5] rounded-lg p-4 text-sm text-[#111418] overflow-x-auto whitespace-pre font-mono">
            {generateYAML()}
          </pre>
        </div>
      </div>

      {/* Success Message */}
      <div className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="text-green-800 font-medium">Test configuration saved successfully</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-end pt-6 border-t border-gray-100">
        <button className="flex items-center gap-2 bg-[#2078f3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d6fd3] transition-colors">
          <Calendar size={16} />
          Schedule Test
        </button>
        <button className="flex items-center gap-2 bg-[#2078f3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d6fd3] transition-colors">
          <Save size={16} />
          Save Configuration
        </button>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          <Settings size={16} />
          Update
        </button>
      </div>
    </div>
  );
};

export default Config;