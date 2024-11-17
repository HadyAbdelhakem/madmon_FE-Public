"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import ContentLayout from "@/components/layout/ContentLayout";
import LoggedInLayout from "@/components/layout/LoggedInLayout";
import RequestCallForm from "@/components/forms/RequestCallForm";
import { useParams } from "next/navigation"; // Import useParams to get the id from the URL

const RequestCall = () => {
  const params = useParams();
  const id = params?.id as string; // Ensure `id` is a string

  return (
    <ContentLayout>
      <LoggedInLayout>
        <Grid container>
          <Grid size={12} >
            <RequestCallForm unitId={id} /> {/* Pass the id as unitId prop */}
          </Grid>
        </Grid>
      </LoggedInLayout>
    </ContentLayout>
  );
};

export default RequestCall;
