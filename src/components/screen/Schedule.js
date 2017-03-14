/**
 * Created by CraigFox on 14/03/17.
 */
import React, { Component } from 'react';
import './Screen.css';

class Schedule extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="Schedule-body">
                <table>
                    <thead>
                    <tr>
                        <th>Channel</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.shows.map((show) =>
                        <tr key={show.id}>
                        <td> {show.channel} </td>
                        <td> {show.time} </td>
                        <td> {show.name} </td>
                        <td> {show.rating} </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Schedule;