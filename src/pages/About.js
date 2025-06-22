// src/pages/Activities.js - Página de Actividades
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, MapPin, Star, Calendar, Camera } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      id: 'markets',
      title: 'Explora Mercados Locales',
      description: 'Descubre los sabores y aromas únicos de nuestros mercados tradicionales donde los vendedores locales ofrecen productos frescos, artesanías y especialidades regionales.',
      image: '/api/placeholder/400/300',
      duration: '3 horas',
      groupSize: '2-8 personas',
      price: '$15.000',
      rating: 4.9,
      highlights: [
        'Degustación de productos locales',
        'Interacción con vendedores tradicionales',
        'Compra de souvenirs únicos',
        'Guía local experto'
      ],
      schedule: 'Martes, Jueves y Sábados - 9:00 AM',
      category: 'Cultural'
    },
    {
      id: 'dance',
      title: 'Actuaciones de Danza Tradicional',
      description: 'Disfruta de espectáculos auténticos de danza folclórica chilena con grupos locales que preservan las tradiciones ancestrales de nuestra región.',
      image: '/api/placeholder/400/300',
      duration: '2 horas',
      groupSize: '5-20 personas',
      price: '$12.000',
      rating: 4.8,
      highlights: [
        'Espectáculo de danza folclórica',
        'Música tradicional en vivo',
        'Explicación histórica y cultural',
        'Oportunidad de participar'
      ],
      schedule: 'Viernes y Domingos - 7:00 PM',
      category: 'Entretenimiento'
    },
    {
      id: 'historical-tours',
      title: 'Tours Guiados de Sitios Históricos',
      description: 'Explora la rica historia colonial de La Serena con guías expertos que te llevarán por los monumentos y edificios más significativos de la ciudad.',
      image: '/api/placeholder/400/300',
      duration: '4 horas',
      groupSize: '3-12 personas',
      price: '$25.000',
      rating: 4.9,
      highlights: [
        'Iglesias coloniales históricas',
        'Centro histórico de La Serena',
        'Museo Arqueológico',
        'Guía certificado en historia'
      ],
      schedule: 'Lunes a Sábados - 10:00 AM',
      category: 'Historia'
    },
    {
      id: 'cooking',
      title: 'Clases de Cocina Chilena',
      description: 'Aprende a preparar platos tradicionales con ingredientes locales de la mano de cocineros expertos en gastronomía regional.',
      image: '/api/placeholder/400/300',
      duration: '3.5 horas',
      groupSize: '4-10 personas',
      price: '$30.000',
      rating: 4.9,
      highlights: [
        'Preparación de empanadas',
        'Platos típicos del norte',
        'Uso de ingredientes locales',
        'Cena incluida'
      ],
      schedule: 'Miércoles y Sábados - 3:00 PM',
      category: 'Gastronomía'
    }
  ];

  const dayTrips = [
    {
      title: 'Valle del Elqui',
      description: 'Excursión de día completo al místico Valle del Elqui',
      price: '$45.000',
      duration: '8 horas',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'Observatorio Mamalluca',
      description: 'Tour nocturno de observación astronómica',
      price: '$35.000',
      duration: '4 horas',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'Pisco Elqui',
      description: 'Visita a destilerías y degustación de pisco',
      price: '$40.000',
      duration: '6 horas',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experiencias Auténticas Locales
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Sumérgete en la cultura local con nuestras actividades cuidadosamente 
            seleccionadas que te conectarán con la verdadera esencia de La Serena.
          </p>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestras Actividades Destacadas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Actividades diseñadas para ofrecerte una experiencia auténtica 
              y memorable durante tu estadía.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {activity.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star size={16} fill="currentColor" className="text-yellow-400" />
                        <span className="text-sm font-medium">{activity.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {activity.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {activity.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock size={14} />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Users size={14} />
                        <span>{activity.groupSize}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar size={14} />
                        <span className="text-xs">{activity.schedule}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-blue-600">{activity.price}</span>
                        <span className="text-xs text-gray-500 block">por persona</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Incluye:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {activity.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-1">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                      Reservar Actividad
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Excursiones de Día Completo
            </h2>
            <p className="text-lg text-gray-600">
              Descubre los alrededores de La Serena con nuestras excursiones especiales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dayTrips.map((trip, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{trip.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{trip.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-1 text-gray-600 text-sm">
                      <Clock size={14} />
                      <span>{trip.duration}</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">{trip.price}</span>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Cómo Funciona
            </h2>
            <p className="text-lg text-gray-600">
              Reservar tus actividades es muy simple
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Elige tu Actividad</h3>
              <p className="text-gray-600">Selecciona de nuestra lista de experiencias auténticas</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Reserva y Paga</h3>
              <p className="text-gray-600">Completa tu reserva de manera segura online</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Vive la Experiencia</h3>
              <p className="text-gray-600">Disfruta de tu actividad con guías locales expertos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Consejos para tus Actividades
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Camera className="text-blue-600 mb-3" size={24} />
              <h3 className="font-semibold text-gray-800 mb-2">Trae tu Cámara</h3>
              <p className="text-gray-600 text-sm">Captura momentos únicos durante nuestras actividades culturales.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Clock className="text-blue-600 mb-3" size={24} />
              <h3 className="font-semibold text-gray-800 mb-2">Llega Puntual</h3>
              <p className="text-gray-600 text-sm">Te recomendamos llegar 15 minutos antes del inicio.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Users className="text-blue-600 mb-3" size={24} />
              <h3 className="font-semibold text-gray-800 mb-2">Grupos Pequeños</h3>
              <p className="text-gray-600 text-sm">Mantenemos grupos reducidos para una experiencia más personal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para vivir experiencias únicas?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Reserva tu actividad favorita y descubre la verdadera cultura de La Serena
          </p>
          <Link
            to="/reservar"
            className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Reservar Actividades
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Activities;