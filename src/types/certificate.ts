
export interface CertificateData {
  fullName: string;
  email: string;
  phone: string;
  profession: string;
  date?: string;
}

export interface CertificateFormProps {
  onSubmit: (data: CertificateData) => void;
}

export interface CertificateViewerProps {
  certificateData: CertificateData | null;
}
