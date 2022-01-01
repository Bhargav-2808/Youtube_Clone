import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <li>
          <HomeIcon />
          <span>Home</span>
        </li>
        <li>
          <SubscriptionsIcon /> <span>Subscriptions</span>
        </li>
        <li>
          <ThumbUpAltIcon /> <span>Liked Video</span>
        </li>
        <li>
          <WatchLaterOutlinedIcon /> <span>History</span>
        </li>
        <li>
          <VideoLibraryOutlinedIcon /> <span>Library</span>
        </li>
        <hr />
        <li>
          <LogoutOutlinedIcon /> <span>Log Out</span>
        </li>
        <hr />
      </nav>
    </>
  );
};
