import React from 'react'


function Comp1({render}:{  
  render: (value:string) => JSX.Element
}) {
  return (
    <div>
      <div>Phone : 1234567890</div>
      {render("Washington, D.C.")}
    </div>
  )
}

function Comp2({st1}:{
  st1: string
}) {
  return (
    <div>Address -  {st1}</div>
  )
}

export default function Contact() {
  return (
    <>
    <div>Contact</div>
    <Comp1 render={(value)=> <Comp2 st1={value} />} />
    </>
  )
}
