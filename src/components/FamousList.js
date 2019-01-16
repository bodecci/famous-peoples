import React, { Component } from 'react';

class FamousList extends Component {

render() {
    // Holds famous people inside of <li> tags
    const famousPeopleList = [];
    for(let person of this.props.famousPeople){
        let personListItem = (<li>{person.firstName} - {person.role}</li>);
        famousPeopleList.push(personListItem);
    }

    return(
        <div>
            <h2>Famous List</h2>
            {JSON.stringify(this.props.famousPeople)}
            <ul>
                {famousPeopleList}
            </ul>

        </div>


    );
}

}

export default FamousList;