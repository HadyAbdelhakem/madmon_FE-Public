// Define the structure of the profile data
export interface ProfileData {
    id: number;
    name: string;
    email: string | null;
    phone_number: string;
    address: string | null;
    photo: string | null;
    is_activated: number;
    phone_verified_at: string | null;
    verification_way: string;
    expire_at: string | null;
    email_verified_at: string | null;
    is_Admin: number;
    google_id: string | null;
    created_at: string;
    updated_at: string;
  }
  
  
  // Define the structure of the profile response
  export interface ProfileResponse {
    data: ProfileData;
    status: number;
    errors: {
      message: string | null;
    };
  }
  