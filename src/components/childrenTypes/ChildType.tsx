import React from 'react'

type childProp={
    children: string
}

const ChildType = (props:childProp) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default ChildType