
import React, { useState } from 'react';
import { Search, Download, FileText, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';

const ViewBenchmarks: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const benchmarks = [
    {
      id: 1,
      name: 'CIS Ubuntu Linux 20.04 LTS',
      version: 'v2.0.1',
      releaseDate: '2023-12-15',
      category: 'Operating System',
      description: 'Security configuration benchmark for Ubuntu Linux 20.04 LTS systems'
    },
    {
      id: 2,
      name: 'CIS Microsoft Windows 11',
      version: 'v1.0.0',
      releaseDate: '2023-11-20',
      category: 'Operating System',
      description: 'Security configuration benchmark for Microsoft Windows 11 systems'
    },
    {
      id: 3,
      name: 'CIS Apache HTTP Server 2.4',
      version: 'v2.1.0',
      releaseDate: '2023-10-30',
      category: 'Web Server',
      description: 'Security configuration benchmark for Apache HTTP Server 2.4'
    },
    {
      id: 4,
      name: 'CIS MySQL Community Server 8.0',
      version: 'v1.0.0',
      releaseDate: '2023-09-15',
      category: 'Database',
      description: 'Security configuration benchmark for MySQL Community Server 8.0'
    }
  ];

  const filteredBenchmarks = benchmarks.filter(benchmark =>
    benchmark.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    benchmark.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold">
          CIS Benchmarks
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Access the latest CIS security configuration benchmarks for various operating systems and applications.
          Download comprehensive guidelines to secure your infrastructure.
        </p>
      </div>

      {/* Search */}
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search benchmarks by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* About CIS Benchmarks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-6 h-6 text-[#4AB957]" />
            <span>About CIS Benchmarks</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            CIS Benchmarks are globally recognized as a best practice for securing IT systems and data. 
            These consensus-based configuration guidelines are developed by security experts and IT professionals from around the world.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-[#4AB957]" />
              <span className="text-sm">Community-driven</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-[#4AB957]" />
              <span className="text-sm">Regularly updated</span>
            </div>
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-[#4AB957]" />
              <span className="text-sm">Comprehensive guidelines</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benchmarks Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredBenchmarks.map((benchmark) => (
          <Card key={benchmark.id} className="hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{benchmark.name}</CardTitle>
                  <CardDescription className="mt-2">{benchmark.description}</CardDescription>
                </div>
                <span className="bg-[#4AB957]/10 text-[#4AB957] px-2 py-1 rounded text-sm font-medium">
                  {benchmark.version}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Category:</span>
                  <span>{benchmark.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Release Date:</span>
                  <span>{benchmark.releaseDate}</span>
                </div>
                
                <div className="flex space-x-2 pt-4">
                  <Button size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                  
                  {user && (
                    <>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        CSV
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        JSON
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBenchmarks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No benchmarks found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ViewBenchmarks;
