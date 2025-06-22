// src/pages/Rooms.js - Página de Habitaciones
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bed, Wifi, Coffee, Tv, Car, Star, Check } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 'private',
      name: 'Habitación Privada',
      price: '35.000',
      oldPrice: '45.000',
      image: '/api/placeholder/400/300',
      capacity: '1-2 personas',
      beds: '1 cama doble',
      features: [
        'Baño privado',
        'WiFi gratuito',
        'TV con cable',
        'Escritorio',
        'Ventana con vista',
        'Aire acondicionado'
      ],
      popular: true,
      description: 'Perfecta para parejas o viajeros que buscan privacidad y comodidad.'
    },
    {
      id: 'suite',
      name: 'Suite Familiar',
      price: '25.000',
      oldPrice: '35.000',
      image: '/api/placeholder/400/300',
      capacity: '3-4 personas',
      beds: '1 cama doble + 2 individuales',
      features: [
        'Baño privado',
        'Sala de estar',
        'Mini nevera',
        'WiFi gratuito',
        'TV con cable',
        'Balcón privado'
      ],
      popular: false,
      description: 'Ideal para familias que viajan juntas y buscan espacio adicional.'
    },
    {
      id: 'shared',
      name: 'Habitación Compartida',
      price: '18.000',
      oldPrice: '22.000',
      image: '/api/placeholder/400/300',
      capacity: '1 persona',
      beds: '1 cama en dormitorio',
      features: [
        'Baño compartido',
        'WiFi gratuito',
        'Lockers seguros',
        'Área común',
        'Cocina compartida',
        'Ambiente social'
      ],
      popular: false,
      description: 'Perfecta para mochileros y viajeros que buscan conocer gente nueva.'
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'WiFi Gratuito', description: 'Internet de alta velocidad en todas las habitaciones' },
    { icon: Coffee, name: 'Café de Cortesía', description: 'Café y té disponible 24/7 en el área común' },
    { icon: Tv, name: 'TV por Cable', description: 'Televisión con canales nacionales e internacionales' },
    { icon: Car, name: 'Estacionamiento', description: 'Estacionamiento gratuito para huéspedes' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestras Hermosas Habitaciones
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Descubre nuestras cómodas habitaciones diseñadas para brindarte 
            la mejor experiencia durante tu estadía en La Serena.
          </p>
        </div>
      </section>

      {/* Room Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${room.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {room.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 px-4 text-sm font-medium">
                    ⭐ Más Popular
                  </div>
                )}
                
                <div className="relative">
                  <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 shadow-lg">
                    <div className="text-xs text-gray-500 line-through">${room.oldPrice}</div>
                    <div className="text-lg font-bold text-blue-600">${room.price}</div>
                    <div className="text-xs text-gray-600">por noche</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bed size={16} />
                      <span>{room.beds}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Incluye:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-1 text-sm text-gray-600">
                          <Check size={14} className="text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/reservar"
                    className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-colors duration-200 block ${
                      room.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Reservar Ahora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comodidades y Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Todas nuestras habitaciones incluyen estas comodidades para hacer 
              tu estadía más placentera y conveniente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <amenity.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{amenity.name}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Galería de Habitaciones
            </h2>
            <p className="text-lg text-gray-600">
              Echa un vistazo a nuestras instalaciones y habitaciones
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={`/api/placeholder/300/300`} 
                  alt={`Habitación ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "¿Cuál es el horario de check-in y check-out?",
                answer: "Check-in: 14:00 hrs - Check-out: 11:00 hrs. Si necesitas horarios especiales, contáctanos."
              },
              {
                question: "¿Incluyen desayuno las habitaciones?",
                answer: "Ofrecemos café y té de cortesía. Desayuno completo disponible por $8.000 adicionales."
              },
              {
                question: "¿Hay política de cancelación?",
                answer: "Cancelación gratuita hasta 24 horas antes de la llegada. Después aplican cargos."
              },
              {
                question: "¿Aceptan mascotas?",
                answer: "Sí, aceptamos mascotas pequeñas con cargo adicional de $5.000 por noche."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para reservar tu habitación?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Reserva ahora y asegura tu lugar en el corazón de La Serena
          </p>
          <Link
            to="/reservar"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Reservar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Rooms;