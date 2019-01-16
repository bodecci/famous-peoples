import React, {Component} from 'react';


class FamousForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            role: '',
        }

    }
        addFamousPerson = (event) => {
            // Stop the page from refreshing
            event.preventDefault();
            console.log(`${this.state.firstName} is famous for ${this.state.role}`);
            // next step is to pass this up to App.js
            const famousPerson = {
                firstName: this.state.firstName,
                role: this.state.role,
            };
            // this will call the function in App.js
            this.props.addFamousPersonToList(famousPerson);
        }

        onNameChange = (event) => {
            this.setState({
                firstName: event.target.value,
            });
            // console.log(this.state); // state won't be updated yet
            
        }

        onRoleChange = (event) => {
            this.setState({
                role: event.target.value,
            });

        }

    render(){

            console.log(this.state);
            
        // return JSX
        return (
            // enclosing tag. use elements that has a closing tag can be an enclosing.
            <form onSubmit={this.addFamousPerson}>
                <input onChange={this.onNameChange} type="text" placeholder="first name" />
                <input onChange={this.onRoleChange} type="text" placeholder="role" />
                <button type="submit">Submit</button>
            </form>
        );
    }

}

export default FamousForm;