// src/components/Footer.js - Footer Completo (Enlaces corregidos)
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4 hostal-logo">
              HostalSerena
            </div>
            <p className="text-gray-300 mb-4">
              Vive la auténtica cultura de La Serena en nuestro acogedor hostal. 
              Una experiencia única en el corazón de la ciudad.
            </p>
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
              <span className="text-gray-300 ml-2">4.8/5</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/habitaciones" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link to="/actividades" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Actividades
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/reservar" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Reservar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. Francisco de Aguirre 125<br />
                  La Serena, Región de Coquimbo
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">contacto@hostalserenacentro.cl</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} className="text-blue-400" />
                <span className="text-gray-300">Check-in: 14:00 - Check-out: 11:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• WiFi gratuito</li>
              <li>• Cocina compartida</li>
              <li>• Área común</li>
              <li>• Recepción 24h</li>
              <li>• Tours locales</li>
              <li>• Lavandería</li>
              <li>• Equipaje guardado</li>
              <li>• Café de cortesía</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 HostalSerena. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Términos y Condiciones
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Política de Privacidad
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Política de Cancelación
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;