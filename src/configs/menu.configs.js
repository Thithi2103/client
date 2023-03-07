import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PublicIcon from '@mui/icons-material/Public';


const main = [
    {
        display: "home",
        path: "/",
        icon: <HomeOutlinedIcon />,
        state: "home"
      },
      {
        display: "country",
        path: "/country",
        icon: <PublicIcon />,
        state: "country"
      },
]

const menuConfigs = {main}
export default menuConfigs