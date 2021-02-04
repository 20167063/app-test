import React, {useState} from 'react';
import './style.css';


function ListStudent(props) {
    const { data } = props;
const [seachTerm, setSeachTerm] = useState("");
const showProfile = (item,idx) => {
    const { showProfile } = props;
    if (!showProfile) return;
    showProfile(item, idx);
}
          const list = data.filter((item)=>{
              if(seachTerm === ""){
                  return item;
              } else if(item.name.toLowerCase().includes(seachTerm.toLowerCase()) || item.year.includes(seachTerm) || item.country.toLowerCase().includes(seachTerm.toLowerCase())){
                  return item
              }
          }).map((item,idx)=>
              <tr onClick={()=> showProfile(item,idx)}>
               <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>{item.country}</td>
                </tr>
          )
        return (
            <div className="container">
                    <div className="seach">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" onChange={(e)=>{setSeachTerm(e.target.value);}}/>
                    </form>
                    </div>
                    <div>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Year of Birth</th>
                            <th scope="col">Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list}
                        </tbody>
                    </table>
                    </div>
            </div>
            
        );
    
}

export default ListStudent;