
import React from 'react';
import { User, Monitor, FileText, Calendar, Download, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const userDevices = [
    {
      id: '1',
      name: 'Production Server 01',
      os: 'Ubuntu 20.04',
      status: 'Online',
      lastCheck: '2024-01-15',
      complianceScore: 95
    },
    {
      id: '2',
      name: 'Web Server 02',
      os: 'CentOS 8',
      status: 'Online',
      lastCheck: '2024-01-14',
      complianceScore: 88
    },
    {
      id: '3',
      name: 'Database Server',
      os: 'Windows Server 2019',
      status: 'Offline',
      lastCheck: '2024-01-10',
      complianceScore: 92
    }
  ];

  const userReports = [
    {
      id: '1',
      name: 'Production Server 01 - CIS Ubuntu 20.04',
      date: '2024-01-15',
      status: 'Completed',
      score: '95%',
      type: 'Full Compliance Check'
    },
    {
      id: '2',
      name: 'Web Server 02 - CIS CentOS 8',
      date: '2024-01-14',
      status: 'Completed',
      score: '88%',
      type: 'Full Compliance Check'
    },
    {
      id: '3',
      name: 'Database Server - CIS Windows Server 2019',
      date: '2024-01-10',
      status: 'Pending Review',
      score: '92%',
      type: 'Partial Check'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': return 'bg-green-100 text-green-800';
      case 'Offline': return 'bg-red-100 text-red-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Pending Review': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">User Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your devices, view compliance reports, and monitor your security posture
        </p>
      </div>

      {/* User Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5 text-[#4AB957]" />
            <span>User Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Full Name
              </label>
              <p className="font-medium">{user.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Email Address
              </label>
              <p className="font-medium">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                User ID
              </label>
              <p className="font-medium font-mono">{user.id}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Account Status
              </label>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="outline">Edit Profile</Button>
          </div>
        </CardContent>
      </Card>

      {/* User Devices Dashboard */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Monitor className="w-5 h-5 text-[#4AB957]" />
              <span>User Devices</span>
            </CardTitle>
            <CardDescription>
              Manage and monitor your registered devices
            </CardDescription>
          </div>
          <Button>Add New Device</Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {userDevices.map((device) => (
              <div key={device.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-medium">{device.name}</h3>
                      <Badge className={getStatusColor(device.status)}>
                        {device.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">OS:</span>
                        <span className="ml-2 font-medium">{device.os}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Last Check:</span>
                        <span className="ml-2 font-medium">{device.lastCheck}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Compliance:</span>
                        <span className={`ml-2 font-medium ${getScoreColor(device.complianceScore)}`}>
                          {device.complianceScore}%
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Activity className="w-4 h-4 mr-1" />
                          Check
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Reports Dashboard */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-[#4AB957]" />
              <span>User Reports</span>
            </CardTitle>
            <CardDescription>
              View and download your compliance reports
            </CardDescription>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userReports.map((report) => (
              <div key={report.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-medium">{report.name}</h3>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Date:</span>
                        <span className="ml-2 font-medium">{report.date}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Score:</span>
                        <span className="ml-2 font-medium text-[#4AB957]">{report.score}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Type:</span>
                        <span className="ml-2 font-medium">{report.type}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <FileText className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Monitor className="w-8 h-8 text-[#4AB957]" />
              <div>
                <p className="text-sm text-muted-foreground">Total Devices</p>
                <p className="text-2xl font-bold">{userDevices.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-[#4AB957]" />
              <div>
                <p className="text-sm text-muted-foreground">Total Reports</p>
                <p className="text-2xl font-bold">{userReports.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Activity className="w-8 h-8 text-[#4AB957]" />
              <div>
                <p className="text-sm text-muted-foreground">Avg. Compliance</p>
                <p className="text-2xl font-bold">92%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-[#4AB957]" />
              <div>
                <p className="text-sm text-muted-foreground">Last Check</p>
                <p className="text-2xl font-bold">Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
