import {FaGithub}from 'react-icons/fa';
import{ FiX} from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton(){

  const isUserLoggedIn = true;

  return isUserLoggedIn ?(
    <button 
    type="button"
    className={styles.signInButton}
  >
    <FaGithub 
      color="#04d361"    
    />
    Elaine Leandro
    <FiX 
      color="#737380"
      className={styles.closeIcon}
  />
  </button>
  ) : (
    <button 
    type="button"
    className={styles.signInButton}
  >
    <FaGithub color="#d53f8c"/>
    Sign in with GitHub
  </button>
  )
}