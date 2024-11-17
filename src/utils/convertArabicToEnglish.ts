// utils/convertArabicToEnglish.ts

/**
 * Convert Arabic numerals (٠١٢٣٤٥٦٧٨٩) to English numerals (0123456789)
 * @param input The string containing Arabic numerals
 * @returns The string with Arabic numerals replaced by English numerals
 */
export const convertArabicToEnglish = (input: string): string => {
    const arabicToEnglishMap: { [key: string]: string } = {
      '٠': '0',
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9'
    };
  
    return input.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (match) => arabicToEnglishMap[match]);
  };
  