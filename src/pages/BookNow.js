// src/pages/BookNow.js - Página de Reservas
import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Shield, Clock, Check, Phone, Mail } from 'lucide-react';

const BookNow = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'private',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [step, setStep] = useState(1);

  const roomTypes = [
    {
      id: 'private',
      name: 'Habitación Privada',
      price: 35000,
      oldPrice: 45000,
      description: 'Perfecta para parejas o viajeros que buscan privacidad',
      features: ['Baño privado', 'WiFi gratuito', 'TV con cable', 'Escritorio']
    },
    {
      id: 'suite',
      name: 'Suite Familiar',
      price: 25000,
      oldPrice: 35000,
      description: 'Ideal para familias que viajan juntas',
      features: ['Baño privado', 'Sala de estar', 'Mini nevera', 'Balcón privado']
    },
    {
      id: 'shared',
      name: 'Habitación Compartida',
      price: 18000,
      oldPrice: 22000,
      description: 'Perfecta para mochileros y viajeros sociales',
      features: ['Baño compartido', 'WiFi gratuito', 'Lockers seguros', 'Área común']
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return dayDiff > 0 ? dayDiff : 0;
    }
    return 0;
  };

  const getSelectedRoom = () => {
    return roomTypes.find(room => room.id === formData.roomType);
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const room = getSelectedRoom();
    return nights * room.price;
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reserva tu Estadía Perfecta
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Reserva tu habitación ideal de manera fácil usando nuestro sistema 
            interactivo y formulario de reserva rápido en HostalSerena.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center max-w-md mx-auto">
            <div className={`flex items-center ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="ml-2 text-sm">Fechas</span>
            </div>
            <div className={`w-16 h-0.5 mx-4 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="ml-2 text-sm">Datos</span>
            </div>
            <div className={`w-16 h-0.5 mx-4 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 3 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="ml-2 text-sm">Pago</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  {/* Step 1: Dates & Room Selection */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Selecciona tus Fechas y Habitación
                      </h2>
                      
                      {/* Dates */}
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Check-in
                          </label>
                          <div className="relative">
                            <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
                            <input
                              type="date"
                              name="checkIn"
                              value={formData.checkIn}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Check-out
                          </label>
                          <div className="relative">
                            <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
                            <input
                              type="date"
                              name="checkOut"
                              value={formData.checkOut}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Huéspedes
                          </label>
                          <div className="relative">
                            <Users size={18} className="absolute left-3 top-3 text-gray-400" />
                            <select
                              name="guests"
                              value={formData.guests}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                              {[1,2,3,4,5,6].map(num => (
                                <option key={num} value={num}>{num} huésped{num > 1 ? 'es' : ''}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Room Selection */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          Elige tu habitación
                        </h3>
                        <div className="space-y-4">
                          {roomTypes.map((room) => (
                            <div
                              key={room.id}
                              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                formData.roomType === room.id
                                  ? 'border-purple-500 bg-purple-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                              onClick={() => setFormData({...formData, roomType: room.id})}
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <div className="flex items-center mb-2">
                                    <input
                                      type="radio"
                                      name="roomType"
                                      value={room.id}
                                      checked={formData.roomType === room.id}
                                      onChange={handleInputChange}
                                      className="text-purple-600 mr-3"
                                    />
                                    <h4 className="font-semibold text-lg">{room.name}</h4>
                                  </div>
                                  <p className="text-gray-600 text-sm mb-2">{room.description}</p>
                                  <div className="flex flex-wrap gap-1">
                                    {room.features.map((feature, index) => (
                                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                        {feature}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm text-gray-500 line-through">${room.oldPrice.toLocaleString()}</div>
                                  <div className="text-xl font-bold text-purple-600">${room.price.toLocaleString()}</div>
                                  <div className="text-sm text-gray-500">por noche</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={handleNextStep}
                        disabled={!formData.checkIn || !formData.checkOut}
                        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Continuar
                      </button>
                    </div>
                  )}

                  {/* Step 2: Guest Information */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Información del Huésped
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Apellido
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <div className="relative">
                            <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono
                          </label>
                          <div className="relative">
                            <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Solicitudes Especiales (Opcional)
                        </label>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Ej: Cama adicional, traslado desde aeropuerto, etc."
                        ></textarea>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          onClick={handlePrevStep}
                          className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                          Volver
                        </button>
                        <button
                          onClick={handleNextStep}
                          disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                          className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          Continuar
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Payment */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Confirmación y Pago
                      </h2>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          Métodos de Pago Disponibles
                        </h3>
                        <div className="space-y-3">
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <CreditCard className="text-blue-600 mr-3" size={20} />
                              <span className="font-medium">Pago en el Hotel</span>
                            </div>
                            <p className="text-sm text-gray-600">
                              Puedes pagar al llegar usando efectivo, tarjeta de débito o crédito.
                            </p>
                          </div>
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <Shield className="text-green-600 mr-3" size={20} />
                              <span className="font-medium">WebPay (Transbank)</span>
                            </div>
                            <p className="text-sm text-gray-600">
                              Pago seguro online con tarjetas chilenas. Confirma tu reserva inmediatamente.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-purple-800 mb-2">
                          Políticas de Reserva
                        </h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Cancelación gratuita hasta 24 horas antes del check-in</li>
                          <li>• Check-in: 14:00 hrs - Check-out: 11:00 hrs</li>
                          <li>• Se requiere identificación válida al check-in</li>
                          <li>• Política de no fumar en todas las habitaciones</li>
                        </ul>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          onClick={handlePrevStep}
                          className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                          Volver
                        </button>
                        <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors">
                          Confirmar Reserva
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Resumen de Reserva
                  </h3>
                  
                  {formData.checkIn && formData.checkOut && (
                    <div className="space-y-3 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-in:</span>
                        <span className="font-medium">{new Date(formData.checkIn).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-out:</span>
                        <span className="font-medium">{new Date(formData.checkOut).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Noches:</span>
                        <span className="font-medium">{calculateNights()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Huéspedes:</span>
                        <span className="font-medium">{formData.guests}</span>
                      </div>
                    </div>
                  )}

                  <div className="border-t pt-4 mb-4">
                    <div className="mb-2">
                      <span className="font-medium">{getSelectedRoom()?.name}</span>
                    </div>
                    {calculateNights() > 0 && (
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>${getSelectedRoom()?.price.toLocaleString()} × {calculateNights()} noches</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {calculateNights() > 0 && (
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-purple-600">${calculateTotal().toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Impuestos incluidos
                      </div>
                    </div>
                  )}

                  <div className="mt-6 space-y-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Check size={12} className="text-green-500 mr-1" />
                      <span>Cancelación gratuita</span>
                    </div>
                    <div className="flex items-center">
                      <Check size={12} className="text-green-500 mr-1" />
                      <span>Confirmación inmediata</span>
                    </div>
                    <div className="flex items-center">
                      <Check size={12} className="text-green-500 mr-1" />
                      <span>Mejor precio garantizado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Booking Features */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Reserva Fácil y Segura
            </h2>
            <p className="text-lg text-gray-600">
              Nuestro sistema de reservas está diseñado para tu comodidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Clock className="text-purple-600 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-lg text-gray-800 mb-2">Disponibilidad en Tiempo Real</h3>
              <p className="text-gray-600 text-sm">
                Verifica disponibilidad, selecciona tu habitación y confirma tu reserva en solo unos clics.
              </p>
            </div>
            <div className="text-center">
              <Shield className="text-purple-600 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-lg text-gray-800 mb-2">Pago Seguro</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos WebPay de Transbank para garantizar la seguridad de tus transacciones.
              </p>
            </div>
            <div className="text-center">
              <Check className="text-purple-600 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-lg text-gray-800 mb-2">Confirmación Inmediata</h3>
              <p className="text-gray-600 text-sm">
                Recibe tu confirmación por email al instante y toda la información que necesitas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;