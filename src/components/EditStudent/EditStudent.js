import React, {Component} from 'react';
import './style.css'


class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
        this.nameChange = this.nameChange.bind(this);
        this.yearChange = this.yearChange.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.avtChange = this.avtChange.bind(this);
    }
    
    nameChange(event) {
        this.setState({ nameChanged: event.target.value });
    }
    yearChange(event) {
        this.setState({ yearChanged: event.target.value });
    }
    countryChange(event) {
        this.setState({ countryChanged: event.target.value });
    }
    avtChange(event) {
        this.setState({ avtChanged: event.target.value });
    }
    render(){
        const editdone = () => {
            var newItem = {
                id: item.id,
                name: this.state.nameChanged,
                year: this.state.yearChanged,
                country: this.state.countryChanged,
                avt: this.state.avtChanged                
            }
            const { editter } = this.props;
            editter(newItem);
        }
        const {item} = this.props;
        return (
            
            <div className="eddit">
                <form >
                <div className="form-group">
                <label >Name</label>
                <input type="text" className="form-control" onChange={this.nameChange} placeholder={item.name} />
                </div>
                <div className="form-group">
                <label >Year of Birth</label>
                <input type="text" className="form-control" onChange={this.yearChange} placeholder={item.year} />
                </div>
                <div className="form-group">
                <label >Country</label>
                <input type="text" className="form-control" onChange={this.countryChange} placeholder={item.country}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Avatar</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.avtChange} />
                </div>
                </form>
                <div className="button-sub">
                <button className="btn btn-primary" onClick={editdone}>Submit</button>
                </div>
            </div>
        );
    }
}

export default EditStudent;