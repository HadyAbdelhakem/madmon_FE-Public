import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    color: '#0512F5', 
    fontSize: '1rem', // Default font size for desktop
    padding: '6px', // Default padding for desktop
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem', // Smaller font size on mobile
      padding: '4px', // Smaller padding on mobile
    },
    '&:hover': {
      backgroundColor: '#0512F5',
      color: '#F2DB00', 
    },
    '&:focus': {
      backgroundColor: '#0512F5', 
      color: '#F2DB00',
      outline: 'none', 
    },
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    backgroundColor: '#0512F5', 
    color: '#F2DB00', 
    fontWeight: 'bold', // Emphasize selected item
  },
  '& .MuiPaginationItem-ellipsis': {
    color: '#0512F5', 
  },
  // Center pagination on mobile
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

export default CustomPagination;
