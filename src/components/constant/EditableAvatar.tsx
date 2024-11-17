// EditableAvatar.tsx

import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Box } from "@mui/material";
import editIcon from "../../assets/images/light-edit.png";
import Image from "next/image";
import avatar from "../../assets/images/person.jpg";

interface EditableAvatarProps {
  photo?: string | null;
  onImageChange?: (imageFile: File | null) => void;
}

const imgKey = "https://test.hoodies.fun"; // The imgKey to be appended before the photo URL

const EditableAvatar: React.FC<EditableAvatarProps> = ({ photo, onImageChange }) => {
  const [image, setImage] = useState<string | null>(photo ? `${imgKey}${photo}` : null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Preview image
        if (onImageChange) {
          onImageChange(file); // Pass the file up to EditProfileCard
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setImage(photo ? `${imgKey}${photo}` : null); // Prepend imgKey to photo URL
  }, [photo]);

  return (
    <Box position="relative" sx={{ display: "inline-block" }}>
      <input
        accept="image/*"
        id="avatar-upload"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="avatar-upload">
        <Avatar
          alt="User Avatar"
          src={image || avatar.src} // Show user image or fallback to default avatar
          sx={{
            width: { xs: 60, sm: 85 },
            height: { xs: 60, sm: 85 },
            border: "5px solid #0512f5",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        />
        {/* Gray overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgcolor="rgba(0, 0, 0, 0.2)"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton component="span" sx={{ p: 0 }}>
            <Image alt="Edit Icon" src={editIcon} width={20} height={20} />
          </IconButton>
        </Box>
      </label>
    </Box>
  );
};

export default EditableAvatar;
