import React from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "../../styles/components/ui/unitInfo.module.scss";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

// Define the type for a single unit detail
interface UnitDetail {
  icon: string | StaticImageData;
  title: string;
}

// Define the props type for the UnitInfo component
interface UnitInfoProps {
  unitDetails: UnitDetail[];
}

const UnitInfo: React.FC<UnitInfoProps> = ({ unitDetails }) => {
  // Use the defined props type
  return (
    <Grid container>
      <Grid size={12}>
        <Typography className={styles.title}>Unit&apos;s Info</Typography>
      </Grid>
      <Box className={styles.infoCard}>
        <Grid>
          <Grid container>
            {unitDetails.map((detail, index) => (
              <Grid
                key={index}
                size={{ xs: 2, sm: 4, md: 4 }}
                justifyContent={"space-between"}
              >
                <Grid container>
                  <Grid alignContent={"center"}>
                    <Image
                      alt={`${detail.title} Icon`}
                      className={styles.iconImage}
                      src={detail.icon}
                      width={14}
                      height={14}
                    />
                  </Grid>
                  <Grid alignContent={"center"}>
                    <Typography className={styles.iconTitle}>
                      {detail.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default UnitInfo;
