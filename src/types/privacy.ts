// types/privacy.ts

export interface PrivacyPolicyData {
    id: number;
    title: string;
    description_en: string;
    description_ar: string;
    created_at: string | null;
    updated_at: string | null;
  }
  
  export interface PrivacyPolicyResponse {
    data: PrivacyPolicyData;
    status: number;
    errors: {
      message: string | null;
    };
  }
  