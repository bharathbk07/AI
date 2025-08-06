import React, { useState } from 'react';
import { User, Mail, Lock, Palette, Bell, Save } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Settings: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    email: user?.email || '',
    password: '',
    theme: 'light',
    testParameters: 'default',
    emailNotifications: true,
    warningNotifications: true,
    errorNotifications: true
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear errors when user starts typing
    if (field === 'email' || field === 'password') {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    
    if (formData.email && !formData.email.includes('@')) {
      newErrors.email = 'Invalid email format';
    }
    
    if (formData.password && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSave = () => {
    if (validateForm()) {
      if (user) {
        updateUser({ email: formData.email });
      }
      alert('Settings saved successfully!');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-[#111418] text-[32px] font-bold leading-tight">Settings</h1>
      </div>

      {/* User Profile */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <User className="w-6 h-6 text-[#60758a]" />
          <h2 className="text-[#111418] text-xl font-bold">User Profile</h2>
        </div>
        
        <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg border border-[#dbe0e6]">
          <div
            className="w-20 h-20 bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url("${user?.avatar}")` }}
          />
          <div className="text-center">
            <p className="text-[#111418] text-lg font-medium">{user?.name}</p>
            <p className="text-[#60728a] text-sm">{user?.role}</p>
            <p className="text-[#60728a] text-xs">Last signed in: {user?.lastSignedIn}</p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Mail className="w-6 h-6 text-[#60758a]" />
          <h2 className="text-[#111418] text-xl font-bold">Account Settings</h2>
        </div>

        <div className="space-y-4">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-[#60758a]" />
              <label className="text-[#111418] text-base font-medium">Email</label>
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-[#60758a]" />
              <label className="text-[#111418] text-base font-medium">Password</label>
            </div>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
              placeholder="Enter new password"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button className="bg-[#f0f2f5] text-[#111418] px-4 py-2 rounded-lg font-medium hover:bg-[#e8eaed] transition-colors">
            Change Password
          </button>
        </div>
      </div>

      {/* Portal Settings */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Palette className="w-6 h-6 text-[#60758a]" />
          <h2 className="text-[#111418] text-xl font-bold">Portal Settings</h2>
        </div>

        <div className="space-y-4 max-w-md">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Palette className="w-4 h-4 text-[#60758a]" />
              <label className="text-[#111418] text-base font-medium">Theme</label>
            </div>
            <select
              value={formData.theme}
              onChange={(e) => handleInputChange('theme', e.target.value)}
              className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-[#60758a]" />
              <label className="text-[#111418] text-base font-medium">Default Test Parameters</label>
            </div>
            <select
              value={formData.testParameters}
              onChange={(e) => handleInputChange('testParameters', e.target.value)}
              className="w-full px-4 py-3 border border-[#dbe0e6] rounded-lg focus:ring-2 focus:ring-[#541bf3] focus:border-transparent transition-all"
            >
              <option value="default">Default</option>
              <option value="conservative">Conservative</option>
              <option value="aggressive">Aggressive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Bell className="w-6 h-6 text-[#60758a]" />
          <h2 className="text-[#111418] text-xl font-bold">Notifications</h2>
        </div>

        <div className="space-y-4">
          {[
            { key: 'emailNotifications', label: 'Email Notifications for Test Completion' },
            { key: 'warningNotifications', label: 'Email Notifications for Warnings' },
            { key: 'errorNotifications', label: 'Email Notifications for Errors' }
          ].map((notification) => (
            <div key={notification.key} className="flex items-center justify-between py-3">
              <p className="text-[#111418] text-base">{notification.label}</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData[notification.key as keyof typeof formData] as boolean}
                  onChange={(e) => handleInputChange(notification.key, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2078f3]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-6 border-t border-gray-200">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-[#2078f3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d6fd3] transition-colors"
        >
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;