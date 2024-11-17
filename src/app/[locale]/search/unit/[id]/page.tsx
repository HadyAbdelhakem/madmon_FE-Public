"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Import useParams
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import LoggedInLayout from "@/components/layout/LoggedInLayout";
import UnitInfo from "@/components/ui/UnitInfo";
import BrokerInfoCard from "@/components/ui/BrokerInfoCard";
import MiniPriceCard from "@/components/ui/MiniPriceCard";
import NotesCard from "@/components/ui/NotesCard";
import CarouselImages from "@/components/constant/CarouselImages";
import UnitFeature from "@/components/ui/UnitFeature";
import UnitDocument from "@/components/ui/UnitDocument";
import locationIcon from "../../../../../assets/images/features/location.svg";
import distanceIcon from "../../../../../assets/images/features/distance.svg";
import bathRoomIcon from "../../../../../assets/images/features/bathroom.svg";
import bedIcon from "../../../../../assets/images/features/bed.svg";
import finishedIcon from "../../../../../assets/images/features/finish.svg";
import stairsIcon from "../../../../../assets/images/features/stairs.svg";
import gardenIcon from "../../../../../assets/images/features/garden.svg";
import { useUnitDetails } from "@/hooks/useUnitDetails";
import CarouselImagesMobile from "@/components/constant/CarouselImagesMobile";
import { useMediaQuery, useTheme } from "@mui/material";
import UnitTitleDetails from "@/components/ui/UnitTitleDetails";
import MainButton from "@/components/constant/MainButton";
import CustomButton from "@/components/constant/CustomButton";

const UnitDetails = () => {
  const { id } = useParams() as { id: string };
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setIsScrollable] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { data: unitData, isLoading, error } = useUnitDetails(id as string); // Pass unit_reference to hook
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const unitDetails = [
    { icon: locationIcon, title: unitData?.data.Address || "N/A" },
    { icon: distanceIcon, title: `${unitData?.data.Space || 0} m` },
    { icon: bedIcon, title: `${unitData?.data.Bedrooms_Number || 0} Rooms` },
    {
      icon: bathRoomIcon,
      title: `${unitData?.data.Bathrooms_Number || 0} Bathroom`,
    },
    { icon: stairsIcon, title: `Floor ${unitData?.data.floor || "N/A"}` },
    { icon: finishedIcon, title: unitData?.data.Finishing || "N/A" },
    { icon: gardenIcon, title: `${unitData?.data.garden_space || 0} m` },
  ];

  const handleReserveButton = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event from bubbling up

    console.log("reserve");
    router.push("/reserve");
  };
  const handleRequestCall = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event from bubbling up

    router.push(`/request-call/${unitData?.data.id}`);
  };
  // Define imgKey for image URLs
  const imgKey = "https://test.hoodies.fun";

  // Call useEffect at the top to avoid conditional usage
  useEffect(() => {
    if (contentRef.current) {
      setIsScrollable(contentRef.current.scrollHeight > 669);
    }
  }, []);

  // Early return for loading and error states after hooks
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading unit details: {error.message}</div>;

  console.log(unitData?.data?.uploads, " unitData?.data?.uploads");

  // Construct image URLs for CarouselImages
  const imageUrls =
    unitData?.data?.uploads?.map((upload) => `${imgKey}${upload.path}`) || [];

  //calc Down Payment
  const downPayment =
    Number(unitData?.data.paid_so_far ?? 0) +
    Number(unitData?.data.price_over ?? 0) +
    Number(unitData?.data.commission ?? 0);

  // Prepare data to pass to UnitTitleDetails component
  const unitTitleDetailsData = {
    title: unitData?.data?.name || "Unknown", // Title of the unit
    status: unitData?.data?.is_approved === 1 ? "Paid" : "Pending", // Adjust if approval status requires different logic
    price: unitData?.data?.price?.toLocaleString() || "0", // Format price with commas
    currency: "EGP", // Currency symbol
    location: unitData?.data?.Address || "Unknown", // Location of the unit
    addedDate: unitData?.data?.created_at
      ? new Date(unitData.data.created_at).toLocaleDateString()
      : "N/A", // Format date
  };

  return (
    <LoggedInLayout>
      <Grid container>
        {/* first col */}
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7 }}>
          {isMobile ? (
            <CarouselImagesMobile images={imageUrls} />
          ) : (
            <CarouselImages images={imageUrls} />
          )}
        </Grid>

        {/* second col with scrollable content */}
        <Grid size={{ xs: 12, sm: 12, md: "grow", lg: "grow" }}>
          <Box
            position="relative"
            maxHeight="669px"
            overflow="auto"
            ref={contentRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              "&::-webkit-scrollbar": {
                width: 0, // Hide scrollbar by default
              },
              "&:hover::-webkit-scrollbar": {
                width: "8px", // Show scrollbar on hover
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#aaa",
                borderRadius: "8px",
              },
            }}
          >
            {/* Scrollable Content */}
            <Grid container spacing={3} p={2} flex="1">
              <Grid size={12}>
                {/* Pass dynamic data to UnitTitleDetails */}
                <UnitTitleDetails {...unitTitleDetailsData} />
              </Grid>
              <Grid size={12}>
                <UnitInfo unitDetails={unitDetails} />
              </Grid>
              <Grid size={12}>
                <BrokerInfoCard />
              </Grid>
              {unitData?.data.payment_way === "cash" ? (
                // Render only the total price if payment way is cash
                <Grid
                  size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  display="flex"
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  }}
                >
                  <MiniPriceCard
                    header="Total Price"
                    value={unitData?.data.totalPriceWithCommission}
                    unit="EGP"
                  />
                </Grid>
              ) : (
                // Render all details if payment way is not cash
                <>
                  <Grid
                    size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                    display="flex"
                    justifyContent={{
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    }}
                  >
                    <MiniPriceCard
                      header="Total Price"
                      value={unitData?.data.totalPriceWithCommission}
                      unit="EGP"
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                    display="flex"
                    justifyContent={{
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    }}
                  >
                    <MiniPriceCard
                      header="Down Payment"
                      value={downPayment}
                      unit="EGP"
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                    display="flex"
                    justifyContent={{
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    }}
                  >
                    <MiniPriceCard
                      header="Remaining Installments"
                      value={unitData?.data.paid_so_far}
                      unit="EGP"
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                    display="flex"
                    justifyContent={{
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    }}
                  >
                    <MiniPriceCard
                      header="Duration of Remaining Installments"
                      value={unitData?.data.last_installment_date}
                      unit="Days"
                    />
                  </Grid>
                </>
              )}

              <Grid size={12}>
                <UnitFeature features={unitData?.data.features || []} />
              </Grid>
              <Grid size={12}>
                <UnitDocument />
              </Grid>
              {unitData?.data.note && (
                <Grid size={12}>
                  <NotesCard notesText={unitData?.data.note} />
                </Grid>
              )}
            </Grid>

            {/* Top Blur Overlay */}
            <Box
              position="sticky"
              bottom="60px"
              left={0}
              right={0}
              height="30px"
              zIndex={2}
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(242, 243, 244, 0) 0%, rgba(242, 243, 244, 1) 100%)",
              }}
            />

            {/* Button Layer at the Bottom */}
            <Box
              position="sticky"
              bottom={0}
              zIndex={1}
              p={2}
              display="flex"
              justifyContent="center"
              bgcolor="rgba(255, 255, 255, 0.9)"
              sx={{
                gap: "8px",
              }}
            >
              <MainButton
                text="Reserve Unit"
                width="295px"
                height="42px"
                fontSize="16px"
                onClick={handleReserveButton}
                sx={{ color: "#F2DB00", borderRadius: "10px" }}
              />

              <CustomButton
                text="Request a Call"
                width="190px"
                height="42px"
                fontSize="16px"
                sx={{ borderRadius: "10px" }}
                onClick={handleRequestCall} // Attach the onClick handler
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </LoggedInLayout>
  );
};

export default UnitDetails;
