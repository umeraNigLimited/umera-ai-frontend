import React from 'react'
import Modal from './Modal'
import Button from './Button'
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase.config.js';
import { useAuthContext } from '../hooks/useAuthContext.js';

function PopUp() {
  const {dispatch} = useAuthContext()
    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        dispatch({type: 'LOGIN', payload: result.user})
        console.log("User Info:", result.user);
      } catch (error) {
        console.error("Error signing in with Google", error);
      }
    };
  

    const styles = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDriection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        height: '100vh',
        width: '100vw',
        zIndex: '1000'
    }
  return (
    <div style={styles}>
       <Modal>
       <h3 style={{fontSize: '16px'}}>Login to access UMéRA AI</h3>
        <Button icon={<i className="fa-brands fa-google"></i>} className='googleSignIn' label="Login with Google" onClick={signInWithGoogle}/>
       </Modal>
    </div>
  )
}

export default PopUp