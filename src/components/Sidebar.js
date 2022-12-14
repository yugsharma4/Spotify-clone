import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from './DataLayer';

const Sidebar = () => {
  const [{playlists}, dispatch] = useStateValue();

  return (
    <div className='sidebar'>
      <img className = "sidebar__logo"src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='spotify-logo' />
      <SidebarOption Icon = {HomeIcon} title = "Home" />
      <SidebarOption Icon = {SearchIcon}title = "Search" />
      <SidebarOption Icon = {LibraryMusicIcon} title = "Your Library" />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
     
      {playlists?.items?.map((playlist,id) => {
          return <SidebarOption key={id} title={playlist.name} />
      })}
      
      

   
    </div>
  )
}

export default Sidebar
