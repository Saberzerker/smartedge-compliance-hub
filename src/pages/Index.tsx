
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, FileCheck, Target, ArrowRight, CheckCircle, Lock, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index: React.FC = () => {
  const roles = [
    {
      title: "Member",
      description: "Basic compliance marking capabilities",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: ["Mark compliance status", "Submit configurations", "View assigned devices"]
    },
    {
      title: "Validator", 
      description: "Compliance validation and report review",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      features: ["Validate configurations", "Review submissions", "Generate reports"]
    },
    {
      title: "Admin",
      description: "Team and device management, member oversight",
      icon: Lock,
      color: "from-purple-500 to-violet-500",
      features: ["Manage teams", "Oversee members", "Device administration"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent mb-6">
              Governer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Modern CIS compliance management platform for organizations. 
              Streamline your security assessments with role-based workflows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/benchmarks">
              <Button size="lg" className="group px-8 py-3 text-lg">
                View Benchmarks
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/compliance">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                <Target className="mr-2 w-5 h-5" />
                Compliance Check
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Role Overview Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Role-Based Access Control</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Governer provides different access levels tailored to your organization's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <Card key={role.title} className="group hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${role.color} rounded-xl mb-4 shadow-md`}>
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription className="text-sm">{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is CIS Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6">What is CIS?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Center for Internet Security (CIS) Controls are a prioritized set of actions that 
                  collectively form a defense-in-depth set of best practices that mitigate the most common attacks.
                </p>
                <p>
                  CIS Controls provide a clear roadmap for organizations to improve their cybersecurity posture 
                  by implementing proven security practices that address the most prevalent cyber threats.
                </p>
                <div className="flex items-center space-x-2 pt-4">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Compliance made simple and effective</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span>Key Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Standardized security framework</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Risk-based prioritization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Measurable security improvements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Industry-recognized best practices</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Governer Works</h2>
            <p className="text-muted-foreground text-lg">Simple, efficient compliance management in four steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Team Setup", description: "Organize your teams and assign roles based on responsibilities" },
              { step: "02", title: "Device Management", description: "Register and categorize your devices for compliance tracking" },
              { step: "03", title: "Compliance Marking", description: "Mark compliance status against CIS benchmarks" },
              { step: "04", title: "Validation & Reports", description: "Validate configurations and generate GRC reports" }
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About SmartEdge Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About SmartEdge</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            SmartEdge is a leading provider of cybersecurity solutions, specializing in compliance management 
            and risk assessment tools. Our mission is to make enterprise security accessible and manageable 
            for organizations of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://smartedge.in" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="px-6">
                Visit Our Website
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Button variant="ghost" className="px-6">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
