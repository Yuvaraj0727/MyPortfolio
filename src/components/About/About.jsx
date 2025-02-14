import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

export const About = () =>{
    return(
    <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="me with laptop" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />                    
                        <div className={styles.aboutItemsText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a Frontend Developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="sever icon" />                    
                        <div className={styles.aboutItemsText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience in developing fast and optimised back-end systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />                    
                        <div className={styles.aboutItemsText}>
                            <h3>UI Designer</h3>
                            <p>I have experience developing fast and optimised back-end systems and APIs</p>
                        </div>
                    </li>
                </ul>
            </div>
    </section>
    )
}