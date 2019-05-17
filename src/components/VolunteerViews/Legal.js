import React, { Component } from 'react';
import LegalIce from "./LegalIce";
import LegalBond from "./LegalBond";
import LegalFoster from "./LegalFoster";
import LegalAttorney from "./LegalAttorney";
import LegalStatus from "./LegalStatus";


class Legal extends Component {

    state = {
        button: "ice", 
    }

    viewSelectedButton = (propertyName) => {   
        return(event) =>{
        this.setState({
            [propertyName]: event.target.value,
            });
        }    
    }

    render() {


        let div = <div>  </div>
        if(this.state.button === "ice") {
            div = <div> <LegalIce/> </div>
        } else if (this.state.button === "bond") {
            div = <div> <LegalBond/> </div>
        } else if (this.state.button === "foster") {
            div = <div> <LegalFoster/> </div>
        } else if (this.state.button === "attorney") {
            div = <div> <LegalAttorney/> </div>
        } else if (this.state.button === "status") {
            div = <div> <LegalStatus/> </div>
        } 

        return (
            <center> 
           <div> LEGAL </div>
                <div>
                </div>
                <button 
                onClick={this.viewSelectedButton('button')}
                value={"ice"}
                >ICE FACILITY(PARENT)</button> 

                <button
                value={"bond"}
                onClick={this.viewSelectedButton('button')}
                >BOND INFO</button> 

                <button
                onClick={this.viewSelectedButton('button')}
                value={"foster"}
                >FOSTER FACILITY</button> 

                <button
                onClick={this.viewSelectedButton('button')}
                value={"attorney"}
                >ATTORNEY</button> 

                <button
                onClick={this.viewSelectedButton('button')}
                value={"status"}
                >LEGAL STATUS</button> 
                <br/>

                {div}
        </center>
        );
    }
}

export default Legal;