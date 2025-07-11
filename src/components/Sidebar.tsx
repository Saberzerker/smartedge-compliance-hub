
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Shield, 
  CheckCircle, 
  User, 
  FileText, 
  Sun, 
  Moon,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home, description: 'Dashboard overview' },
    { name: 'View Benchmarks', href: '/benchmarks', icon: FileText, description: 'CIS benchmarks' },
    { name: 'Compliance Check', href: '/compliance', icon: CheckCircle, description: 'Run compliance checks' },
    { name: 'User Profile', href: '/profile', icon: User, description: 'Your profile settings' },
    { name: 'Login', href: '/login', icon: Shield, description: 'Authentication' },
  ];

  return (
    <div 
      className={cn(
        "fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-sidebar/95 backdrop-blur-md border-r border-sidebar-border z-40 transition-all duration-300 ease-in-out group",
        isExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Sidebar content */}
      <div className="flex flex-col h-full p-3">
        
        {/* Navigation */}
        <nav className="flex-1 space-y-2 mt-4">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group/item",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-sidebar-foreground"
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <div className={cn(
                  "ml-3 transition-all duration-200",
                  isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                )}>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                </div>
                <ChevronRight className={cn(
                  "w-4 h-4 ml-auto transition-all duration-200",
                  isExpanded ? "opacity-100" : "opacity-0",
                  isActive ? "text-primary-foreground" : "text-muted-foreground"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Separator */}
        <div className="my-4 border-t border-sidebar-border" />

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className={cn(
            "flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
            "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          )}
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          <div className={cn(
            "ml-3 transition-all duration-200",
            isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          )}>
            <div className="font-medium">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</div>
            <div className="text-xs text-muted-foreground mt-0.5">Toggle theme</div>
          </div>
        </button>
      </div>

      {/* Expansion indicator */}
      <div className={cn(
        "absolute -right-3 top-8 w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center transition-all duration-200",
        isExpanded ? "rotate-180" : "rotate-0"
      )}>
        <ChevronRight className="w-3 h-3 text-muted-foreground" />
      </div>
    </div>
  );
};

export default Sidebar;
