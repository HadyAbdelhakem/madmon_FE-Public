import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useTranslations, useLocale } from "next-intl"; // Import useTranslations and useLocale
import styles from "../../styles/components/constant/timerCard.module.scss";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const t = useTranslations("CountdownTimer"); // Use translations from CountdownTimer
  const locale = useLocale(); // Get the current locale
  const isArabic = locale === "ar"; // Check if the current language is Arabic

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const convertToArabicNumbers = (num: number): string => {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num
      .toString()
      .split('')
      .map(digit => arabicDigits[parseInt(digit)])
      .join('');
  };

  const timeUnits: (keyof TimeLeft)[] = ["days", "hours", "minutes", "seconds"];

  return (
    <Box className={styles.timerContainer}>
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit}>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography component="span" className={styles.numberText}>
              {isArabic ? convertToArabicNumbers(timeLeft[unit]) : timeLeft[unit]}
            </Typography>
            <Typography className={styles.numberTitle}>
              {t(unit)} {/* Use the translation for the time unit */}
            </Typography>
          </Box>
          {index < timeUnits.length - 1 && (
            <Typography
              variant="h4"
              className={styles.colonStyle}
              component="span"
            >
              :
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default CountdownTimer;
