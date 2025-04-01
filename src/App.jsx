import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import { useState } from 'react';

function App() {

const [options, setOption] = useState({
  good: 0,
  neutral: 0,
  bad: 0
});

const handleClickGood = () => {
  setOption({...options, good: options.good + 1})
};

const handleClickNeutral = () => {
  setOption({...options, neutral: options.neutral + 1})
};

const handleCLickBad = () => {
  setOption({...options, bad: options.bad + 1})
};



  return (
    <>
<div>
<Description/>

 <Options 
 onClickGood = {handleClickGood} 
 onClickNeutral = {handleClickNeutral} 
 onClickBad = {handleCLickBad}
 />

 <Feedback
  good = {options.good}
  neutral = {options.neutral}
  bad = {options.bad}
  />
</div>
     </>
  )
};

export default App;
