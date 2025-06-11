
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, HelpCircle, Download, Search, Check, X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';

const ComplianceCheck: React.FC = () => {
  const { user } = useAuth();
  const [selectedDevice, setSelectedDevice] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [checks, setChecks] = useState<Record<string, 'pass' | 'fail' | null>>({});

  const devices = [
    { id: '1', name: 'Production Server 01', os: 'Ubuntu 20.04', status: 'Online' },
    { id: '2', name: 'Web Server 02', os: 'CentOS 8', status: 'Online' },
    { id: '3', name: 'Database Server', os: 'Windows Server 2019', status: 'Offline' }
  ];

  const complianceChecks = [
    {
      id: 'CIS-1.1.1',
      title: 'Ensure mounting of cramfs filesystems is disabled',
      description: 'The cramfs filesystem type is a compressed read-only Linux filesystem embedded in small footprint systems.',
      category: 'Filesystem'
    },
    {
      id: 'CIS-1.1.2', 
      title: 'Ensure mounting of freevxfs filesystems is disabled',
      description: 'The freevxfs filesystem type is a free version of the Veritas type filesystem.',
      category: 'Filesystem'
    },
    {
      id: 'CIS-2.1.1',
      title: 'Ensure xinetd is not installed',
      description: 'The extended Internet daemon (xinetd) is an open source super daemon.',
      category: 'Services'
    },
    {
      id: 'CIS-3.1.1',
      title: 'Ensure IP forwarding is disabled',
      description: 'The net.ipv4.ip_forward flag is used to tell the system whether it can forward packets.',
      category: 'Network'
    }
  ];

  const filteredChecks = complianceChecks.filter(check =>
    check.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    check.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckChange = (checkId: string, status: 'pass' | 'fail' | null) => {
    setChecks(prev => ({ ...prev, [checkId]: status }));
  };

  const allChecksCompleted = filteredChecks.every(check => checks[check.id] !== undefined && checks[check.id] !== null);

  if (!user) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Authentication Required</CardTitle>
            <CardDescription>
              Please log in to access the compliance check functionality.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/login">
              <Button size="lg" className="bg-[#4AB957] hover:bg-[#4AB957]/90">
                Login to Continue
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold mb-2">Compliance Check</h1>
          <p className="text-muted-foreground">
            Perform comprehensive CIS benchmark compliance checks on your devices
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <HelpCircle className="w-4 h-4 mr-2" />
              How to Use
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How to Use Compliance Check</DialogTitle>
              <DialogDescription asChild>
                <div className="space-y-3">
                  <p>1. Select or add a device from your device list</p>
                  <p>2. Use the search bar to find specific compliance checks</p>
                  <p>3. Mark each check as Pass (✓), Fail (✗), or leave empty</p>
                  <p>4. Download reports in PDF, CSV, or JSON format</p>
                  <p>5. Generate a comprehensive GRC report when all checks are complete</p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {/* Device Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Select Device</span>
            <Button 
              onClick={() => setShowAddDevice(true)}
              size="sm"
              variant="outline"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Device
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedDevice} onValueChange={setSelectedDevice}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a device to audit" />
            </SelectTrigger>
            <SelectContent>
              {devices.map((device) => (
                <SelectItem key={device.id} value={device.id}>
                  <div className="flex items-center space-x-2">
                    <span>{device.name}</span>
                    <span className="text-xs text-muted-foreground">({device.os})</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      device.status === 'Online' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {device.status}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedDevice && (
        <>
          {/* Download Options */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download CSV
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download JSON
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search */}
          <Card>
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search by reference ID or title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Compliance Checks */}
          <Card>
            <CardHeader>
              <CardTitle>Compliance Checks</CardTitle>
              <CardDescription>
                Review and mark each compliance check. All checks must be completed to generate a report.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredChecks.map((check) => (
                  <div key={check.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <span className="font-mono text-sm bg-muted px-2 py-1 rounded">
                            {check.id}
                          </span>
                          <h3 className="font-medium">{check.title}</h3>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Info className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>{check.id}: {check.title}</DialogTitle>
                                <DialogDescription>
                                  <div className="space-y-2">
                                    <p><strong>Category:</strong> {check.category}</p>
                                    <p><strong>Description:</strong> {check.description}</p>
                                  </div>
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{check.description}</p>
                      </div>
                      
                      <div className="flex space-x-2 ml-4">
                        <Button
                          variant={checks[check.id] === 'pass' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleCheckChange(check.id, 'pass')}
                          className={checks[check.id] === 'pass' ? 'bg-green-600 hover:bg-green-700' : ''}
                        >
                          <Check className="w-4 h-4" />
                        </Button>
                        <Button
                          variant={checks[check.id] === 'fail' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleCheckChange(check.id, 'fail')}
                          className={checks[check.id] === 'fail' ? 'bg-red-600 hover:bg-red-700' : ''}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {allChecksCompleted && (
                <div className="mt-8 p-4 bg-[#4AB957]/10 border border-[#4AB957]/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#4AB957]">All Checks Completed!</h3>
                      <p className="text-sm text-muted-foreground">
                        You can now generate a comprehensive GRC report.
                      </p>
                    </div>
                    <Button className="bg-[#4AB957] hover:bg-[#4AB957]/90">
                      Generate GRC Report
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}

      {/* Add Device Dialog */}
      <Dialog open={showAddDevice} onOpenChange={setShowAddDevice}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Device</DialogTitle>
            <DialogDescription>
              Add a new device to your compliance monitoring list.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Device Name</label>
              <Input placeholder="Enter device name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Operating System</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select OS" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ubuntu">Ubuntu 20.04</SelectItem>
                  <SelectItem value="centos">CentOS 8</SelectItem>
                  <SelectItem value="windows">Windows Server 2019</SelectItem>
                  <SelectItem value="rhel">Red Hat Enterprise Linux 8</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">IP Address</label>
              <Input placeholder="192.168.1.100" />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowAddDevice(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowAddDevice(false)}>
                Add Device
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ComplianceCheck;
