import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const ListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  border: `2px solid transparent`,
  borderRadius: '10px',
  backgroundColor: '#F2F3F4',
  position: 'relative',
  overflow: 'hidden',
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
  width: '294px',
  height: '42px',

  '&:hover': {
    backgroundColor: 'rgba(5, 18, 245, 0.05)',
    borderColor: '#0512F5',
    '& .circleIcon': {
      transform: 'translateX(0)', // Move into place
      opacity: 1,
    },
    '& .textContainer': {
      marginLeft: '24px',
    },
  },

  '& .circleIcon': {
    transform: 'translateX(-24px)', // Start off-screen to the left
    opacity: 0,
    transition: 'transform 0.3s ease, opacity 0.3s ease',
  },

  '& .textContainer': {
    marginLeft: '0',
    transition: 'margin-left 0.3s ease',
  },
}));

interface ListItemData {
  label: string;
  index: number;
}

const SideList: React.FC = () => {
  const t = useTranslations('common');
  const router = useRouter();

  const items: ListItemData[] = [
    { label: t('myAccount'), index: 0 },
    { label: t('myUnits'), index: 1 },
    { label: t('myReservations'), index: 2 },
  ];

  const handleSelect = (index: number) => {
    switch (index) {
      case 0:
        router.push(`/profile/my-account`);
        break;
      case 1:
        router.push(`/profile/my-units`);
        break;
      case 2:
        router.push(`/profile/my-reservations`);
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      {items.map((item) => (
        <Box key={item.index} sx={{ marginTop: '8px' }}>
          <ListItem onClick={() => handleSelect(item.index)}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <CircleIcon
                className="circleIcon"
                sx={{
                  color: '#0512F5',
                  fontSize: 10,
                  position: 'absolute',
                  left: 0,
                  transform: 'translateX(-24px)', // Start off-screen to the left
                  opacity: 0,
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                }}
              />
              <Box
                className="textContainer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: '0',
                  transition: 'margin-left 0.3s ease',
                }}
              >
                <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#0512F5' }}>
                  {item.label}
                </Typography>
              </Box>
            </Box>
          </ListItem>
        </Box>
      ))}
    </Box>
  );
};

export default SideList;
