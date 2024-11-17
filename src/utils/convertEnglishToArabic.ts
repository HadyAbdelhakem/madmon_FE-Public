/**
 * Convert English numerals (0123456789) to Arabic numerals (٠١٢٣٤٥٦٧٨٩)
 * @param input The string containing English numerals
 * @returns The string with English numerals replaced by Arabic numerals
 */
export const convertEnglishToArabic = (input: string): string => {
    const englishToArabicMap: { [key: string]: string } = {
      '0': '٠',
      '1': '١',
      '2': '٢',
      '3': '٣',
      '4': '٤',
      '5': '٥',
      '6': '٦',
      '7': '٧',
      '8': '٨',
      '9': '٩',
    };
  
    return input.replace(/[0-9]/g, (match) => englishToArabicMap[match]);
  };
  