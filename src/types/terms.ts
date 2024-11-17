// types/terms.ts

export interface TermsData {
    id: number;
    title: string;
    description_en: string;
    description_ar: string;
    created_at: string | null;
    updated_at: string | null;
  }
  
  export interface TermsResponse {
    data: TermsData;
    status: number;
    errors: {
      message: string | null;
    };
  }
  