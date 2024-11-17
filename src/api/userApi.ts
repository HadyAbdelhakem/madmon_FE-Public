// api/user.ts
import api from "@/utils/apiConfig";
import Cookies from "js-cookie"; // Import Cookies to retrieve the token

import { EditPasswordRequest, EditPasswordResponse, EditProfileRequest, EditProfileResponse, RegisterRequest, RegisterResponse, SendOTPRequest, SendOTPResponse, VerifyRequest, VerifyResponse } from "@/types/user";
import { getAccessToken } from "@/utils/getAccessToken";
import { ProfileResponse } from "@/types/profile";

export const registerUser = async (userData: RegisterRequest): Promise<RegisterResponse> => {
  const response = await api.post('user/register', userData);
  return response.data;
};

export const verifyUser = async (verifyData: VerifyRequest): Promise<VerifyResponse> => {
  const response = await api.post('user/verify', verifyData);
  console.log(response.data);
  return response.data;
};

export const sendOTPCode = async (otpData: SendOTPRequest): Promise<SendOTPResponse> => {
  const response = await api.post('user/SendOTP-code', otpData);
  console.log(response.data);
  return response.data;  // API response will contain message and status

};
// api/userApi.ts


export const editProfile = async (profileData: EditProfileRequest): Promise<EditProfileResponse> => {
  const formData = new FormData();

  // Append form data fields
  formData.append("name", profileData.name);
  formData.append("email", profileData.email);
  formData.append("address", profileData.address);

  // Append photo if it exists
  if (profileData.photo) {
    formData.append("photo", profileData.photo);
  }

  // Retrieve the token from cookies
  const token = Cookies.get("access_token"); // Adjust based on how your token is stored

  const response = await api.post("/profile/edit", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
    },
  });

  return response.data;
};

// Fetch Profile API call
export const fetchProfile = async (): Promise<ProfileResponse> => {
  const token = getAccessToken(); // Retrieve token from cookies

  if (!token) {
    throw new Error("No access token found");
  }

  try {
    const response = await api.get<ProfileResponse>("/profile", {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token in the Authorization header
      },
    });

    return response.data; // Return the profile data with proper typing
  } catch (error) {
    throw error; // Handle error and let React Query's `onError` handle it
  }
};
// API call to edit the password
export const editPassword = async (passwordData: EditPasswordRequest): Promise<EditPasswordResponse> => {
  const formData = new FormData();
  
  // Append form data fields for phone_number, password, and password_confirmation
  formData.append("phone_number", passwordData.phone_number);
  formData.append("password", passwordData.password);
  formData.append("password_confirmation", passwordData.password_confirmation);

  // Retrieve the token from cookies if required for the request (optional depending on the API authentication method)
  const token = Cookies.get("access_token"); 

  // Send the POST request to update the password
  const response = await api.post("/profile/update-password", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`, // Include token in header if needed
    },
  });

  return response.data; // Return the response data (usually a message and status)
};