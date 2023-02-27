import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import * as web3 from "@solana/web3.js"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import styles from "../styles/Home.module.css"
import { BalanceDisplay } from "../components/BalanceDisplay"
import React, { useState, useEffect } from 'react';


export const SendSolForm = () => {
  const [txSig, setTxSig] = useState("")
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  const [balance, setBalance] = useState(0)
  const link = () => {
  return txSig ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet` : ""}

  useEffect(() => {
    if (!connection || !publicKey) {
      return
    }

    connection.getAccountInfo(publicKey).then(info => {
      setBalance(info.lamports)
    })
  }, [connection, publicKey])

  return (
    <div>
      {publicKey ? (
        <div>
        </div>    
      ) : (
        <><center><br></br><span className={styles.giantWords}>Bienvenido a FastPay</span><br></br><span className={styles.bigWords}>Conecta tu cartera para continuar</span></center></>
      )}
      {txSig ? (
        <div>          
          <p>Checa tus transacción aquí</p>
          <a href={link()}>Solana Explorer</a>
        </div>
      ) : null}

    </div>
  )
}

/*
              <form onSubmit={sendSol} className={styles.form}>
                <label htmlFor="amount">Cantidad (en SOL) a mandar:</label>
                <input
                  id="amount"
                  type="text"
                  className={styles.formField}
                  placeholder="e.g. 0.1"
                  required
                />
                <br />
                <label htmlFor="recipient">Mandar SOL a la cuenta:</label>
                <input
                  id="recipient"
                  type="text"
                  className={styles.formField}
                  placeholder="e.g. 4Zw1fXuYuJhWhu9KLEYMhiPEiqcpKd6akw3WRZCv84HA"
                  required
                />
                <button type="submit" className={styles.formButton}>
                  Mandar 
                </button>
              </form>
*/


/*
  function table(){
    useEffect(() => {
      const n = document.getElementById('personas');
      const tabla = document.getElementById('tabla');
      const tbody = document.getElementById('tablabody');
    }, []);  
    
    
  }
*/


/*
              Ingrese un numero de empleados
                <input className={styles.input} type="number" id="personas" max={20}></input>
                <button className={styles.button}>Realizar Operación</button>
                <br></br>
                <br></br>
                <div>
                  <table className={styles.table} id="tabla">
                  <thead className={styles.table.thead}>
                    <tr>
                      <th className={styles.table.th}>Números de empleado</th>
                      <th className={styles.table.th}>Cuenta de empleado</th>
                    </tr>
                  </thead>
                  <tbody id="tablabody"></tbody>
                </table>                  
                </div>  
*/