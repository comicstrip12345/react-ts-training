import React from 'react'

type PersonProps={
    person:{
        name:string
        age:number
    }
    year:number
    productList:{
        product:string
        price:number
    }[]
}

const TypePropsPerson = (props:PersonProps) => {
    const {name,age} = props.person
    return (
        <div>
            Hi. I'm {name}. I'm {age}. The year is {props.year}
            <p>Here are the products:</p>
            {props.productList.map((product,index)=>(
                <p key={index}>
                    {product.product} {product.price}
                </p>
            ))}
        </div>
    )
}

export default TypePropsPerson