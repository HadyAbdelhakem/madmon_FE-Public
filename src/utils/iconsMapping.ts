// iconsMapping.ts
import ApartmentIcon from "../assets/images/filter-icons/Apartment.svg";
import VillaIcon from "../assets/images/filter-icons/villa.svg";
import TwinHouseIcon from "../assets/images/filter-icons/twin house.svg";
import TownHouseIcon from "../assets/images/filter-icons/town house.svg";
import DuplexIcon from "../assets/images/filter-icons/duplex.svg";
import PentHouseIcon from "../assets/images/filter-icons/pent house.svg";
import ChaletIcon from "../assets/images/filter-icons/challet.svg";
import StudioIcon from "../assets/images/filter-icons/studio.svg";
import CabinIcon from "../assets/images/filter-icons/cabin.svg";
import OfficeIcon from "../assets/images/filter-icons/office.svg";
import ClinicIcon from "../assets/images/filter-icons/clinic.svg";
import RetailIcon from "../assets/images/filter-icons/retail.svg";
import { StaticImageData } from "next/image";

const unitTypeIcons: Record<string, StaticImageData> = {
  Apartment: ApartmentIcon,
  Villa: VillaIcon,
  Twinhouse: TwinHouseIcon,
  Townhouse: TownHouseIcon,
  Duplex: DuplexIcon,
  penthouse: PentHouseIcon,
  Chalet: ChaletIcon,
  Studio: StudioIcon,
  Cabin: CabinIcon,
  Office: OfficeIcon,
  Clinic: ClinicIcon,
  Retail: RetailIcon,
};

export default unitTypeIcons;
