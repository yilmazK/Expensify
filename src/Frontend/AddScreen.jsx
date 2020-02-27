import './AddSreenstyless.css'
import React, {useContext} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import { Select, Input } from 'antd';
import NumericInput from "./numberInput";
import axios from 'axios';

const { Option, OptGroup } = Select;
class AddScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: "2324wd34231234",
            amount: '',
            category: '',
            item:''

        };

        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this)
        this.itemchangehandler = this.itemchangehandler.bind(this)
    }

    addZ(n){
        return n<10? '0'+n:''+n;
    }

    getCurrentDate(){

        const tempDate = new Date();
        const date = tempDate.getDate() + '.' + (this.addZ(tempDate.getMonth()+1)) + '.' + tempDate.getFullYear();
        console.log(date);

        return date
    }

    itemchangehandler(evt){
        this.setState({item: evt.target.value})
    }

   handleChange(value) {
        console.log(`selected ${value}`);
        this.setState({category: value})
    }

    onChange = value => {
        this.setState({ amount: value });
    };

    submitClicked() {
        const newExpense = {
            _id: String(Math.random().toString(36).substr(2, 9)),
            date: this.getCurrentDate(),
            purchase: this.state.item,
            amount: String(this.state.amount) + "€",
            category: this.state.category
        };

        axios.post('http://localhost:5000/user/update/' + this.state.id, { new: newExpense })
            .then(res => {
                console.log(res.data);
                this.setState({amount: "", category: "", item: ""});
            })
            .catch(err => {
                console.log(err.data)
            });

        return <Redirect to='/settings' />
    }

    render() {
        return(
            <div className="add-screen-main-background">
                <Link to="/" ><button className="add-exit-button">X</button></Link>
                <div className="add-box-wrapper">
                    <p className="add-title">Add new</p>
                    <hr className="simple-line"/>
                        <p className="add-input-label">item*</p><Input size="large" value={this.state.item} onChange={(evt) => this.itemchangehandler(evt)}/>
                        <p className="add-input-label">Category*</p>
                    <Select name="category" className="add-input" placeholder="select" size="large" onChange={this.handleChange}>
                            <Option value="Medien & Elektronik">Medien & Elektronik</Option>
                            <Option value="Abos & Spendeny">Abos & Spendeny</Option>
                            <Option value="Bars & Restaurant">Bars & Restaurant</Option>
                            <Option value="Berufsausgaben">Berufsausgaben</Option>
                            <Option value="Bildung">Bildung</Option>
                            <Option value="Essen & Lebensmittel">Essen & Lebensmittel</Option>
                            <Option value="Familie & Freunde">Familie & Freunde</Option>
                            <Option value="Gesundheit & Drogerie">Gesundheit & Drogerie</Option>
                            <Option value="Reisen & Urlaub">Reisen & Urlaub</Option>
                            <Option value="Shopping">Shopping</Option>
                            <Option value="Transport & Auto">Transport & Auto</Option>
                            <Option value="Versicherung & Finanzen">Versicherung & Finanzen</Option>
                            <Option value="Steuern & Abgaben">Steuern & Abgaben</Option>
                            <Option value="Sonstiges">Sonstiges</Option>

                    </Select>,
                        <p className="add-input-label">Amount* (in Euro)</p><NumericInput size= "large" value={this.state.amount} onChange={this.onChange}/>
                    <Link to="/" ><button type="submit" className="add-submit-button" onClick={() => {this.submitClicked()}}>Add new</button></Link>
                </div>
            </div>
        )
    }
}

export default AddScreen