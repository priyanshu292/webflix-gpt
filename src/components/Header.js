import { onAuthStateChanged, signOut } from 'firebase/auth';
import usericon from '../assets/usericon.jpg'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser , removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate('/error');
    });
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
      <img className="w-12 h-12" 
      src={usericon} 
      alt="usericon" />
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
    </div>)}

    </div>
  )
}

export default Header
