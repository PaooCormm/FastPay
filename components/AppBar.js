import styles from "../styles/Home.module.css"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export const AppBar = () => {
  return (
    <div className={styles.AppHeader}>
      <span>EtherSwipe</span>  
      <WalletMultiButton />
    </div>
  )
}
