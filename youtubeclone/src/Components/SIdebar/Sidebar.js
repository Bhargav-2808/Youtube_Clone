import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from 'react-router-dom'

export const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  return (
    <>
      <nav className={sidebar ? 'sidebar open' : 'sidebar'}
      onClick={() => handleToggleSidebar(false)}
      >
        <li>
          <Link to="/">
          <HomeIcon />
          <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/subscription">
          <SubscriptionsIcon /> <span>Subscriptions</span>
          </Link>
        </li>
        <li>
          <Link to="/liked">
          <ThumbUpAltIcon /> <span>Liked Video</span>
          </Link>
        </li>
        <li>
          <Link to="/history">
          <WatchLaterOutlinedIcon /> <span>History</span>
          </Link>
        </li>
        <li>
          <Link to="/library">
          <VideoLibraryOutlinedIcon /> <span>Library</span>
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/login">
          <LogoutOutlinedIcon /> <span>Log Out</span>
          </Link>
        </li>
        <hr />
      </nav>
    </>
  );
};
