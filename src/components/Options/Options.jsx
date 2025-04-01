import styles from './Options.module.css';

const Options = ({onClickGood, onClickNeutral, onClickBad, total, reset}) => {

    const renderReset = (total) => {
        if(total){
            return (<button onClick={reset}>Reset</button>);
        }
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={onClickGood}>Good</button>
            <button onClick={onClickNeutral}>Neutral</button>
            <button onClick={onClickBad}>Bad</button>
            {renderReset(total)}
            
       {/*    <button>Reset</button>  */}
        </div>
    )
}

export default Options;