import React from 'react';

const PlayersCard = (props) => {
    return (
        <div className='player-card'>
            <div>Name: {props.data.name} </div>
            <div>Country: {props.data.country}</div>
            <div>Searches: {props.data.searches}</div>
            <div>Id: {props.data.id}</div>
        </div>
    )
}

export default PlayersCard;