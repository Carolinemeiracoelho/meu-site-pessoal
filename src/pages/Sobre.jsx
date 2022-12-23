import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.png'

import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
    return(
        <>
        <Header title="Sobre mim" image={sobreImg} />
        <div className={StyleSheet.sobreContainer}>
           <div className={StyleSheet.bioContainer}>
            <h2 className={StyleSheet.bioTitle}>Caroline Meira</h2>
            <p className={StyleSheet.bioText}>Sou baiana, morei durante 5 anos em São Paulo trabalhando e estudando para a área de administração, recentemente voltei para a Bahia e decidi fazer a transição de carreira para programação.</p>
            </div> 

        </div>
        </>
    )
}