
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ExternalLink, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-accent"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="hidden lg:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#4AB957] to-[#58585A] bg-clip-text text-transparent">
              CIS Web Compliance
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://smartedge.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
          >
            <span>SmartEdge.in</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          
          {user ? (
            <div className="flex items-center space-x-2">
              <Link to="/profile">
                <Button variant="outline" size="sm">
                  {user.name}
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
