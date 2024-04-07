import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import LabelBox from './reminderComponent'
import './App.css'

import { getJsonList } from './createReminder';

export default function Overview() {
    const jsonList = getJsonList();
    const [isToggled, setIsToggled] = useState(false);
    let navigate = useNavigate();


    //const handleToggle = () => {
    //    setIsToggled(!isToggled);
    //}

    //const routeChange = () => {
    //    let path = "/reminderCreation";
    //    navigate(path);
    //};

    //return (

    //    <div style={{ margin: "50px", backgroundColor: "blue", display: "flex" }}>
    //        <div style={{ flex: "0 0 20%", backgroundColor: "red" }}>
    //            <button onClick={handleToggle}>
    //                {isToggled ? 'KalenderAnsicht ein' : 'KalenderAnsicht aus'}
    //            </button>
    //        </div>
    //        <div>
    //            <div style={{ flex: "1" }}>
    //                <select>
    //                    <option selected="true">Alphabetisch (A-Z)</option>
    //                    <option>Alphabetisch (Z-A)</option>
    //                    <option>J�ngste Erinnerung</option>
    //                    <option>�lteste Erinnerung</option>
    //                </select>
    //                <button onClick={routeChange} >neue Erinnerung erstellen</button>
    //            </div>
    //            <br></br>
    //        </div>





    //        {!isToggled && (
    //            <div>
    //                <br></br>
    //                <div style={{ display: "flex", margin: "10px", backgroundColor: "green", flexWrap: "wrap" }}>
    //                    {jsonList.map((data, index) => (
    //                        <LabelBox key={index} data={data}></LabelBox>
    //                    ))}
    //                </div>
    //            </div>
    //        )}
    //        {isToggled && (
    //            <label>hi</label>
    //        )}
    //    </div>

    //)


}




//  const [numberOfComponents, setNumberOfComponents] = useState(0);

//  const handleButtonClick = () => {
//      setNumberOfComponents((prevCount) => prevCount + 1);

//  }

//return (
//    <><p>Overview works!</p><div className="container">
//        {[...Array(numberOfComponents )].map((_, index) => (
//            <LabelBox key={index} />
//        ))}
//    </div>
//        <button onClick={handleButtonClick} >Add component to test</button>
//    </>
//);

