import styles from './Options.module.css'

const Options = ({ onClickFunc, total }) => {
    const renderReset = (total) => {
        if (total) {
            return <button onClick={() => onClickFunc('reset')}>Reset</button>
        }
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={() => onClickFunc('good')}>Good</button>
            <button onClick={() => onClickFunc('neutral')}>Neutral</button>
            <button onClick={() => onClickFunc('bad')}>Bad</button>
            {renderReset(total)}

            {/*    <button>Reset</button>  */}
        </div>
    )
}

export default Options
