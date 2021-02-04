import { render } from "@testing-library/react";
import React, {Component} from "react";



class EditStudent extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const {item} = this.props;
        const {editter} = this.props;
        const onChange = (e) => {
            const target = e.target;
            const value = target.value;
            const name = target.name;
            this.setState({
                [name]: value
            });
        }
        const onSubmit = () => {
            var newItem = {
                id: item.id,
                name: this.state.name,
                year: this.state.year,
                country: this.state.country,
                avt: this.state.avt
            }
            editter(newItem);
        }
   return(
        <div>
            <form className="was-validated">
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" onChange={onChange} placeholder={item.name} name="name" required />
                <div className="valid-feedback">OK!.</div>
                <div className="invalid-feedback">Cannot be left blank.</div>
                </div>
                <div className="form-group">
                <label htmlFor="year">Year:</label>
                <input type="text" className="form-control" onChange={onChange} placeholder={item.year} name="year" required />
                <div className="valid-feedback">OK!.</div>
                <div className="invalid-feedback">Cannot be left blank.</div>
                </div>
                <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input type="text" className="form-control" onChange={onChange} placeholder={item.country} name="country" required />
                <div className="valid-feedback">Ok!.</div>
                <div className="invalid-feedback">Cannot be left blank.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Avatar</label>
                    <input type="file" className="form-control-file" name="avt" onChange={onChange} required/>
                    <div className="valid-feedback">Ok!.</div>
                     <div className="invalid-feedback">Please select file.</div>
                </div>
            </form>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Update</button>
        </div>
   )
    }
}

export default EditStudent;