import React, { useState } from 'react';


// sample array to work with usestate 
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

// sample object to work with 

const toys = {
    'id': 0,
    'name': 'Unicorn',
    'cost': 400,
    'category': 'Baby item'
}

const UseState = () => {
    const [show, setShow] = useState(true);
    const [text, setText] = useState('Hello, click to see my name!');
    const [listItem, setListItem] = useState(list);
    const [myObject, setMyObject] = useState(toys);


    // clearing the array on click 
    const clearListHandler = () => {
        setListItem([]);
    }

    // updating the object dynamically 
    const updateToysHandler = () => {
        setMyObject(
            {
                ...toys,
                'cost': 600
            }
        );
        setShow(false);
    }

    //toggling text on button click
    const changeTextHandler = () => {
        text === 'Kanchan'
            ? setText('Hello, click to see my name!')
            : setText('Kanchan');
    }

    return (
        <div>
            {/* displaying simple usecase of usestate hook  */}
            <section>
                <h1>** useState() example **</h1>
                <h2>{text}</h2>
                <button className="btn" onClick={changeTextHandler}>Click!</button>
            </section>

            {/* displaying usestate with arrays  */}
            <section>
                <h1>List being displayed here: (useState with arrays)</h1>
                {
                    listItem.map(content =>
                        <p key={content.id}><span>{content.id}.</span><span> {content.item || 'item not specified'}</span></p>)
                }
                <button className='btn' onClick={clearListHandler}>Clear List</button>
            </section>

            {/* displaying usestate with objects and rest operator  */}
            <section>
                <h1>** useState() example with objects</h1>
                {
                    <p key={myObject.id}>Toy Name: <span>{myObject.name} </span>Price: <span>{myObject.cost} </span>Cateogory:  <span>{myObject.category}</span></p>
                }
                <button className={`btn ${show ? '' : 'hide'}`} onClick={updateToysHandler} show={show}>Update Price</button>
            </section>
        </div>
    )
}

export default UseState
