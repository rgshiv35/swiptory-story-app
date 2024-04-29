import React,{useState} from 'react'
import styles from './Dashboard.module.css'
import Filters from './Filters';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import profile from '../assets/profilepic.png'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [menuclick,setMenuclick]=useState(false);
  const handle_menu=()=>{
    if(menuclick){
      setMenuclick(false)
      console.log("if clause");
    }
    else{
      setMenuclick(true)
      console.log("else clause");
    }
    // alert("hello");
  }
  return (
    <>
    <nav className={styles.header}>
      <div className={styles.header_logo}>
      <h2>SwipTory</h2>
      </div>
      <div className={styles.header_options}>
        <button className={styles.header_button}><BookmarkSharpIcon/>Bookmarks</button>
        <button className={styles.header_button }>Add story</button>
        <img className={styles.profile_img} src={profile} alt='profile'/>
        <MenuIcon className={styles.menu_icon} onClick={handle_menu}/>
      </div>
      {/* <div>
      if(menuclick){
        <>
        <h1>hello</h1>
        </>
      }
      </div> */}
    </nav>
      <Filters/>
    </>
  )
}

export default Header