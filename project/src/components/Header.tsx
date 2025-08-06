import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/tests', label: 'Tests' },
    { path: '/reports', label: 'Reports' },
    { path: '/config', label: 'Config' },
    { path: '/settings', label: 'Settings' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f0f5] px-6 lg:px-10 py-3">
      <div className="flex items-center gap-4 text-[#131118]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em]">Performance Portal</h2>
      </div>

      <div className="flex flex-1 justify-center">
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium leading-normal transition-colors hover:text-[#541bf3] ${
                isActive(item.path)
                  ? 'text-[#541bf3] border-b-2 border-[#541bf3] pb-1'
                  : 'text-[#131118]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#f1f0f5] text-[#131118] hover:bg-[#e8e7ec] transition-colors"
          title="Notifications"
        >
          <Bell size={20} />
        </button>

        <div className="relative group">
          <button className="flex items-center gap-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: `url("${user?.avatar}")` }}
            />
          </button>
          
          <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="p-3 border-b border-gray-100">
              <p className="font-medium text-[#131118]">{user?.name}</p>
              <p className="text-sm text-[#6b608a]">{user?.role}</p>
            </div>
            <div className="py-2">
              <Link
                to="/settings"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#131118] hover:bg-gray-50 transition-colors"
              >
                <User size={16} />
                Profile Settings
              </Link>
              <button
                onClick={logout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;