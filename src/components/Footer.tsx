
import React from 'react';
import { Mail, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      {/* About SmartEdge Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              About SmartEdge
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              SmartEdge is a leading provider of innovative technology solutions for businesses.
              We specialize in security compliance, infrastructure management, and digital transformation.
              Our mission is to help organizations stay secure and compliant in today's complex technology landscape.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center space-y-4">
                  <Globe className="w-12 h-12 text-[#4AB957]" />
                  <h3 className="text-xl font-semibold">Visit Our Website</h3>
                  <a 
                    href="https://smartedge.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#4AB957] hover:underline inline-flex items-center font-semibold"
                  >
                    SmartEdge.in
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </Card>
              <Card className="p-8 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center space-y-4">
                  <Mail className="w-12 h-12 text-[#4AB957]" />
                  <h3 className="text-xl font-semibold">Get in Touch</h3>
                  <a 
                    href="mailto:contact@smartedge.in"
                    className="text-[#4AB957] hover:underline inline-flex items-center font-semibold"
                  >
                    contact@smartedge.in
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#4AB957]/10 to-[#58585A]/10">
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
              className="bg-[#4AB957] hover:bg-[#4AB957]/90 text-white shadow-lg hover:shadow-xl transition-all"
              size="lg"
              asChild
            >
              <a href="mailto:contact@smartedge.in">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SmartEdge. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
