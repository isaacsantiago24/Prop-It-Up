import React, { Component } from 'react';
//we are inheriting from the Component


// props are imutable
class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentAge: props.age
        };
    }
    
    birthdayClickHandler = () => {
        this.setState({
            currentAge: this.state.currentAge + 1



        });
    }


    
    // destructure so we wont type this.props all the time
    render(){
        const {
            firstName,
            lastName,
            age,
            hairColor

        } = this.props;
        // getting it from this.props
        
        return(
        <>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {this.state.currentAge} </p>
            <p>Hair Color: {hairColor}</p>

            <button onClick={this.birthdayClickHandler}>Birthday Button for {firstName} {lastName} </button>
      
        </>


        );
    }
}

export default PersonCard;
//dont forget to export