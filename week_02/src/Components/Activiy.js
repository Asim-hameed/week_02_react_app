import { useEffect,useState } from "react";

useEffect

function Activities(){
    function loadActivity(){
        fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) => setActivity(data.activity));

    }
const [activity,setActivity]= useState([]);
    useEffect(()=> {loadActivity()});
    return <h1>{activity}</h1>

}
export default Activities;