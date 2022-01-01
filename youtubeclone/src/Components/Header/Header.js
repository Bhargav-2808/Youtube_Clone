import './Header.scss';
import {useForm}from'react-hook-form'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';

export const Header = ({ handleToggleSidebar })=> {
    const {register ,handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    
    
    return(

        <>
        <div className="header ">
         <HorizontalSplitIcon
            className="header__menu"
            
            onClick={() => handleToggleSidebar()}
         />

         <img
            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
            className="header__logo"
         />

         <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Search" name="search" {...register("search")} />
            <button type="submit">
               <SearchIcon />
            </button>
         </form>

         <div className="header__icons">
            <NotificationsIcon />
            <AppsIcon  />
            <img
               src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
               alt="avatar"
            />
         </div>
      </div>
        </>
    )
  };
