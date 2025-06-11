
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, CheckCircle, Users, ArrowRight } from 'lucide-react';

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
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4AB957]/10 to-[#58585A]/10" />
        <div className="relative container mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#4AB957] to-[#58585A] bg-clip-text text-transparent">
                CIS Web Compliance
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Professional compliance checking tool for CIS benchmarks. 
              Ensure your systems meet industry security standards with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/benchmarks">
                <Button 
                  size="lg" 
                  className="bg-[#4AB957] hover:bg-[#4AB957]/90 text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  View Benchmarks
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/compliance">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[#58585A] text-[#58585A] hover:bg-[#58585A] hover:text-white px-10 py-6 text-lg font-semibold"
                >
                  Compliance Check
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About CIS Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
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
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#4AB957] hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4AB957]/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#4AB957]" />
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
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform simplifies the CIS compliance process, making it easy to assess,
              monitor, and report on your security posture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4AB957] to-[#58585A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
