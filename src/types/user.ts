// types/user.ts

// Type for the user registration request
// Type for the user registration request
export interface RegisterRequest {
  email: string | null; // Allow `null` or `string` here
  name: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  verification_way: string;
}


// Type for the user registration response
export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
}

export interface VerifyRequest {
  verification_code: string;
  phone_number: string;
}

export interface VerifyResponse {
  data: {
    id: number;
    name: string;
    email: string | null;
    phone_number: string;
    address: string | null;
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
  message: string;
  status: number;
  token: string;
  errors: string;
}


//Send Otp request 
export interface SendOTPRequest {
  phone_number: string; // Use phone_number as the key
}


export interface SendOTPResponse {
  message: string;
  status: number;
}
//Edit Profile 
export interface EditProfileRequest {
  name: string;
  email: string;
  address: string;
  photo?: File | null; // The photo is optional, as it may not always be provided
}

export interface EditProfileResponse {
  message: string;
  status: number;
}

// Request type for editing the password
export interface EditPasswordRequest {
  phone_number: string;
  password: string;
  password_confirmation: string;
}

// Response type for editing the password
export interface EditPasswordResponse {
  message: string;
  status: number;
}