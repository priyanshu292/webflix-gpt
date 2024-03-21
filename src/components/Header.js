import { onAuthStateChanged, signOut } from 'firebase/auth';
import usericon from '../assets/usericon.jpg'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addUser , removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { IoSearch } from "react-icons/io5";



const Header = () => {

  const [showItems, setShowItems] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate('/error');
    });
  }

  const handleClick =()=>{
    setShowItems(!showItems);
  }

  const handleGptSearchClick =()=>{
    //Toggle GPT Search 
    dispatch(toggleGptSearchView());
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email} = user;
        dispatch(addUser({uid: uid, email: email}))
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    
    //unsubscribe the component unmount
    return () => unsubscribe();
  },[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
      className="w-44" 
      src={LOGO} alt='logo' />

    {user && (<div className="flex p-2">
      
      <button className='bg-gray-600 bg-opacity-70 text-white p-2 m-2 rounded-sm hover:bg-white hover:text-black' 
      onClick={handleGptSearchClick}>
        <span className='flex items-center'>
          <IoSearch className='mr-1'/>
          GPT Search
        </span>
      </button>

      <img className="w-12 h-12 m-2" src={usericon} alt="usericon" onClick={handleClick}/>

      {showItems && <button onClick={handleSignOut} className='bg-red-700 h-10 mt-3 rounded-sm px-2 text-white'>Sign Out</button>}
      
    </div>)}

    </div>
  )
}

export default Header
