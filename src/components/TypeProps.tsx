import React from 'react'

type NameProps={
    name:number|string
    age?:number
    isStart:boolean
    // person?:{
    //     name:string
    //     age:number
    //     isStart:boolean
    // }
}

const TypeProps = (props:NameProps) => {
    const {name,age,isStart} = props
    return (
        <>  
        {isStart ? 
        <div>
            Hi. I'm {name}. I'm {age} years old.
        </div>
        :
        <div>
            Hello Guest
        </div>}
        </>
        
    )
}

export default TypeProps