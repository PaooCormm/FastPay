import styles from "../styles/Home.module.css"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export const AppBar = () => {
  return (
    <div className={styles.AppHeader}>
      <span>FastPay</span> 
      <a href="/#">Cuenta</a>
      <a href="/#">Pagos</a>  
      <WalletMultiButton />
    </div>
  )
}
