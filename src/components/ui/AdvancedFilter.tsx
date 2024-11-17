import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/components/ui/advancedFilter.module.scss";
import { Box, debounce } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FilterTextButton from "../constant/FilterTextButton";
import FilterHeader from "../constant/FilterHeader";
import PropertyTypeFilter from "./PropertyTypeFilter";
import CustomDivider from "../constant/CustomDivider";
import CustomFilterCheckbox from "../constant/CustomFilterCheckbox";
import BedroomFilterCarousel from "./BedroomFilterCarousel";
import BathroomFilterCarousel from "./BathroomFilterCarousel";
import FloorFilterCarousel from "./FloorFilterCarousel";
import FinishingFilterCarousel from "./FinishingFilterCarousel";
import RangeFilterWithInput from "./RangeFilterWithInput";
import BrokerFilter from "./BrokerFilter";
import { Filters } from "@/types/unit";

interface AdvancedFilterProps {
  onPropertyTypeChange: (propertyType: string) => void;
  onFilterChange: (filters: Partial<Filters>) => void;
}

const AdvancedFilter: React.FC<AdvancedFilterProps> = ({ onPropertyTypeChange, onFilterChange }) => {
  const [selectedButton, setSelectedButton] = useState<string>("residential");
  const [outsideChecked, setOutsideChecked] = useState(false);
  const [insideChecked, setInsideChecked] = useState(false);

  const handleBedroomSelect = (bedroom: number | string) => {
    debouncedFilterChange({ Bedrooms_Number: bedroom.toString() });
  };

  const handleBathroomSelect = (bathroom: number | string) => {
    debouncedFilterChange({ Bathrooms_Number: bathroom.toString() });
  };

  const handleFloorSelect = (floor: number | string) => {
    debouncedFilterChange({ floor: floor.toString() });
  };

  const handleFinishingSelect = (finishing: string) => {
    debouncedFilterChange({ Finishing: finishing });
  };

  const handlePriceRangeChange = (total_Price_from: number, total_Price_to: number) => {
    onFilterChange({ total_Price_from, total_Price_to });
  };

  const handleCompoundTypeChange = () => {
    const compoundType = outsideChecked ? 0 : insideChecked ? 1 : null;
    debouncedFilterChange({ compound_type: compoundType });
  };

  // Use debounce to limit calls to onFilterChange
  const debouncedFilterChange = useCallback(
    debounce((filterValues: Partial<Filters>) => {
      onFilterChange(filterValues);
    }, 300),
    [onFilterChange]
  );

  useEffect(() => {
    handleCompoundTypeChange();
  }, [outsideChecked, insideChecked]);

  return (
    <Box className={styles.mainContainer}>
      <Grid container spacing={1}>
        <Grid size={12} display="flex" justifyContent="center">
          <FilterHeader text="Property Type" />
        </Grid>
        <Grid size={5} display="flex" justifyContent="center">
          <FilterTextButton
            text="Residential"
            selected={selectedButton === "residential"}
            onClick={() => setSelectedButton("residential")}
          />
        </Grid>
        <Grid size={5} display="flex" justifyContent="center">
          <FilterTextButton
            text="Commercial"
            selected={selectedButton === "commercial"}
            onClick={() => setSelectedButton("commercial")}
          />
        </Grid>

        <PropertyTypeFilter onPropertyTypeChange={onPropertyTypeChange} selectedCategory={selectedButton} />

        <CustomDivider />

        <Grid size={12}>
          <CustomFilterCheckbox
            label="Outside a Compound"
            checked={outsideChecked}
            onChange={(checked) => {
              setOutsideChecked(checked);
              setInsideChecked(!checked); // Uncheck "Inside a Compound" when "Outside" is checked
            }}
          />
        </Grid>

        <Grid size={12}>
          <CustomFilterCheckbox
            label="Inside a Compound"
            checked={insideChecked}
            onChange={(checked) => {
              setInsideChecked(checked);
              setOutsideChecked(!checked); // Uncheck "Outside a Compound" when "Inside" is checked
            }}
          />
        </Grid>

        <CustomDivider />

        <Grid size={12}>
          <FilterHeader text="Bedrooms" />
        </Grid>

        <BedroomFilterCarousel onBedroomSelect={handleBedroomSelect} /> 
        <CustomDivider />
        <Grid size={12}>
          <FilterHeader text="Bathrooms" />
        </Grid>
        <BathroomFilterCarousel onBathroomSelect={handleBathroomSelect} />
        <CustomDivider />
        <Grid size={12}>
          <FilterHeader text="Floor" />
        </Grid>
        <FloorFilterCarousel onFloorSelect={handleFloorSelect} />
        <CustomDivider />
        <Grid size={12}>
          <FilterHeader text="Finishing" />
        </Grid>
        <FinishingFilterCarousel onFinishingSelect={handleFinishingSelect} />
        <CustomDivider />
        <Grid size={12}>
          <FilterHeader text="Payment" />
        </Grid>
        <RangeFilterWithInput
        title="Total Price"
        rangeType="totalPrice"
        onRangeChange={handlePriceRangeChange}
      />
      <RangeFilterWithInput
        title="Monthly Installments"
        rangeType="monthlyInstallments"
        onRangeChange={handlePriceRangeChange}
      />
        <Grid size={12}>
          <FilterHeader text="Broker" />
        </Grid>
        <Grid size={12}>
          <BrokerFilter />{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdvancedFilter;
