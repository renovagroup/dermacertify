
import React, { useState } from 'react'
import CertificateForm from './components/CertificateForm'
import CertificateViewer from './components/CertificateViewer'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [certificateData, setCertificateData] = useState(null)

  const handleSubmitForm = (data) => {
    setCertificateData(data)
  }

  return (
    <div className="min-h-screen bg-[#fcf9f5] flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center py-8 px-4">
        <div className="text-center mb-8">
          <span className="inline-block py-2 px-6 bg-[#f5efe8] text-[#8a7055] rounded-full text-sm">
            Certificado de Participação
          </span>
        </div>
        
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <CertificateForm onSubmit={handleSubmitForm} />
          </div>
          <div className="w-full md:w-1/2">
            <CertificateViewer certificateData={certificateData} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
