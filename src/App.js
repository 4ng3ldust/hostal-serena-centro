import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, Mail, Phone, Instagram, ChevronDown, Globe, Menu, X } from 'lucide-react';

function App() {
  // Estado para controlar la landing page
  const [showLanding, setShowLanding] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('es');

  // Función para entrar al sitio principal
  const enterSite = () => {
    setShowLanding(false);
  };

  // Función para cambiar idioma
  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'es' ? 'en' : 'es');
  };

  // Landing Page Component
  if (showLanding) {
    return (
      <div className="landing-page">
        {/* Fondo de atardecer La Serena */}
        <div 
          className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          {/* Contenido Central */}
          <div className="text-center text-white px-4 max-w-4xl mx-auto landing-content">
            {/* Bienvenida */}
            <h2 className="text-xl md:text-2xl font-light mb-4 animate-fade-in-up opacity-90">
              Bienvenido a La Serena
            </h2>
            
            {/* Título Principal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Experience <span className="text-yellow-400">Authentic</span><br />
              Culture at Hostal Serena
            </h1>
            
            {/* Descripción */}
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Discover the heart of local traditions and comfortable stays at Hostal Serena. 
              Our hostal offers a unique blend of cultural immersion and relaxation, 
              making your travel experience unforgettable.
            </p>
            
            {/* Botón Principal */}
            <button
              onClick={enterSite}
              className="landing-enter-btn bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl animate-fade-in-up animation-delay-600"
            >
              HostalSerena
            </button>
            
            {/* Indicador de scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="text-white opacity-70">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sitio Principal (con transición)
  return (
    <div className="main-site animate-fade-in">
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <h1 className="brand-logo text-2xl font-black text-gray-900">
                  HostalSerena
                </h1>
              </div>

              {/* Navegación Desktop */}
              <nav className="hidden md:flex space-x-8">
                <a href="#habitaciones" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {currentLang === 'es' ? 'Habitaciones' : 'Rooms'}
                </a>
                <a href="#actividades" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {currentLang === 'es' ? 'Actividades' : 'Activities'}
                </a>
                <a href="#nosotros" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {currentLang === 'es' ? 'Nosotros' : 'About Us'}
                </a>
                <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {currentLang === 'es' ? 'Contacto' : 'Contact'}
                </a>
              </nav>

              {/* Botones de acción */}
              <div className="hidden md:flex items-center space-x-4">
                {/* Botón de idioma */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{currentLang === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}</span>
                </button>
                
                <a href="#reservar" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  {currentLang === 'es' ? 'Reservar Ahora' : 'Book Now'}
                </a>
              </div>

              {/* Menú móvil */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-gray-600"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Menú móvil desplegable */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200">
                <div className="flex flex-col space-y-4">
                  <a href="#habitaciones" className="text-gray-700 hover:text-blue-600 font-medium">
                    {currentLang === 'es' ? 'Habitaciones' : 'Rooms'}
                  </a>
                  <a href="#actividades" className="text-gray-700 hover:text-blue-600 font-medium">
                    {currentLang === 'es' ? 'Actividades' : 'Activities'}
                  </a>
                  <a href="#nosotros" className="text-gray-700 hover:text-blue-600 font-medium">
                    {currentLang === 'es' ? 'Nosotros' : 'About Us'}
                  </a>
                  <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium">
                    {currentLang === 'es' ? 'Contacto' : 'Contact'}
                  </a>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center space-x-1 text-sm text-gray-600"
                    >
                      <Globe className="h-4 w-4" />
                      <span>{currentLang === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}</span>
                    </button>
                    <a href="#reservar" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                      {currentLang === 'es' ? 'Reservar' : 'Book Now'}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
              opacity: 0.3
            }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="text-center">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in leading-tight">
                {currentLang === 'es' ? (
                  <>Vive la <span className="text-yellow-400 authentic-highlight">Auténtica</span> Cultura de La Serena</>
                ) : (
                  <>Experience <span className="text-yellow-400 authentic-highlight">Authentic</span> Culture at HostalSerena</>
                )}
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in">
                {currentLang === 'es' 
                  ? 'Descubre el corazón de las tradiciones locales y estadías cómodas en Hostal Serena. Nuestro hostal ofrece una mezcla única de inmersión cultural y relajación.'
                  : 'Discover the heart of local traditions and comfortable stays at Hostal Serena. Our hostal offers a unique blend of cultural immersion and relaxation.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <a href="#reservar" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {currentLang === 'es' ? 'Reservar Ahora' : 'Book Now'}
                </a>
                <a href="#actividades" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  {currentLang === 'es' ? 'Ver Actividades' : 'View Activities'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Reservas */}
        <section id="reservar" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                {currentLang === 'es' ? 'Reserva tu Estadía Auténtica' : 'Book Your Authentic Stay'}
              </h2>
              
              <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLang === 'es' ? 'Check-in' : 'Check-in'}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input type="date" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLang === 'es' ? 'Check-out' : 'Check-out'}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input type="date" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLang === 'es' ? 'Huéspedes' : 'Guests'}
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                      <option>1 {currentLang === 'es' ? 'Huésped' : 'Guest'}</option>
                      <option>2 {currentLang === 'es' ? 'Huéspedes' : 'Guests'}</option>
                      <option>3 {currentLang === 'es' ? 'Huéspedes' : 'Guests'}</option>
                      <option>4+ {currentLang === 'es' ? 'Huéspedes' : 'Guests'}</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="flex items-end">
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    {currentLang === 'es' ? 'Buscar Disponibilidad' : 'Check Availability'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Nuestra Historia y Misión */}
        <section id="nosotros" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {currentLang === 'es' ? 'Nuestra Historia y Misión' : 'Our Story & Mission'}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {currentLang === 'es' 
                    ? 'En el corazón de La Serena, nuestro hostal se ha convertido en un hogar lejos del hogar para viajeros de todo el mundo. Nos especializamos en ofrecer experiencias auténticas que conectan a nuestros huéspedes con la rica cultura y tradiciones de esta hermosa región de Chile.'
                    : 'In the heart of La Serena, our hostal has become a home away from home for travelers from around the world. We specialize in offering authentic experiences that connect our guests with the rich culture and traditions of this beautiful region of Chile.'
                  }
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {currentLang === 'es'
                    ? 'Desde 2018, hemos acogido a más de 500 huéspedes felices, manteniendo una calificación promedio de 4.8 estrellas gracias a nuestro compromiso con la hospitalidad auténtica y experiencias culturales inolvidables.'
                    : 'Since 2018, we have welcomed over 500 happy guests, maintaining an average rating of 4.8 stars thanks to our commitment to authentic hospitality and unforgettable cultural experiences.'
                  }
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">
                      {currentLang === 'es' ? 'Huéspedes Felices' : 'Happy Guests'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                      4.8 <Star className="h-6 w-6 text-yellow-400 ml-1 fill-current" />
                    </div>
                    <div className="text-sm text-gray-600">
                      {currentLang === 'es' ? 'Calificación Promedio' : 'Average Rating'}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hostal Serena Interior"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <div className="text-sm text-gray-600">
                      {currentLang === 'es' ? 'Años de Experiencia' : 'Years Experience'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Habitaciones */}
        <section id="habitaciones" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {currentLang === 'es' ? 'Nuestras Hermosas Habitaciones y Instalaciones' : 'Our Beautiful Rooms & Facilities'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {currentLang === 'es' 
                  ? 'Elige entre nuestras cómodas opciones de alojamiento, diseñadas para satisfacer las necesidades de cada tipo de viajero.'
                  : 'Choose from our comfortable accommodation options, designed to meet the needs of every type of traveler.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Habitación Estándar */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                  {currentLang === 'es' ? 'Popular' : 'Popular'}
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentLang === 'es' ? 'Habitación Estándar' : 'Standard Room'}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-blue-600">$35.000</span>
                    <span className="text-gray-500">CLP</span>
                    <span className="text-sm text-gray-500">/ {currentLang === 'es' ? 'noche' : 'night'}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">≈ $50 USD</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Cama individual cómoda' : 'Comfortable single bed'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Baño compartido limpio' : 'Clean shared bathroom'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'WiFi gratuito' : 'Free WiFi'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Desayuno incluido' : 'Breakfast included'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Área común relajante' : 'Relaxing common area'}
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  {currentLang === 'es' ? 'Reservar Ahora' : 'Book Now'}
                </button>
              </div>

              {/* Suite Familiar */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                  {currentLang === 'es' ? 'Familias' : 'Families'}
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentLang === 'es' ? 'Suite Familiar' : 'Family Suite'}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-purple-600">$65.000</span>
                    <span className="text-gray-500">CLP</span>
                    <span className="text-sm text-gray-500">/ {currentLang === 'es' ? 'noche' : 'night'}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">≈ $90 USD</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Habitación privada espaciosa' : 'Spacious private room'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Baño privado completo' : 'Full private bathroom'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Hasta 4 personas' : 'Up to 4 people'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Kitchenette equipada' : 'Equipped kitchenette'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Balcón con vista' : 'Balcony with view'}
                  </li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  {currentLang === 'es' ? 'Reservar Ahora' : 'Book Now'}
                </button>
              </div>

              {/* Ofertas Especiales */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 bg-yellow-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                  {currentLang === 'es' ? '¡Oferta!' : 'Deal!'}
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentLang === 'es' ? 'Ofertas Especiales' : 'Special Offers'}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-yellow-600">
                      {currentLang === 'es' ? 'Desde' : 'From'}
                    </span>
                    <span className="text-3xl font-bold text-yellow-600">$18.000</span>
                    <span className="text-gray-500">CLP</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {currentLang === 'es' ? 'Precios con descuentos especiales' : 'Special discount prices'}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? '10% descuento +7 noches' : '10% off 7+ nights'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? '15% reserva anticipada' : '15% early booking'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Descuentos grupales' : 'Group discounts'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Ofertas de temporada' : 'Seasonal offers'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                    {currentLang === 'es' ? 'Tours incluidos' : 'Tours included'}
                  </li>
                </ul>
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  {currentLang === 'es' ? 'Ver Ofertas' : 'View Deals'}
                </button>
              </div>
            </div>

            {/* Galería de fotos */}
            <div className="masonry-gallery">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                {currentLang === 'es' ? 'Galería de Instalaciones' : 'Facilities Gallery'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Habitación" className="rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-square object-cover" />
                <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Área común" className="rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-[4/5] object-cover" />
                <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Cocina" className="rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-[3/4] object-cover" />
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Balcón" className="rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-square object-cover" />
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Vista" className="rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-[3/4] object-cover" />
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Exterior" className="rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-[4/5] object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Actividades Culturales */}
        <section id="actividades" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {currentLang === 'es' ? 'Experiencias Locales Auténticas' : 'Authentic Local Experiences'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {currentLang === 'es' 
                  ? 'Sumérgete en la rica cultura de La Serena con nuestras experiencias cuidadosamente seleccionadas que te conectarán con las tradiciones locales.'
                  : 'Immerse yourself in the rich culture of La Serena with our carefully curated experiences that will connect you with local traditions.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Mercados Locales" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentLang === 'es' ? 'Cultural' : 'Cultural'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {currentLang === 'es' ? 'Explora Mercados Locales' : 'Explore Local Markets'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentLang === 'es' 
                      ? 'Descubre los sabores auténticos y productos locales en los mercados tradicionales de La Serena, donde los vendedores locales comparten sus historias.'
                      : 'Discover authentic flavors and local products in La Serena\'s traditional markets, where local vendors share their stories.'
                    }
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>{currentLang === 'es' ? 'Más información' : 'Learn more'}</span>
                    <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Danzas Tradicionales" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentLang === 'es' ? 'Espectáculo' : 'Performance'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {currentLang === 'es' ? 'Actuaciones de Danza Tradicional' : 'Traditional Dance Performances'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentLang === 'es' 
                      ? 'Disfruta de espectáculos de cueca, danzas folclóricas del norte de Chile y aprende sobre la historia cultural de la región a través del movimiento.'
                      : 'Enjoy cueca performances, northern Chilean folk dances and learn about the region\'s cultural history through movement.'
                    }
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <span>{currentLang === 'es' ? 'Más información' : 'Learn more'}</span>
                    <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1539650116574-75c0c6d19d8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Tours Históricos" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentLang === 'es' ? 'Historia' : 'History'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {currentLang === 'es' ? 'Tours Guiados de Sitios Históricos' : 'Guided Tours of Historical Sites'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentLang === 'es' 
                      ? 'Explora la arquitectura colonial de La Serena, sus iglesias históricas y monumentos que cuentan la fascinante historia de esta ciudad costera.'
                      : 'Explore La Serena\'s colonial architecture, historic churches and monuments that tell the fascinating story of this coastal city.'
                    }
                  </p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <span>{currentLang === 'es' ? 'Más información' : 'Learn more'}</span>
                    <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Cocina Chilena" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentLang === 'es' ? 'Culinario' : 'Culinary'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {currentLang === 'es' ? 'Clases de Cocina Chilena' : 'Chilean Cooking Classes'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentLang === 'es' 
                      ? 'Aprende a preparar platos tradicionales como empanadas, cazuela y sopaipillas usando ingredientes locales frescos de la región de Coquimbo.'
                      : 'Learn to prepare traditional dishes like empanadas, cazuela and sopaipillas using fresh local ingredients from the Coquimbo region.'
                    }
                  </p>
                  <div className="flex items-center text-orange-600 font-semibold">
                    <span>{currentLang === 'es' ? 'Más información' : 'Learn more'}</span>
                    <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {currentLang === 'es' ? 'Lo Que Dicen Nuestros Huéspedes' : 'What Our Guests Say'}
              </h2>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                "{currentLang === 'es' 
                  ? 'Mi experiencia en Hostal Serena fue absolutamente increíble. El personal fue muy acogedor y las actividades culturales realmente me ayudaron a conectarme con la cultura local de La Serena. Las instalaciones estaban impecables y la ubicación era perfecta para explorar la ciudad. ¡Definitivamente regresaré!'
                  : 'My experience at Hostal Serena was absolutely incredible. The staff was so welcoming and the cultural activities really helped me connect with La Serena\'s local culture. The facilities were spotless and the location was perfect for exploring the city. I will definitely be back!'
                }"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Maria Lopez" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">Maria Lopez</div>
                  <div className="text-gray-600">
                    {currentLang === 'es' ? 'Viajera desde España' : 'Traveler from Spain'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {currentLang === 'es' ? 'Contáctanos' : 'Contact Us'}
              </h2>
              <p className="text-xl text-gray-600">
                {currentLang === 'es' 
                  ? 'Estamos aquí para ayudarte a planificar tu experiencia perfecta en La Serena'
                  : 'We\'re here to help you plan your perfect La Serena experience'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Envíanos un Email */}
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang === 'es' ? 'Envíanos un Email' : 'Email Us'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentLang === 'es' 
                    ? 'Responderemos a tu consulta en menos de 24 horas'
                    : 'We\'ll respond to your inquiry within 24 hours'
                  }
                </p>
                <a href="mailto:info@hostalserenacentro.cl" className="text-blue-600 hover:text-blue-700 font-semibold">
                  info@hostalserenacentro.cl
                </a>
              </div>

              {/* Llámanos */}
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang === 'es' ? 'Llámanos' : 'Call Us'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentLang === 'es' 
                    ? 'Disponible todos los días de 8:00 AM a 10:00 PM'
                    : 'Available every day from 8:00 AM to 10:00 PM'
                  }
                </p>
                <a href="tel:+56512345678" className="text-blue-600 hover:text-blue-700 font-semibold">
                  +56 51 234 5678
                </a>
              </div>

              {/* Visítanos */}
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang === 'es' ? 'Visítanos' : 'Visit Us'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentLang === 'es' 
                    ? 'En el corazón del centro histórico de La Serena'
                    : 'In the heart of La Serena\'s historic center'
                  }
                </p>
                <address className="text-blue-600 hover:text-blue-700 font-semibold not-italic">
                  Avenida Francisco de Aguirre 123<br />
                  La Serena, Región de Coquimbo
                </address>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {currentLang === 'es' ? 'Envíanos un Mensaje' : 'Send Us a Message'}
              </h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLang === 'es' ? 'Nombre' : 'Name'}
                  </label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLang === 'es' ? 'Email' : 'Email'}
                  </label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLang === 'es' ? 'Asunto' : 'Subject'}
                  </label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentLang === 'es' ? 'Mensaje' : 'Message'}
                  </label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    {currentLang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo y descripción */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">HostalSerena</h3>
                <p className="text-gray-300 mb-6 max-w-md">
                  {currentLang === 'es' 
                    ? 'Tu hogar lejos del hogar en el corazón de La Serena. Experiencias auténticas y hospitalidad cálida te esperan.'
                    : 'Your home away from home in the heart of La Serena. Authentic experiences and warm hospitality await you.'
                  }
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="mailto:info@hostalserenacentro.cl" className="text-gray-300 hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                  <a href="tel:+56512345678" className="text-gray-300 hover:text-white transition-colors">
                    <Phone className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Enlaces rápidos */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {currentLang === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
                </h4>
                <ul className="space-y-2">
                  <li><a href="#habitaciones" className="text-gray-300 hover:text-white transition-colors">
                    {currentLang === 'es' ? 'Habitaciones' : 'Rooms'}
                  </a></li>
                  <li><a href="#actividades" className="text-gray-300 hover:text-white transition-colors">
                    {currentLang === 'es' ? 'Actividades' : 'Activities'}
                  </a></li>
                  <li><a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">
                    {currentLang === 'es' ? 'Nosotros' : 'About'}
                  </a></li>
                  <li><a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                    {currentLang === 'es' ? 'Contacto' : 'Contact'}
                  </a></li>
                </ul>
              </div>

              {/* Información de contacto */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {currentLang === 'es' ? 'Contacto' : 'Contact Info'}
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Avenida Francisco de Aguirre 123, La Serena</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>+56 51 234 5678</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>info@hostalserenacentro.cl</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-300 text-sm">
                  {currentLang === 'es' 
                    ? '© 2024 HostalSerena. Todos los derechos reservados.'
                    : '© 2024 HostalSerena. All rights reserved.'
                  }
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {currentLang === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions'}
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {currentLang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;