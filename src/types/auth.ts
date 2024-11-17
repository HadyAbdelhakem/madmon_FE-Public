export interface LoginData {
    phone_number: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    data: {
      id: number;
      name: string;
      email: string | null;
      phone_number: string;
      photo: string | null;
      is_activated: number;
      phone_verified_at: string;
      verification_way: string;
      expire_at: string | null;
      email_verified_at: string | null;
      is_Admin: number;
      google_id: string | null;
      created_at: string;
      updated_at: string;
    };
  }
  