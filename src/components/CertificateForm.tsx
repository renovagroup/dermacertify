
import React, { useState } from 'react'

const CertificateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: ''
  })
  
  const [countryCode, setCountryCode] = useState('+55')
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      phone: `${countryCode} ${formData.phone}`,
      date: new Date().toLocaleDateString('pt-BR')
    })
  }
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-serif text-[#8a7055] mb-4">Gerar Certificado</h2>
      <p className="text-gray-600 mb-6">
        Preencha seus dados para emitir o certificado de participação no workshop online sobre Camuflagem de Cicatrizes.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Nome Completo <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="text"
              name="fullName"
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md"
              placeholder="Digite nome e sobrenome"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            E-mail <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Telefone</label>
          <div className="flex">
            <div className="w-1/4 mr-2">
              <button 
                type="button"
                className="flex items-center justify-between w-full px-3 py-2 border border-gray-200 rounded-md bg-white"
              >
                <span className="flex items-center">
                  <span className="mr-2">🇧🇷</span>
                  {countryCode}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="w-3/4">
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  name="phone"
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Profissão</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </span>
            <input
              type="text"
              name="profession"
              className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md"
              placeholder="Sua profissão"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <button 
          type="submit"
          className="w-full py-3 bg-[#b49570] hover:bg-[#9e7e5a] text-white rounded-md transition-colors"
        >
          Verificar Participação
        </button>
      </form>
    </div>
  )
}

export default CertificateForm
