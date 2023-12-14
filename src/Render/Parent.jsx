import React, { useState } from 'react';

function ParentComponent(props) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            {props.render(count, handleIncrement)}
        </div>
    );
};

export default ParentComponent;
