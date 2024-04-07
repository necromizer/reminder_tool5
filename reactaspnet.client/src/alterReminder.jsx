import { useState, React } from 'react';


export default function AlterReminder() {
    const [inputtext, setInputtext] = useState("");
    let outputtext = "";
    const inputChangeText = (event) => { setInputtext(event.target.value) };
    const sendDataToBackend = async () => {
        try {
            const response = await fetch("/api/alterReminder/endpoint", {
                method: 'POST',
                headers: { "Conten-Type": "application/json" },
                body: JSON.stringify({ key: 'value' })
            });
            if (!response.ok) {
                throw new Error("Failed to send Data to backend");
            }
            const responseData = await response.json();
            console.log("response from backend:", responseData);

        } catch (error) {
            console.error("Error", error);
        }

        //Test
        //try {
        //    fetch('https://jsonplaceholder.typicode.com/todos/1')
        //        .then(response => response.json())
        //        .then(json => console.log(json))

        //} catch (error) {
        //    console.error("Error", error);
        //}
    }


    return (
        <div>
            <input type="text" value={inputtext} onChange={inputChangeText}></input>
            <button onClick={sendDataToBackend}></button>
        </div>


    );



}
