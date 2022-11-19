import React from 'react'
import ParentType from './components/childrenTypes/ParentType'
import TypeProps from './components/TypeProps'
import TypePropsPerson from './components/TypePropsPerson'

const App = () => {
    const person1={
        name:'Adriano',
        age:200,
        isStart:true,
    }
    const products=[
      {product:'Laptop',price:15000},
      {product:'Oven',price:15000},
      {product:'Pencil',price:15000},
      {product:'Mouse',price:15000}
    ]
    return (
      <>
        <TypeProps name={20} isStart={true}/>
        <TypeProps name='Adriano' age={26} isStart={true}/>
        <TypeProps name='Adriano' isStart={false}/>
        <TypeProps {...person1}/>
        <TypePropsPerson person={person1} year={2022} productList={products}/>
        <ParentType/>
      </>
    )
}

export default App