

const Feedback = ({good, neutral, bad}) => {

    let totalFeedback = good + neutral + bad;

    return (
<ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total:{totalFeedback}</li>
    <li>Positive: {Math.round((good / totalFeedback) * 100)}%</li>
</ul>)
}

export default Feedback;