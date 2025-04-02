import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'
import { useState, useEffect } from 'react'

function App() {
    const [options, setOption] = useState(() => {
        const savedFeedback = JSON.parse(
            window.localStorage.getItem('saved-feedback')
        )

        if (savedFeedback) {
            return savedFeedback.options
        } else
            return {
                good: 0,
                neutral: 0,
                bad: 0,
            }
    })

    const updateFeedback = (feedbackType) => {
        switch (feedbackType) {
            case 'good':
                setOption({ ...options, good: options.good + 1 })
                break
            case 'neutral':
                setOption({ ...options, neutral: options.neutral + 1 })
                break
            case 'bad':
                setOption({ ...options, bad: options.bad + 1 })
                break
            case 'reset':
                setOption({ ...options, good: 0, neutral: 0, bad: 0 })
                break
        }
    }

    const totalFeedback = options.good + options.neutral + options.bad
    const positiveFeedback = Math.round((options.good / totalFeedback) * 100)

    useEffect(() => {
        window.localStorage.setItem(
            'saved-feedback',
            JSON.stringify({ options })
        )
    }, [options])

    return (
        <>
            <div>
                <Description />

                <Options onClickFunc={updateFeedback} total={totalFeedback} />

                {totalFeedback ? (
                    <Feedback
                        good={options.good}
                        neutral={options.neutral}
                        bad={options.bad}
                        total={totalFeedback}
                        positive={positiveFeedback}
                    />
                ) : (
                    <Notification />
                )}
            </div>
        </>
    )
}

export default App
