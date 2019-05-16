import React, { Component } from 'react';
import "./Admin.css"

class AdminLanding extends Component {

    registerVolunteer = () => {
        this.props.history.push('/register-volunteer')
    }

    viewVolunteer = () => {
        this.props.history.push('/volunteers')
    }

    viewEvents = () => {
        this.props.history.push('/events')
    }

    viewCases = () => {
        this.props.history.push('/cases')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>MENU</h1>
                    </div>

                    <button className="adminMenuButtons" 
                    onClick={this.viewEvents}
                    >UPCOMING EVENTS</button> <br/>

                    <button className="adminMenuButtons" 
                    onClick={this.viewCases}
                    >CASE MANAGEMENT </button> <br/>
                    


                    <button className="adminMenuButtons" 
                    onClick={this.viewVolunteer}
                    >VOLUNTEERS</button> <br/>
                    
                    <button className="adminMenuButtons" 
                    onClick={this.registerVolunteer}
                    >REGISTER VOLUNTEER</button> <br/>
                </center>
            </div>
        );
    }
}

export default AdminLanding;