import React, {Component} from 'react';
import './style.css'


function EditStudent(props){
        return (
            <div className="eddit">
                <form>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control"  placeholder="Enter Name Student" />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Year of Birth</label>
                <input type="year" className="form-control" placeholder="Enter Year of Birth" />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Country</label>
                <input type="country" className="form-control"  placeholder="Enter Country of Student"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Avatar</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <div className="button-sub">
                <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
                </form>
            </div>
        );
}

export default EditStudent;