import React, { useState } from "react";
import { Box, ImageList, ImageListItem, IconButton, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/components/constant/ImageGallery.module.scss";

// Image imports
import unit from "../../assets/images/unit1.png";
import unit2 from "../../assets/images/unit2.png";
import unit3 from "../../assets/images/unit3.png";

type ImageType = {
  id: number;
  src: string | StaticImageData;
  alt: string;
};

const images: ImageType[] = [
  { id: 1, src: unit, alt: "Image 1" },
  { id: 2, src: unit2, alt: "Image 2" },
  { id: 3, src: unit3, alt: "Image 3" },
  // Additional images...
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].src);

  const handleThumbnailClick = (imageSrc: string | StaticImageData) => {
    setSelectedImage(imageSrc);
  };

  return (
    <Grid container mt={20} spacing={2}>
      {/* Selected Image */}
      <Grid item xs={10} display="flex" justifyContent="center" alignItems="center">
        <Box className={styles.selectedImageBox}>
          <Image
            src={selectedImage}
            alt="Selected Image"
            width={500}
            height={500}
            className={styles.selectedImage}
          />
        </Box>
      </Grid>

      {/* Thumbnail Image List */}
      <Grid item xs={2} display="flex" flexDirection="column" alignItems="center">
        <ImageList
          cols={1}
          style={{
            height: "300px",
            overflowY: "auto",
          }}
          className={styles.hideScrollbar}
        >
          {images.map((image) => (
            <ImageListItem key={image.id}>
              <IconButton
                onClick={() => handleThumbnailClick(image.src)}
                style={{
                  padding: 0,
                  width: "85px",
                  height: "85px",
                }}
              >
                <Image
                  className={`${styles.imageItem} ${
                    selectedImage === image.src ? styles.selectedImage : ""
                  }`}
                  src={image.src}
                  alt={image.alt}
                  width={85}
                  height={85}
                />
              </IconButton>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default ImageGallery;
