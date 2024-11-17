// utils/statusUtils.ts

export const getStatusLabel = (status: number): { label: string; color: string } => {
    if (status === 8) {
      return { label: "Approved", color: "#02AE36" };
    } else if ([0, 3, 4, 11, 5, 6, 12].includes(status)) {
      return { label: "Pending", color: "#6666FF" };
    } else if (status === 6) {
      return { label: "Rejected", color: "#F20000" };
    } else {
      return { label: "Unknown", color: "#999999" }; // Default case for unknown statuses
    }
  };
  