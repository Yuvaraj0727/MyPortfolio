import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () =>{
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Yuvaraj</h1>
                <p className={styles.description}>I build complete web applications, handling both front-end design and back-end functionality. My skills include crafting responsive interfaces, and integrating systems to deliver seamless user experiences.</p>
                <a href=" mailto: postbox0727@email.com " className={styles.contactBtn}>Contact me</a>
            </div>
            <img src={getImageUrl("hero/hero11Image.png")} alt="hero me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}