import styles from "./Tweet.module.css";
import { DateService } from "../../../../data/services/DateService";
export default function Tweet({props}){
    return(
        <div className={styles["tweet-container"]}>
            <img className={styles["imgUser"]} src={props.user.picture} alt={"imagem de perfil do usuário"}/>
            <div className={styles["user"]}>
                <span className={styles["userName"]}>{props.user.name}</span> {'  '}
                <span className={styles["userId"]}>{props.user.username}</span>
                <span className={styles["date"]}>{" - "+DateService.relativeTime(props.date)}</span>
            </div>
            <div className={styles["text"]}>{props.text}</div>


        </div>
    );



}