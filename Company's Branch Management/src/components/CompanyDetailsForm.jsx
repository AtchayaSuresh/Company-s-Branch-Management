import React, { Component } from 'react'

export default class CompanyDetailsForm extends Component {
    constructor(){
        super();
        this.state={
            companyName:'',
            natureOfBusiness:'',
            companyDetails:[]
        }
    }

    nameChangeHandler =(e) =>{
        this.setState({
            companyName:e.target.value
        });
    }

    businessNatureHandler =(e) =>{
        this.setState({
            natureOfBusiness:e.target.value
        });
    }

    submitHandler =(e) =>{
        e.preventDefault();
        this.setState({
            companyDetails:[...this.state.companyDetails,
                {companyName:this.state.companyName,
                natureOfBusiness:this.state.natureOfBusiness}
            ]
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>Company Details</h1>

                    <label>COMPANY NAME</label>
                    <input type="text" value={this.state.companyName} onChange={this.nameChangeHandler}/>

                    <label>NATURE OF BUSINESS</label>
                    <input type="text" value={this.state.natureOfBusiness} onChange={this.businessNatureHandler}/>

                    <button>SAVE</button>
                </form>
                
            </div>
        )
    }
}
