import React from 'react';

const Person = ({ food, hasFood, name }) => {
    if (hasFood) {
    return <div>{name}'s gonna eat {food}!</div>;
    }
    return <div>No more {food} for {name}:/ </div>;
}

export default Person;