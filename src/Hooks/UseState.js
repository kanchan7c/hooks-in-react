import React, { useState } from 'react';



const list = [
    {
        'id': '1',
        'item': 'Item'
    },
    {
        'id': '2',
        'item': 'Another item'
    }
]

const UseState = () => {
    const [text, setText] = useState('Hello, click to see my name!');
    const [listItem, setListItem] = useState(list);

    const clearListHandler = () => {
        setListItem([]);
    }

    //toggling text on button click
    const changeTextHandler = () => {
        text === 'Kanchan'
            ? setText('Hello, click to see my name!')
            : setText('Kanchan');
    }

    return (
        <div>
            <section>
                <h1>** useState() example **</h1>
                <h2>{text}</h2>
                <button className="btn" onClick={changeTextHandler}>Click!</button>

                <h1>List being displayed here: (useState with arrays)</h1>
                {
                    listItem.map(content =>
                        <p key={content.id}><span>{content.id}.</span><span> {content.item || 'item not specified'}</span></p>)
                }
                <button className="btn" onClick={clearListHandler}>Clear List</button>
            </section>
        </div>
    )
}

export default UseState
