import styles from './styles.module.scss';

interface SubsribeButtonProps{
  priceId: string;
}
export function SubsribeButton({priceId} :SubsribeButtonProps){
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  )
}