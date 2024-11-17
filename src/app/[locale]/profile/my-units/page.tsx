"use client";
import React, { useState } from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import styles from "../../../../styles/pages/myAccount.module.scss";
import filterIcon from "../../../../assets/images/filterIcon.svg";
import sortIcon from "../../../../assets/images/sortIcon.svg";
import CustomPagination from "@/components/constant/CustomPagination";
import UnitCard from "@/components/ui/UnitCard";
import UnitCardMobile from "@/components/ui/UnitCardMobile";
import IconBox from "@/components/constant/IconBox";
import ProfileLayout from "@/components/layout/ProfileLayout";
import ActiveButton from "@/components/constant/ActiveButton";
import AddIcon from "@mui/icons-material/Add";
import DownloadTheApp from "@/components/ui/DownloadTheApp";
import { useMyUnits } from "@/hooks/useMyUnits";

const imgKey = "https://test.hoodies.fun"; // The imgKey to be prepended to image URLs

const MyUnits = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Fetch user's units data for the current page
  const { data, isLoading, error } = useMyUnits(currentPage);
  
  // Access units and pagination data
  const units = data?.data?.data || []; // Nested data array
  const totalPages = data?.data?.last_page || 1;

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page); // Use the page number from the second argument
  };
    const handleOpenDownloadModal = () => setDownloadModalOpen(true);
  const handleCloseDownloadModal = () => setDownloadModalOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading units</Typography>;

  return (
    <ProfileLayout>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ maxWidth: "922px" }}>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Typography
            className={styles.header}
            sx={{
              fontSize: { xs: "18px", sm: "22px" },
              textAlign: { xs: "center", sm: "left" },
              mt: { xs: 5, sm: 5, md: 0 },
              mb: { xs: 5, sm: 5, md: 0 },
            }}
          >
            My Units
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{
              width: { xs: "90%", sm: "80%", md: "100%" },
              mx: "auto",
            }}
          >
            <IconBox iconSrc={filterIcon} iconAlt="Filter" sx={{ marginRight: 2, height: "42px", width: "42px" }} />
            <IconBox iconSrc={sortIcon} iconAlt="Sort" sx={{ marginRight: 2, height: "42px", width: "42px" }} />
            <ActiveButton
              text=" Add Unit"
              width="295px"
              height="42px"
              fontSize="16px"
              icon={<AddIcon />}
              onClick={handleOpenDownloadModal}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={12}>
          {units.map((unit) =>
            isMobile ? (
              <UnitCardMobile
              key={unit.id}
              imageUrl={`${imgKey}${unit.uploads?.[0]?.path || ""}`} // Prepend imgKey to the image path
              title={unit.compound_Name}
              description={unit.Address}
              price={unit.totalPriceWithCommission}
              status={unit.is_approved}
              tag={"Approved"}
              space={unit.Space}
              bathrooms={unit.Bathrooms_Number}
              rooms={unit.Bedrooms_Number}
              assignedBroker={"Ali Mohammed"}
              addedDate={unit.created_at}
              />
            ) : (
              <UnitCard
                key={unit.id}
                imageUrl={`${imgKey}${unit.uploads?.[0]?.path || ""}`} // Prepend imgKey to the image path
                title={unit.compound_Name}
                description={unit.Address}
                price={unit.totalPriceWithCommission}
                status={unit.is_approved}
                tag={"Approved"}
                space={unit.Space}
                bathrooms={unit.Bathrooms_Number}
                rooms={unit.Bedrooms_Number}
                assignedBroker={"Ali Mohammed"}
                addedDate={unit.created_at}
                unitReference={unit.unit_reference} // Pass unit_reference here

              />
              
            )
          )}
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            width: "100%",
            marginTop: 2,
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              color: "#A2A7AF",
              textAlign: { xs: "center", sm: "left" },
              mb: { xs: 1, sm: 0 },
            }}
          >
            Showing {units.length} of {units.length} units
          </Typography>

          <CustomPagination
            count={totalPages}
            variant="outlined"
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              marginTop: { xs: 1, sm: 0 },
            }}
          />
        </Box>
      </Grid>

      {/* DownloadTheApp Modal */}
      <DownloadTheApp open={downloadModalOpen} handleClose={handleCloseDownloadModal} />
    </ProfileLayout>
  );
};

export default MyUnits;
