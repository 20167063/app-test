import './App.css';
import Nav from "./components/Nav";
import ListStudent from "./components/ListStudent/ListStudent";
import EditStudent from './components/EditStudent/EditStudent';
import React,{ useState } from "react";
import Profile from './components/Profile/Profile';
import Data from "./data/Data";

function App() {
  const [item,setItem]=useState("");
  const [show,setShow]=useState(false);
  const [edit,setEdit]=useState(false);
  const [data,setData]=useState(Data);

  const showProfile = (item,idx) => {
    console.log(data);
    // setShow(true);
    setItem(item); 
    setShow(true);
  }
  
  const editProfile = () => {
    setShow(false);
    setEdit(true);
  }
  
  const editter = (newItem) => {
      var index = newItem.id;
      const newData = [...data.slice(0,index-1),newItem,...data.slice(index)];
      setData(newData);
      setEdit(false);
  }
  return (
    <div>
    <div>
      <Nav />
    </div>
    <div className="App">
    {show ? <Profile item={item} editProfile={editProfile} show={show}/> : <div></div>}
      {edit ? <EditStudent item={item} editter={editter}/> : <ListStudent data={data} showProfile={showProfile}/>}
      
    </div>
    </div>
  );
}

export default App;
