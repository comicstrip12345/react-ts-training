import React from 'react'
import ChildType from './ChildType'
import SecondChild from './SecondChild'

const ParentType = () => {
    return (
        <div>
            <SecondChild>
                <ChildType>
                    Hello
                </ChildType>
            </SecondChild>
        </div>
    )
}

export default ParentType