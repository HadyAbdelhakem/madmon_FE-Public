import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/components/ui/unitfeture.module.scss";
import wifi from "../../assets/images/features/wifi.svg";
import EnterCom from "../../assets/images/features/Entercome.svg";
import Security from "../../assets/images/features/Security.svg";
import Swimming from "../../assets/images/features/Swimming-Pool.svg";
import Garden from "../../assets/images/features/graden2.svg";
import Landline from "../../assets/images/features/Landline.svg";
import AirConditioner from "../../assets/images/features/Air-conditioner.svg";
import PetsAllowed from "../../assets/images/features/Pets-Allowed.svg";
import Terrace from "../../assets/images/features/Terrace.svg";
import Gym from "../../assets/images/features/gym.svg";
import Roof from "../../assets/images/features/Roof.svg";
import Elevator from "../../assets/images/features/Elevator.svg";
import Parking from "../../assets/images/features/Parking.svg";
import NaturalGas from "../../assets/images/features/Natura- Gas.svg";

// Define the type for the features prop
interface UnitFeatureProps {
  features: {
    id: number;
    name_en: string;
    name_ar: string;
  }[];
}

const UnitFeature: React.FC<UnitFeatureProps> = ({ features }) => {
  // Define the array of unit features with icons and titles
  const unitFeatures = [
    { icon: wifi, title: "Wifi" },
    { icon: EnterCom, title: "Entercom" },
    { icon: Security, title: "Security" },
    { icon: Swimming, title: "Swimming Pool" },
    { icon: Garden, title: "Garden" },
    { icon: Landline, title: "Landline" },
    { icon: AirConditioner, title: "Air Conditioner" },
    { icon: PetsAllowed, title: "Pets Allowed" },
    { icon: Terrace, title: "Terrace/Balcony" },
    { icon: Gym, title: "Gym" },
    { icon: Roof, title: "Roof" },
    { icon: Elevator, title: "Elevator" },
    { icon: Parking, title: "Parking" },
    { icon: NaturalGas, title: "Natural Gas" },
  ];

  // Map over features and find matching unit features by title
  const displayedFeatures = features
    .map((feature) => {
      const matchingFeature = unitFeatures.find(
        (uf) => uf.title === feature.name_en
      );
      return matchingFeature
        ? { icon: matchingFeature.icon, title: feature.name_en }
        : null;
    })
    .filter((feature) => feature !== null);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={styles.title}>Features</Typography>
      </Grid>
      <Box className={styles.infoCard}>
        <Grid container spacing={2}>
          {displayedFeatures.map((feature, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sm={4}
              md={4}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Box display="flex" alignItems="center">
                <Image
                  alt={`${feature?.title} Icon`}
                  className={styles.iconImage}
                  src={feature?.icon}
                />
                <Typography className={styles.iconTitle}>
                  {feature?.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default UnitFeature;
