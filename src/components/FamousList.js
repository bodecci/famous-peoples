import React, { Component } from 'react';
import FamousTable from './FamousTable';

class FamousList extends Component {

render() {
    // Holds famous people inside of <li> tags
    const famousPeopleList = [];
    for(let i=0; i < this.props.famousPeople.length; i++){
        let item = this.props.famousPeople[i];
        let famousRow = (<FamousTable key={i} i={i}  item={item}/>);
        // let personListItem = (<li>{person.firstName} - {person.role}</li>);
        famousPeopleList.push(famousRow);
    }

    return(
        <div>
            <br></br>
            {/* {JSON.stringify(this.props.famousPeople)} */}
            <h2>Famous Table</h2>
            <table>
                <tbody>
                {famousPeopleList}
                </tbody>
            </table>
            <br></br>
            <br></br>

        </div>


    );
}

}

export default FamousList;