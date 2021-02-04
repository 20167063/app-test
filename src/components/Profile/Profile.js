import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './style.css'


function Profile(props){
    const {editProfile} = props;
    const {item}=props;
    // const edit = () => {
    //     console.log(item);
    // }
    return(
        <div className="container">
            <Popup modal trigger={<button>Click To Show Profile</button>}>
            <img src={item.avt} alt="name" width={168} height={168} />
            <p className="title-name">{item.name}</p>
            <button type="button" className="btn btn-success" onClick={editProfile}>Edit</button>
            <div className="infomation">
            <table className="table">
                <tbody>
                <tr>
                    <th scope="row">Name:{item.name}</th>
                   
                </tr>
                <tr>
                    <th scope="row">Year:{item.year}</th>
                   
                </tr>
                <tr>
                    <th scope="row">Country:{item.country}</th>
                </tr>
                </tbody>
            </table>
            </div>
            </Popup>
        </div>
        
    )
}

export default Profile;