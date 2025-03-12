
import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">DermaCertify</h1>
        <p className="text-gray-600 text-center text-lg mb-6">
          Bem-vindo à DermaCertify. Sua plataforma de certificação em dermatologia.
        </p>
        <div className="flex justify-center">
          <a 
            href="https://github.com/renovagroup/dermacertify" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Repositório GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
