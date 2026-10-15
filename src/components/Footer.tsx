import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const : React.FC = () => {
  return (
                <p className="text-gray-400 mb-6">
              AI-powered voice calling platform that automates customer outreach 
              and scales your business conversations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lead Generation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sales Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Survey Collection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Appointment Booking</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status Page</a></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@callops.ai
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 CallOps. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ;