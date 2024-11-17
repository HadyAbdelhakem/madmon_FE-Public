"use client";
import React, { useCallback, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../../styles/pages/search.module.scss";
import SearchInput from "@/components/constant/SearchInput";
import ContentLayout from "@/components/layout/ContentLayout";
import LoggedInLayout from "@/components/layout/LoggedInLayout";
import SortButton from "@/components/constant/SortButton";
import ViewButton from "@/components/constant/ViewButton";
import listViewIcon from "../../../assets/images/list-icon.svg";
import gridViewIcon from "../../../assets/images/grid-icon.svg";
import SearchUnitCard from "@/components/ui/SearchUnitCard";
import SearchUnitCardMobile from "@/components/ui/SearchUnitCardMobile"; // Import mobile component
import unitImage from "../../../assets/images/unitImage.png";
import CanNotFind from "@/components/ui/CanNotFind";
import AdvancedFilter from "@/components/ui/AdvancedFilter";
import { useSearchUnits } from "@/hooks/useSearchUnits";
import { Filters } from "@/types/unit";
import distanceIcon from "../../../assets/images/search-unit-distance-icon.svg";
import bedIcon from "../../../assets/images/search-unit-bed-icon.svg";
import bathroomIcon from "../../../assets/images/search-unit-bath-icon.svg";
import NotFoundResult from "@/components/constant/NotFoundResult";

const Search = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect if the screen is mobile
  const [filters, setFilters] = useState<Filters>({});
  const { data: searchResults } = useSearchUnits(filters);

  // Update filters with the selected property type
  const handlePropertyTypeChange = useCallback((propertyType: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      unit_type: propertyType,
    }));
  }, []);

  const handleAreaSearchChange = (value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      area: value,
    }));
  };

  // Handle changes in the compound type filter
  const handleFilterChange = useCallback((filterValues: Partial<Filters>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filterValues,
    }));
  }, []);

  return (
    <ContentLayout>
      <LoggedInLayout>
        <Box className={styles.container}>
          <Grid container alignItems="center" spacing={3}>
            <Grid size={{ xs: 12, md: 12, lg: "auto" }}>
              <SearchInput onSearchChange={handleAreaSearchChange} />
            </Grid>
            <Grid size={{ xs: 6, sm: "auto", md: "auto", lg: "auto" }}>
              <SortButton />
            </Grid>
            <Grid size={{ xs: 3, sm: "auto", md: "auto", lg: "auto" }}>
              <ViewButton backgroundColor="#0000FF" icon={listViewIcon} />
            </Grid>
            <Grid size={{ xs: 3, sm: "auto", md: "auto", lg: "auto" }}>
              <ViewButton
                backgroundColor="#FFFFFF"
                borderColor="#F2F3F4"
                icon={gridViewIcon}
              />
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 3 }} spacing={3}>
            <Grid size={{ xs: 12, md: "auto", lg: "auto" }}>
              {searchResults?.data?.data?.length ? (
                searchResults.data.data.map(
                  (unit) =>
                    unit.is_approved && ( // Only render approved units
                      <Grid key={unit.id}>
                        {isMobile ? (
                          // Render mobile card for small screens
                          <SearchUnitCardMobile
                            id={unit.id} // Ensure ID is passed as a string
                            unit_reference={unit.unit_reference}
                            imageUrl={
                              unit.uploads.length > 0
                                ? `https://test.hoodies.fun${unit.uploads[0].path}`
                                : unitImage
                            }
                            title={unit.compound_Name || "Unnamed Unit"}
                            description={unit.Address || "No address provided"}
                            state={unit.is_approved ? "Available" : "Pending"}
                            tag={unit.sold ? "Sold" : "Available"}
                            assignedBroker={
                              unit.broker_id
                                ? `Broker ID: ${unit.broker_id}`
                                : "Unassigned"
                            }
                            price={
                              unit.price ? unit.price.toLocaleString() : "0"
                            }
                            location={unit.Address || "Unknown Location"}
                            unitType={unit.name || "Unknown Type"}
                            features={[
                              {
                                icon: distanceIcon,
                                value: `${unit.Space || "N/A"} m²`,
                                label: "Area",
                              },
                              {
                                icon: bedIcon,
                                value:
                                  unit.Bedrooms_Number?.toString() || "N/A",
                                label: "Beds",
                              },
                              {
                                icon: bathroomIcon,
                                value:
                                  unit.Bathrooms_Number?.toString() || "N/A",
                                label: "Baths",
                              },
                            ]}
                          />
                        ) : (
                          // Render regular card for larger screens
                          <SearchUnitCard
                            id={unit.id} // Ensure ID is passed as a string
                            unit_reference={unit.unit_reference}
                            imageUrl={
                              unit.uploads.length > 0
                                ? `https://test.hoodies.fun${unit.uploads[0].path}`
                                : unitImage
                            }
                            title={unit.compound_Name || "Unnamed Unit"}
                            description={unit.Address || "No address provided"}
                            state={unit.is_approved ? "Available" : "Pending"}
                            tag={unit.sold ? "Sold" : "Available"}
                            assignedBroker={
                              unit.broker_id
                                ? `Broker ID: ${unit.broker_id}`
                                : "Unassigned"
                            }
                            price={
                              unit.price ? unit.price.toLocaleString() : "0"
                            }
                            location={unit.Address || "Unknown Location"}
                            unitType={unit.name || "Unknown Type"}
                            features={[
                              {
                                icon: distanceIcon,
                                value: `${unit.Space || "N/A"} m²`,
                                label: "Area",
                              },
                              {
                                icon: bedIcon,
                                value:
                                  unit.Bedrooms_Number?.toString() || "N/A",
                                label: "Beds",
                              },
                              {
                                icon: bathroomIcon,
                                value:
                                  unit.Bathrooms_Number?.toString() || "N/A",
                                label: "Baths",
                              },
                            ]}
                          />
                        )}
                      </Grid>
                    )
                )
              ) : (
                <NotFoundResult /> // Render when no data is available
              )}

              <Grid size={{ xs: 12, md: "auto", lg: "auto" }}>
                <CanNotFind />
              </Grid>
            </Grid>
            <Grid>
              <AdvancedFilter
                onPropertyTypeChange={handlePropertyTypeChange}
                onFilterChange={handleFilterChange}
              />{" "}
            </Grid>
          </Grid>
        </Box>
      </LoggedInLayout>
    </ContentLayout>
  );
};

export default Search;
