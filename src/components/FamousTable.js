import React, { Component } from 'react';


class FamousTable extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.firstName}</td>
                <td>{this.props.item.role}</td>
            </tr>
        );
    }



} 

export default FamousTable;