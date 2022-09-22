import React from 'react'
import { useState } from 'react'

const Mobile = () => {

    const [charge, setCharge] = useState(100)

    const MobileCharge = () => {

        if (charge === 0) {
            setCharge(0)
        } else {
            setCharge(charge - 10)
        }
    }

    return (
        <div>
            <h1>Mobile Charge: {charge}</h1>
            <button style={{ padding: '15px 20px', fontSize: '20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer' }} onClick={MobileCharge}>Mobile Charge</button>
        </div>
    )
}

export default Mobile