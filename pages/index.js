import styles from "../styles/Home.module.css"
import Head from 'next/head';
import WalletContextProvider from "../components/WalletContextProvider"
import { AppBar } from "../components/AppBar"
import { SendSolForm } from "../components/SendSolForm"
import { PagoEmpleado } from "../components/PagoEmpleado"

const Home = props => {
  return (
    <div className={styles.App}>
      <Head>
        <title>EtherSwipe</title>
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <SendSolForm />
          <PagoEmpleado />
        </div>
      </WalletContextProvider>
    </div>
  )
}

export default Home