import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import styles from "../../styles/components/constant/itemPriceDetails.module.scss";

const ItemPriceDetails: React.FC = () => {
  // Example data (can be passed as props if needed)
  const data = [
    { label: "Selling Price", value: "13.500.000" },
    { label: "Down Payment", value: "930.500" },
    { label: "Commission", value: "330.000" },
  ];

  const totalPrice = "12.569.500";

  return (
    <TableContainer
      className={styles.tableContainer}
      component={Paper}
      sx={{
        borderRadius: "20px",
        borderLeft: "0.5px solid rgba(102, 102, 255, 0.5)", // Left border
        borderRight: "0.5px solid rgba(102, 102, 255, 0.5)", // Right border
        borderBottom: "0.5px solid rgba(102, 102, 255, 0.5)", // Bottom border
        width: "505px",
        overflow: "hidden",
        backgroundColor: "#F2F3F4",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)", // Applying the shadow from the screenshot
      }}
    >
      {/* Custom Box acting as a header */}
      <Box className={styles.tableHeader}>
        <Typography className={styles.headerText}>Item</Typography>
        <Typography className={styles.headerText}>Price</Typography>
      </Box>

      <Table sx={{ minWidth: 350 }}>
        {/* Table Body */}
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell sx={{ border: "none" }}>
                <Typography className={styles.itemLabel}>
                  {item.label}
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ border: "none" }}>
                <Typography className={styles.itemValue}>
                  {item.value}
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      marginLeft: "4px", // Add some space between value and currency
                    }}
                  >
                    EGP
                  </span>
                </Typography>
              </TableCell>
            </TableRow>
          ))}

          {/* Total */}
          <TableRow>
            <TableCell colSpan={2} sx={{ border: "none" }}>
              <Box
                sx={{
                  borderBottom: "0.5px dashed rgba(102, 102, 255, 0.5)",
                  my: 1,
                }}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography className={styles.total}>Total</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography className={styles.totalPrice}>
                {totalPrice}
                <span
                  style={{
                    fontSize: "12px",
                    color: "#F20000",
                    marginLeft: "4px", // Add some space between value and currency
                  }}
                >
                  EGP
                </span>
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemPriceDetails;
