import { useEffect,useState } from "react";

useEffect

function Activities(){
    function loadActivity(){
        setIsLoading(true);
        fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) => {
    setActivities(...activities, data);
    setIsLoading(false)
  });
    }
const [activities,setActivities]= useState([]);
const [isLoading,setIsLoading]= useState(true);

    useEffect(()=> {loadActivity()
    },[]);

    if(activities.length===0){
        return <p>Loading</p>
    }
    return (
    <div>
        <ul>
            {activities.map((activity)=>
            {
                return <li key={activity.key}>{activity.activity}</li>
            })}

        </ul>
    <button disabled={isLoading} onClick={loadActivity}> Load Data</button>
    </div>
    );

}
export default Activities;