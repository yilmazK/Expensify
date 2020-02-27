import './AnalyticsScreenstyles.css'
import React, {useContext} from "react";
import NavBar from "./NavBar";
import { Chart } from "react-google-charts"
import axios from "axios";

class AnalyticsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggle: false,
            Alldata: [],
            firstchartData:[['Date','Money']],
            secondchartData:[],
            id: "2324wd34231234",
            categorydic: {'Sonstiges': 0, 'Shopping': 0, 'Abos & Spenden': 0, 'Medien & Elektronik': 0, 'Bars & Restaurant': 0,
            'Berufsausgaben': 0, 'Bildung': 0, 'Essen & Lebensmittel': 0, 'Familie & Freunde': 0, 'Gesundheit & Drogerie': 0, 'Reisen & Urlaub': 0,
              'Transport & Auto': 0, 'Versicherung & Finanzen': 0, 'Steuern & Abgaben': 0,
            }
        }
    }

    componentDidMount() {
        console.log("start")
        axios.get( 'http://localhost:5000/user/' + this.state.id )
            .then( res => {
                    res.data.expenses.map(item => {
                        // eslint-disable-next-line no-unused-expressions
                        (this.state.categorydic[item.category] !== undefined) ? (this.state.categorydic[item.category] += parseInt(item.amount.slice('€', -1))) : null;
                        console.log('HIIIEEER:');
                        console.log(this.state.categorydic);
                  });
                for (const [key, value] of Object.entries(this.state.categorydic)) {
                    this.state.firstchartData.push([key,value]);
                    console.log(this.state.firstchartData)
                }
                })
            .catch(err => {console.log(err.data)})
    }

    toggleChange() {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
        console.log(this.state.toggle)
    }

    render() {
        return(
            <div className="main-background-analytics">
                <NavBar/>
                <div className="analytics-section">
                    <div className="home-section">
                        <div className="title-wrapper">Analytics</div>
                        <div className="main-box-analytics">
                            {this.state.firstchartData.length === 1 ? <div className="no-data-view">🖖🏻 No Data available</div> : (this.state.toggle ? <Chart
                                    className="Hallo"
                                    width={'900px'}
                                    height={'450px'}
                                    chartType="BarChart"
                                    loader={<div>Loading Chart</div>}
                                    data={this.state.firstchartData}
                                    options={{
                                        titleColor: "white",
                                        legend: {textStyle: {color: 'gray'}},
                                        backgroundColor: '#242D3F',
                                        title: 'Sort by Category',
                                        chartArea: {width: '50%'},
                                        hAxis: {
                                            titleColor: "white",
                                            title: 'Money in €',
                                            minValue: 0,
                                            textColor: "white"

                                        },
                                        vAxis: {
                                            titleColor: "white",
                                            title: 'Category',
                                            textColor: "white"
                                        },
                                        colors: ["white", "white", "white"],

                                    }}
                                    // For tests
                                    rootProps={{'data-testid': '1'}}
                                /> : <Chart
                                    className="Hallo"
                                    width={'900px'}
                                    height={'450px'}
                                    chartType="BarChart"
                                    loader={<div>Loading Chart</div>}
                                    data={this.state.firstchartData}
                                    options={{
                                        titleColor: "white",
                                        legend: {textStyle: {color: 'gray'}},
                                        backgroundColor: '#242D3F',
                                        title: 'Sort by Money Spend',
                                        chartArea: {width: '50%'},
                                        hAxis: {
                                            titleColor: "white",
                                            title: 'Money Spend',
                                            minValue: 0,
                                            textColor: "white"

                                        },
                                        vAxis: {
                                            titleColor: "white",
                                            title: 'City',
                                            textColor: "white"
                                        },
                                        colors: ["white", "white", "white"],

                                    }}
                                    // For tests
                                    rootProps={{'data-testid': '1'}}
                                />)}
                        </div>
                        <label className="label">
                            <div className="toggle">
                                <input className="toggle-state" type="checkbox" name="check" value="check" onChange={e => this.toggleChange()}/>
                                <div className="indicator"/>
                            </div>
                            <div className="label-text">switch chart</div>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnalyticsScreen