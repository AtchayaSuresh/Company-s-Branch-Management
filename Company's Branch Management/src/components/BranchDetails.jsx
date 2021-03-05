import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

export default class BranchDetails extends Component {

    constructor(){
        super();
        this.state={
            companyName:['tcs','infosys','wipro','codingMart'],
            branchName:'',
            gstNumber:'',
            address:'',
            showSearchResult:false
        }
    }

    componentDidMount(){
        this.setState({
            defaultOption:this.state.companyName[0]
        });
    }
    
    nameChangeHandler =(e) =>{
        this.setState({
            companyName:e.target.value
        });
    }

    branchNameHandler =(e) =>{
        this.setState({
            branchName:e.target.value
        });
    }

    gstChangeHandler =(e) =>{
        this.setState({
            gstNumber:e.target.value
        });
    }

    addressChangeHandler =(e) =>{
        this.setState({
            address:e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>Branch Details</h1>

                    <label>COMPANY NAME</label>
                    <Dropdown options={this.state.companyName} onChange={this._onSelect} value={this.state.defaultOption}></Dropdown>

                    <label>BRANCH NAME</label>
                    <input type="text" value={this.state.branchName} onChange={this.branchNameHandler}/>

                    <label >GST NO. </label>
                    <input type="text" value={this.state.gstNumber} onChange={this.gstChangeHandler}/>

                    <label >Address </label>
                    <input type="text" value={this.state.address} onChange={this.addressChangeHandler}/>                    
                    
                    <button onClick={this.searchHandler}>SEARCH</button>
                </form>
            </div>
        )
    }
}
