import { useState } from 'react'
import Card from './Card'

function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '../assets/html.png', stat: "" },
        { id: 1, img: '../assets/html.png', stat: "" },
        { id: 2, img: '../assets/css.png', stat: "" },
        { id: 2, img: '../assets/css.png', stat: "" },
        { id: 3, img: '../assets/js.png', stat: "" },
        { id: 3, img: '../assets/js.png', stat: "" },
        { id: 4, img: '../assets/scss.png', stat: "" },
        { id: 4, img: '../assets/scss.png', stat: "" },
        { id: 5, img: '../assets/react.png', stat: "" },
        { id: 5, img: '../assets/react.png', stat: "" },
        { id: 6, img: '../assets/vue.png', stat: "" },
        { id: 6, img: '../assets/vue.png', stat: "" },
        { id: 7, img: '../assets/angular.png', stat: "" },
        { id: 7, img: '../assets/angular.png', stat: "" },
        { id: 8, img: '../assets/nodejs.png', stat: "" },
        { id: 8, img: '../assets/nodejs.png', stat: "" },
        { id: 9, img: '../assets/c.png', stat: "" },
        { id: 9, img: '../assets/c.png', stat: "" },
        { id: 10, img: '../assets/git.png', stat: "" },
        { id: 10, img: '../assets/git.png', stat: "" },
        { id: 11, img: '../assets/java.png', stat: "" },
        { id: 11, img: '../assets/java.png', stat: "" },
        { id: 12, img: '../assets/python.png', stat: "" },
        { id: 12, img: '../assets/python.png', stat: "" },
        { id: 13, img: '../assets/php.png', stat: "" },
        { id: 13, img: '../assets/php.png', stat: "" },
        { id: 14, img: '../assets/ruby.png', stat: "" },
        { id: 14, img: '../assets/ruby.png', stat: "" },
        { id: 15, img: '../assets/nest.png', stat: "" },
        { id: 15, img: '../assets/nest.png', stat: "" },
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current) {
        if (items[current].id == items[prev].id) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        } else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index + 'card'} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Cards