import React, { ReactNode } from 'react'

type SecondProps={
    // children:ReactNode
    children:React.ReactNode
}

const SecondChild = (props:SecondProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default SecondChild