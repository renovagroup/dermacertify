import { CertificateViewerProps } from '../types/certificate'

const CertificateViewer = ({ certificateData }: CertificateViewerProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col items-center justify-center">
      {certificateData ? (
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/1adf342a-bd4c-4bc2-9eae-a7f0e63b94c2.png" 
              alt="Certificado" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h2 className="text-2xl font-serif text-[#8a7055] mb-4">Visualização do Certificado</h2>
          <div className="p-6 border border-[#e5d9c9] rounded-lg mb-4">
            <h3 className="text-xl font-serif mb-2">Certificado de Participação</h3>
            <p className="text-gray-700 mb-1">Nome: <span className="font-medium">{certificateData.fullName}</span></p>
            <p className="text-gray-700 mb-1">E-mail: <span className="font-medium">{certificateData.email}</span></p>
            <p className="text-gray-700 mb-1">Telefone: <span className="font-medium">{certificateData.phone}</span></p>
            <p className="text-gray-700 mb-1">Profissão: <span className="font-medium">{certificateData.profession}</span></p>
            <p className="text-gray-700 mt-4">Certificamos que o profissional participou do workshop online sobre Camuflagem de Cicatrizes realizado em {certificateData.date}.</p>
          </div>
          <button className="py-2 px-4 bg-[#f5efe8] text-[#8a7055] rounded-md hover:bg-[#e5d9c9] transition-colors">
            Baixar Certificado
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/1adf342a-bd4c-4bc2-9eae-a7f0e63b94c2.png" 
              alt="Certificado" 
              className="w-20 h-20 object-contain opacity-70"
            />
          </div>
          <h2 className="text-2xl font-serif text-[#8a7055] mb-4">Visualização do Certificado</h2>
          <p className="text-gray-500">
            Preencha o formulário, verifique sua participação e gere seu certificado para visualizá-lo aqui.
          </p>
        </div>
      )}
    </div>
  )
}

export default CertificateViewer
