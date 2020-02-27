import './HomeScreenStyles.css'
import React, {useContext} from "react";
import NavBar from "./NavBar";
import {Tag, Divider, Table, Popconfirm} from "antd";
import axios from 'axios';
import { Menu, Dropdown, Icon } from 'antd';


class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expenseData: [],
            id: "2324wd34231234"
        };
    }

    handleMenuItemClick(info){
        console.log(info);
        axios.get( 'http://localhost:5000/user/category/' + this.state.id + '/' + info )
            .then( res => {
                console.log(res);
                this.setState( {
                    expenseData: res.data.reverse()
                });
                console.log(this.state.expenses)
            })
            .catch(err => {console.log(err.data)})
    }

    handleMenuItemClickDatum(menu){
        console.log(menu);
        axios.get( 'http://localhost:5000/user/datum/' + this.state.id + '/' + menu )
            .then( res => {
                console.log(res);
                this.setState( {
                    expenseData: res.data.reverse()
                });
                console.log(this.state.expenses)
            })
            .catch(err => {console.log(err.data)})
    }

    handleDelete(record) {
        console.log(record._id)
        axios.post('http://localhost:5000/user/delete/' + this.state.id + '/' + record._id)
            .then( res => {
                console.log(res.data.expenses);
                this.componentDidMount()
            })
            .catch(err => {console.log(err.data)})
    }

    componentDidMount() {
        console.log("start")
        axios.get( 'http://localhost:5000/user/' + this.state.id )
            .then( res => {
                console.log(res.data.expenses);
                this.setState({
                    expenseData: res.data.expenses.reverse()
                })
            })
            .catch(err => {console.log(err.data)})
    }

    resetToAll (){
        this.componentDidMount()
    }

    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("01")}>
                        January
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("02")}>
                        February
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("03")}>
                        March
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("04")}>
                        April
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("05")}>
                        Mai
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("06")}>
                        Juni
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("07")}>
                        Juli
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("08")}>
                        August
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("09")}>
                        September
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("10")}>
                        Oktober
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("11")}>
                        November
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClickDatum("12")}>
                        Dezember
                    </a>
                </Menu.Item>
            </Menu>
        );

        const menu1 = (
            <Menu>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Medien & Elektronik")}>
                        Medien & Elektronik
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Abos & Spenden")}>
                        Abos & Spenden
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Bars & Restaurant")}>
                        Bars & Restaurant
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Berufsausgaben")}>
                        Berufsausgaben
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Bildung")}>
                        Bildung
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Essen & Lebensmittel")}>
                        Essen & Lebensmittel
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Familie & Freunde")}>
                        Familie & Freunde
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Gesundheit & Drogerie")}>
                        Gesundheit & Drogerie
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Reisen & Urlaub")}>
                        Reisen & Urlaub
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Shopping")}>
                        Shopping
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Transport & Auto")}>
                        Transport & Auto
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Versicherung & Finanzen")}>
                        Versicherung & Finanzen
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Steuern & Abgaben")}>
                        Steuern & Abgaben
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" onClick= {e => this.handleMenuItemClick("Sonstiges")}>
                        Sonstiges
                    </a>
                </Menu.Item>
            </Menu>
        );

        const columns = [
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
                render: text => <a style={{color: "darkgray"}}>{text}</a>,
            },
            {
                title: 'Category',
                key: 'category',
                dataIndex: 'category',
                render: text => <Tag color={"darkgray"} >{text}</Tag>
            },
            {
                title: 'Purchase',
                dataIndex: 'purchase',
                key: 'purchase',
                render: text => <a style={{color: "darkgray"}}>{text}</a>,
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
                render: text => <a style={{color: "darkgray"}}>{text}</a>,
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) =>
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record)
                    }>
                        <a style={{color: "red"}}>Delete</a>
                    </Popconfirm>
            },
        ];

        return(
            <div className="main-background">
                <NavBar/>
                <div className="home-section">
                    <div className="title-wrapper">Expenses</div>
                    <div className="main-box">
                        <div className="bpx-header">
                            <Dropdown overlay={menu}>
                                <a className="box-header-item1" onClick={e => e.preventDefault()}>
                                    Select month <Icon type="down" />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={menu1}>
                                <a className="box-header-item" onClick={e => this.handleMenuItemClick(e)}>
                                    Select category <Icon type="down" />
                                </a>
                            </Dropdown>
                            <h1 className="box-header-item3" onClick={e => this.resetToAll()}>All</h1>
                        </div>
                        <Table columns={columns} dataSource={this.state.expenseData} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeScreen