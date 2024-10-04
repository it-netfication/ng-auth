export interface IMfaConfiguration {
  secrets?: string[];
  secretKey: string;
  isConfigured: boolean;
  qrImageData?: string;
}
