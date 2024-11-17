import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import styles from "../../styles/components/ui/unitDocument.module.scss";
import fileIcon from "../../assets/images/file-icon.svg";
import photoIcon from "../../assets/images/photo-icon.svg";

// Define the type for a single document
interface Document {
  icon: string;
  title: string;
}

// Define the component
const UnitDocument: React.FC = () => {
  // Sample data for available and unavailable documents
  const availableDocuments: Document[] = [
    { icon: fileIcon, title: "Lorem Ipsum" },
    { icon: fileIcon, title: "Lorem Ipsum" },
    { icon: fileIcon, title: "Lorem Ipsum" },
    { icon: fileIcon, title: "Lorem Ipsum" },
    { icon: fileIcon, title: "Lorem Ipsum" },
 
  ];

  const unavailableDocuments: Document[] = [
    { icon: photoIcon, title: "Lorem Ipsum" },
    { icon: photoIcon, title: "Lorem Ipsum" },
    { icon: photoIcon, title: "Lorem Ipsum" },
    { icon: photoIcon, title: "Lorem Ipsum" },
    { icon: photoIcon, title: "Lorem Ipsum" },
 
  ];

  return (
    <Grid container>
      <Grid size={12}>
        <Typography className={styles.title}>Documents</Typography>
      </Grid>
      <Box className={styles.documentCard} p={3} borderRadius="8px" bgcolor="#f9fafc">
        <Grid container>
          {/* Available Documents Section */}
          <Grid size={5}>
            <Typography className={styles.availableText}>
              Available Documents
            </Typography>
            {availableDocuments.map((doc, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Image src={doc.icon} alt="file Icon" className={styles.iconImage} width={20} height={20} />
                <Typography className={styles.iconTitle} ml={2}>
                  {doc.title}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Divider */}
          <Grid size={1} display="flex" justifyContent="center">
            <Divider orientation="vertical" flexItem />
          </Grid>

          {/* Unavailable Documents Section */}
          <Grid size={6}>
            <Typography className={styles.unavailableText}>
              Unavailable Documents
            </Typography>
            {unavailableDocuments.map((doc, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Image src={doc.icon} alt="photo Icon" className={styles.iconImage} width={20} height={20} />
                <Typography className={styles.iconTitle} ml={2}>
                  {doc.title}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default UnitDocument;
