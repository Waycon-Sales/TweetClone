import {useIndex} from '../../data/hooks/pages/useIndex.page';
import TextInput from '../components/Inputs/TextInput/TextInput';
import Tweet from '../components/display_content/Tweet/Tweet';
import styles from '../style/index.module.css';



export default function Index(){
    const {
        user,
        text,
        onTextChange,
        maxTextLength,
        sendTweet,
        sortedTweetList,
    } = useIndex();
    return (<div>
        <h1 className={styles['page-title']}>TweeterClone</h1>
        <div className={styles['tweet-container']}>
            <img className={styles['avatar']} src={user.picture} alt={user.name}/>
            <TextInput placeholder={"O que está acontecendo?"} maxLength={maxTextLength} rows={3} value={text} onChange={onTextChange}/>
        </div>
        <div className={styles['button-container']}>
            <div >{text.length}/{maxTextLength}</div>
            <button className={styles['post-button']} disabled={text.length === 0} onClick={sendTweet}>Tweetar</button>
        </div>
        <ul  className={styles['tweet-list']}>
            {
                sortedTweetList.map((tweet) => (
                    <li key={tweet.id} className={styles['tweet-list-item']}>
                        {console.log(tweet.data)}
                        <Tweet props={tweet.data}/>
                    </li>
                ))
            } 
        </ul>
        


    </div>);
}