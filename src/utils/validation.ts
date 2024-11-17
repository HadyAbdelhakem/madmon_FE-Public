// utils/validation.ts
interface Country {
  name: string;
  // Add other properties if needed
}

export const validatePhoneNumber = (value: string, country: Country) => {
  if (value.match(/12345/)) {
      return `Invalid value: ${value}, ${country.name}`;
    } else if (value.match(/1234/)) {
      return false; // This means the phone number is invalid
    } else {
      return true; // Valid phone number
    }
  };
  