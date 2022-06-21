import React from 'react'

export const GifGridItem = (props) => {

    //console.log(props.title);
    
  return (
    // <div key={id}>{title}</div>
    <div className="card">
        <img src={props.url} alt={props.title} />
        <p>{props.title}</p>
    </div>
  )
}
