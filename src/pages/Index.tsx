
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, CheckCircle, Users, Mail, Globe, ArrowRight } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'CIS Benchmarks',
      description: 'Industry-standard security configuration benchmarks for all major operating systems and applications.'
    },
    {
      icon: CheckCircle,
      title: 'Automated Compliance',
      description: 'Streamlined compliance checking with detailed reports and actionable recommendations.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team to maintain security posture across your infrastructure.'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Select Your System',
      description: 'Choose the operating system or application you want to audit from our comprehensive benchmark library.'
    },
    {
      step: '02',
      title: 'Run Compliance Check',
      description: 'Execute automated security configuration checks against CIS benchmark standards.'
    },
    {
      step: '03',
      title: 'Review & Report',
      description: 'Analyze results and generate detailed compliance reports for stakeholders.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="relative container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-gradient leading-tight">
              CIS Web Compliance
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Professional compliance checking tool for CIS benchmarks. 
              Ensure your systems meet industry security standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/benchmarks">
                <Button size="lg" className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-8 py-6 text-lg">
                  View Benchmarks
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/compliance">
                <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-6 text-lg">
                  Compliance Check
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About CIS Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                What is CIS?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Center for Internet Security (CIS) is a nonprofit organization that harnesses 
                  the power of a global IT community to safeguard private and public organizations 
                  against cyber threats.
                </p>
                <p>
                  CIS Benchmarks are globally recognized as a best practice for securing IT systems 
                  and data. These consensus-based configuration guidelines are developed by security 
                  experts and IT professionals from around the world.
                </p>
                <p>
                  With over 100 CIS Benchmarks covering more than 25 vendor product families, 
                  organizations can be confident they are implementing proven security practices.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in glass-effect" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform simplifies the CIS compliance process, making it easy to assess,
              monitor, and report on your security posture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((item, index) => (
              <div key={index} className="flex flex-col items-start animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-3xl font-bold text-brand-secondary mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About SmartEdge Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              About SmartEdge
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              SmartEdge is a leading provider of innovative technology solutions for businesses.
              We specialize in security compliance, infrastructure management, and digital transformation.
              Our mission is to help organizations stay secure and compliant in today's complex technology landscape.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-center space-y-3">
                <Globe className="w-10 h-10 text-brand-secondary" />
                <h3 className="text-xl font-semibold">Visit Our Website</h3>
                <Link 
                  to="https://smartedge.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-secondary hover:underline inline-flex items-center"
                >
                  SmartEdge.in
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Mail className="w-10 h-10 text-brand-secondary" />
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <Link 
                  to="mailto:contact@smartedge.in"
                  className="text-brand-secondary hover:underline inline-flex items-center"
                >
                  contact@smartedge.in
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-brand-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have questions about our CIS compliance solutions or need help getting started? 
              Our team is here to help you implement the right security measures.
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              className="bg-brand-secondary hover:bg-brand-secondary-light text-white"
              size="lg"
              asChild
            >
              <Link to="mailto:contact@smartedge.in">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SmartEdge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
