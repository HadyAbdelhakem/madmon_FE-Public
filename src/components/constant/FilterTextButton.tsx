import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { SxProps } from '@mui/system';

// Interface for the button's props
interface FilterTextButtonProps {
  text: string; // text to display on the button
  selected?: boolean; // whether the button is selected (active)
  width?: string | number; // 'full' can be passed for full width
  height?: string | number;
  fontSize?: string; // optional font size
  sx?: SxProps; // Accept MUI's sx prop for styling
  onClick?: () => void; // Optional onClick handler
}

// Styled button using MUI's `Button` component and `styled` from MUI system
const StyledButton = styled(Button)<{
  selected?: boolean;
  width?: string | number;
  height?: string | number;
  fontSize?: string;
}>(({ selected, width, height, fontSize }) => ({
  backgroundColor: selected ? 'transparent' : '#F3F4F6', // grey background if not selected
  borderRadius: '7px',
  borderColor: selected ? '#0512F5' : 'transparent', // blue border if selected
  border: `1px solid ${selected ? '#0512F5' : 'transparent'}`, // conditional border color
  textTransform: 'none', // no text capitalization
  color: selected ? '#0512F5' : '#A2A7AF', // blue text if selected, grey text if not
  boxShadow: 'none', // removing the default shadow
  width: width === 'full' ? '100%' : width, // full width option
  height: height || '47px', // default height
  fontSize: fontSize || '16px', // default font size
  fontWeight: 400, // Set font weight to regular (400)
  '&:hover': {
    boxShadow: 'none', // ensure no shadow on hover
  },
}));

// The FilterTextButton component definition
const FilterTextButton: React.FC<FilterTextButtonProps> = ({
  text,
  selected = false, // default is not selected
  width = '107px', // default width
  height = '35px', // default height
  fontSize = '14px', // default font size
  sx, // Accept sx prop for additional styling
  onClick,
  ...props // Forward other props
}) => {
  return (
    <StyledButton
      variant="contained"
      selected={selected}
      width={width}
      height={height}
      fontSize={fontSize}
      sx={sx} // Apply the passed sx prop
      onClick={onClick} // Apply onClick handler
      {...props} // Forward other props to the StyledButton
    >
      {text}
    </StyledButton>
  );
};

export default FilterTextButton;
