import { SketchLogo } from 'phosphor-react';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss'

export function Header(){
  return (
    <>
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <SketchLogo size={40} color="#ffffff" weight="duotone" />
         
      <nav>
        <a className={styles.active}>Home</a>
        <a>Posts</a>
      </nav>
      <SignInButton/>
      </div>
    </header>
    
    </>
  )
}