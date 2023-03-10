import { Header } from '../components/Header'
import { BracketsCurly, Alien, AddressBook } from 'phosphor-react'
import homeImg from '../assets/home.png'

import styles from '../styles/pages/inicio.module.css'

export function Inicio() {
    return (
       <>
        <Header title="Meu site lindo" image={homeImg} />
        <div className={styles.homeContainer}>
            <div className={styles.cardContainer}>
                <Alien size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Vida</h2>
        <p className={styles.cardText}>Eu conto um pouquinho sobre mim, minha formação e a história da minha migração de carreira.</p>
            </div>
        </div>

        <div className={styles.homeContainer}>
            <div className={styles.cardContainer}>
                <BracketsCurly size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Código</h2>
        <p className={styles.cardText}>Mostro o meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
            </div>
        </div>

        <div className={styles.homeContainer}>
            <div className={styles.cardContainer}>
                <AddressBook size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Contato</h2>
        <p className={styles.cardText}>Entre em contato comigo. Seja para entrevistas de emprego como desenvolvedora ou para conversarmos sobre esudos.</p>
            </div>
        </div>
       </>
    )
}