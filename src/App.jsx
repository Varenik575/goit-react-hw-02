import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import { useState, useEffect} from 'react';

function App() {

const [options, setOption] = useState(() => {
 
  const savedFeedback = JSON.parse(window.localStorage.getItem("saved-feedback"));
  console.log(savedFeedback.options);

if((savedFeedback.options.good !== 0) || 
(savedFeedback.options.neutral !== 0) || 
(savedFeedback.options.bad !== 0)) 
{
return savedFeedback.options;
}
  
return ({
  good: 0,
  neutral: 0,
  bad: 0
})})

const totalFeedback = options.good + options.neutral + options.bad;

const handleClickGood = () => {
  setOption({...options, good: options.good + 1})
};

const handleClickNeutral = () => {
  setOption({...options, neutral: options.neutral + 1})
};

const handleCLickBad = () => {
  setOption({...options, bad: options.bad + 1})
};

const handleClickReset = () => {
  setOption({...options, good: 0, neutral:0, bad: 0 })
}

const conditionalFeedback = (total) => {

 if (total) {
  return (
  <Feedback
    good = {options.good}
    neutral = {options.neutral}
    bad = {options.bad}
    total={total}
    />);
 } else return <Notification/>
}

useEffect(() => {
  window.localStorage.setItem("saved-feedback", JSON.stringify({options}))}, [options]);

  return (
    <>
<div>
<Description/>

 <Options 
 onClickGood = {handleClickGood} 
 onClickNeutral = {handleClickNeutral} 
 onClickBad = {handleCLickBad}
 total = {totalFeedback}
 reset = {handleClickReset}

 />

 {conditionalFeedback(totalFeedback)}

</div>
     </>
  )
};

export default App;
