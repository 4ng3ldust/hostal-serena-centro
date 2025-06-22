// src/pages/Home.js - Página Principal
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Users, MapPin, ChevronRight } from 'lucide-react';

const Home = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 hero-title">
              Vive la Auténtica
              <br />
              <span className="text-yellow-300">Cultura de La Serena</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Sumérgete en la rica historia, tradiciones vibrantes y la calidez 
              de la gente local en nuestro acogedor hostal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservar"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Reservar Ahora
              </Link>
              <Link
                to="/actividades"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Ver Actividades
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Widget */}
      <section className="bg-white shadow-lg -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Verifica Disponibilidad
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-in
                </label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-out
                </label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Huéspedes
                </label>
                <div className="relative">
                  <Users size={18} className="absolute left-3 top-3 text-gray-400" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} huésped{num > 1 ? 'es' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 h-fit self-end">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nuestra Historia y Misión
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Desde 2015, hemos estado dedicados a ofrecer experiencias auténticas 
                que conectan a los viajeros con la verdadera esencia de La Serena.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Más que un lugar para dormir
                </h3>
                <p className="text-gray-600 mb-6">
                  Nuestro hostal ofrece una mezcla única de inmersión cultural y relajación, 
                  haciendo que tu experiencia de viaje sea inolvidable. Reserva tu estadía 
                  hoy y explora la belleza de nuestros alrededores.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">8+</div>
                    <div className="text-sm text-gray-600">Años de experiencia</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Huéspedes felices</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">4.8</div>
                    <div className="text-sm text-gray-600">Calificación promedio</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img src="/api/placeholder/300/200" alt="Área común" className="w-full h-32 object-cover" />
                    <div className="p-3">
                      <h4 className="font-semibold text-sm">Área Común</h4>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img src="/api/placeholder/300/200" alt="Cocina compartida" className="w-full h-32 object-cover" />
                    <div className="p-3">
                      <h4 className="font-semibold text-sm">Cocina Equipada</h4>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img src="/api/placeholder/300/200" alt="Habitación privada" className="w-full h-32 object-cover" />
                    <div className="p-3">
                      <h4 className="font-semibold text-sm">Habitaciones Cómodas</h4>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img src="/api/placeholder/300/200" alt="Terraza" className="w-full h-32 object-cover" />
                    <div className="p-3">
                      <h4 className="font-semibold text-sm">Terraza con Vista</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Experiencias Locales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre las tradiciones y cultura de La Serena con nuestras actividades especialmente seleccionadas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Explora Mercados Locales",
                description: "Descubre los sabores y aromas únicos de nuestros mercados tradicionales.",
                image: "/api/placeholder/300/200",
                icon: "🏪"
              },
              {
                title: "Actuaciones de Danza Tradicional",
                description: "Disfruta de espectáculos auténticos de danza folclórica chilena.",
                image: "/api/placeholder/300/200",
                icon: "💃"
              },
              {
                title: "Tours Guiados Históricos",
                description: "Explora la rica historia colonial de La Serena con guías expertos.",
                image: "/api/placeholder/300/200",
                icon: "🏛️"
              },
              {
                title: "Clases de Cocina Chilena",
                description: "Aprende a preparar platos tradicionales con ingredientes locales.",
                image: "/api/placeholder/300/200",
                icon: "👨‍🍳"
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                  <Link to="/actividades" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                    Ver más <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Lo que dicen nuestros huéspedes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 text-center mb-6">
                "Una experiencia absolutamente increíble. El ambiente es cálido y acogedor, 
                con elementos decorativos tradicionales que realmente te hacen sentir 
                conectado con la cultura local. El staff es excepcional."
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-gray-800">María López</div>
                <div className="text-gray-600">Viajera desde Santiago</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para tu aventura en La Serena?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Reserva ahora y recibe un 10% de descuento en tu primera estadía.
          </p>
          <Link
            to="/reservar"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Reservar con Descuento
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;