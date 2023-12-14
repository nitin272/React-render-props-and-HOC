import React from 'react'

const LikeImg = (props) => {
  return (
    <div>
      <button onClick={props.functionality}> Like Img {props.count} </button>
    </div>
  )
}

export default LikeImg
