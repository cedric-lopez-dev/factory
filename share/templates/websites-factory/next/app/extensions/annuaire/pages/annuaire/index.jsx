import React from 'react';

async function getData() {
    return "test"
}

const index = async () => {
    const test = await getData()
    return (
        <div>
            annuaire
        </div>
    );
};

export default index;