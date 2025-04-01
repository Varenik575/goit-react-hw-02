import styles from './Options.module.css';

const Options = ({onClickGood, onClickNeutral, onClickBad}) => {

    return (
        <div className={styles.wrapper}>
            <button onClick={onClickGood}>Good</button>
            <button onClick={onClickNeutral}>Neutral</button>
            <button onClick={onClickBad}>Bad</button>
       {/*    <button>Reset</button>  */}
        </div>
    )
}

export default Options;