import Link from "next/link"
import Image from "next/image"
import styles from "./styles/Footer.module.css"

export default function Footer(){
    return(
        <>
        <footer className={styles.foot}>

           <div className={styles.body}>

                <div className={styles.blog1}>

                    <div  className={styles.logo}>
                        <Image src="/logo_house.png" alt="logo" height={80} width={80}></Image>
                        <h1 className={styles.logotext}>PorHub</h1>
                    </div>

                    <div className={styles.copyright}>
                        Copyright @2023-Now<br/>
                        Telecommunication Engineering
                    </div>
                    <div className={styles.kmitl}>
                        <p >Faculity Of Engineering<br/>
                        King's Mongkut instuite Technology Ladkrabang<br/>
                        1 Chalong Krung 1 Alley, Lat Krabang, Khet Lat<br/>
                        Krabang, Krung Thep Maha Nakhon 10520</p>
                    </div>

                </div>

                <div className={styles.blog}>
                </div>

                <div className={styles.blog3}>
                    <div className={styles.aboutus}>
                        <Link href="./pages/AboutUs">About Us</Link>
                    </div>
                </div>
           </div>




        </footer>
        </>
    )
}