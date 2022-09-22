import React from 'react'
import { useState } from 'react'

const Mobiles = () => {
    const [charge, setCharge] = useState(100)

    const decrement = () => {
        if (charge === 0) {
            setCharge(0)
        } else {
            setCharge(charge - 10)
        }
    }

    return (
        <div>
            <h1>Count: {charge}</h1>
            <button style={{ padding: '15px 20px', fontSize: '20px', backgroundColor: 'purple', border: 'none', color: 'white', cursor: 'pointer' }} onClick={decrement}>Battery Down</button>
        </div>
    )
}

export default Mobiles