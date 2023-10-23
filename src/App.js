// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Header from './New folder/Header';
import Feedbackitem from "./New folder/Feedbackitem";
import Feedbackdata from "./New folder/data/Feedbackdata"; 
import Feedbacklist from "./New folder/Feedbacklist";

function App() {
const [Feedback, setFeedback] = useState(Feedbackdata)


    return (
      <>
      <Header />
    <div className="container">
      <Feedbacklist flist ={Feedback}/>
          </div>
    </>
  );
}

export default App;
