import {getImageUrl} from "../../utils"
import styles from "./Contact.module.css"

export const Contact = () =>{
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}> 
                <h2>Contact</h2>
                <p>Feel Free to Reach Out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href=" mailto: postbox0727@email.com ">postbox0727@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                    <a href=" https://www.linkedin.com/in/yuvarajyesudass">Linked-in</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Githib icon" />
                    <a href=" https://www.gitbub.com/Yuvaraj0727">GitHub</a>
                </li>
            </ul>
        </footer>
    )
}