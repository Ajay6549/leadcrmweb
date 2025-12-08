import React from 'react';
import { Mail, Phone, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#E0F2FE] to-[#B3E5FC] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* LeadCRM Branding & Social */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LS</span>
              </div>
              <span className="text-xl font-bold text-gray-900 font-poppins">LEADCRM.IO</span>
            </div>
            <p className="text-gray-700 mb-6 text-sm font-poppins">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-bold text-sm">X</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-bold text-xs">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="font-bold text-[#1E3A8A] mb-4 font-poppins">Integrations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm font-poppins">HubSpot</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm font-poppins">Salesforce</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm font-poppins">Pipedrive</a></li>
              <li className="flex items-center gap-2">
                <a href="#" className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm font-poppins">Close.io</a>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Coming Soon</span>
              </li>
              <li className="flex items-center gap-2">
                <a href="#" className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm font-poppins">Insightly</a>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Coming Soon</span>
              </li>
            </ul>
          </div>

          {/* Alternative */}
          <div>
            <h3 className="font-bold text-[#1E3A8A] mb-4 font-poppins">Alternative</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm font-poppins">Surfe VS LeadCRM</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm font-poppins">Linkmatch Alternative</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-[#1E3A8A] mb-4 font-poppins">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm font-poppins">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm font-poppins">Terms of Use</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-[#1E3A8A] mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700 text-sm font-poppins">
                <Mail className="w-4 h-4 text-[#1E3A8A]" />
                support@leadcrm.io
              </li>
              <li className="flex items-center gap-2 text-gray-700 text-sm font-poppins">
                <Phone className="w-4 h-4 text-[#1E3A8A]" />
                +1 231-538-7466
              </li>
              <li className="flex items-center gap-2 text-gray-700 text-sm font-poppins">
                <HelpCircle className="w-4 h-4 text-[#1E3A8A]" />
                Help Center
              </li>
            </ul>
            
            {/* Chrome Extension Badge */}
            <div className="mt-6 bg-gray-900 rounded-lg px-4 py-3 flex items-center gap-3">
              <span className="text-white text-sm font-semibold font-poppins">Available in</span>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gradient-to-br from-red-400 via-yellow-400 to-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span className="text-white text-sm font-semibold font-poppins">Chrome</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with X */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-blue-400 border-dashed"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-br from-[#E0F2FE] to-[#B3E5FC] px-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">X</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-6">
          <p className="text-gray-600 text-xs text-center leading-relaxed font-poppins">
            <strong>Disclaimer:</strong> LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn™ logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-700 text-sm font-poppins">
            Copyright © 2025 LeadCRM. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
