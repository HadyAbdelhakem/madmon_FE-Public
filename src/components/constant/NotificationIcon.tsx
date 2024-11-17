import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from '../../styles/components/constant/NotificationIcon.module.scss';

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

interface NotificationIconProps {
  notificationIcon: string | StaticImageData;
  hasNotification?: boolean;  // Optional prop to show/hide the red circle
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  // Expect MouseEvent from HTMLButtonElement
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ notificationIcon, hasNotification = true, onClick }) => {
  return (
    <Grid item className={styles.iconWrapper}>
      {hasNotification && <div className={styles.redCircle} />}  {/* Red circle for notification */}
      <button
        onClick={onClick}  // No type conflict here since event is correctly typed
        className={styles.clickableIcon}
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', height: 20 }}
      >
        <Image 
          alt="Notification Icon" 
          src={notificationIcon} 
          width={20}  
          height={20} 
        />
      </button>
    </Grid>
  );
};

export default NotificationIcon;
