import React from 'react'
import ParentHoc from './ParentHoc'
function LikeImage(props) {
  return (
    <div>
      <button onClick={props.handleCounter}> Like Image {props.counter} </button>
    </div>
  )
}

export default ParentHoc(LikeImage)
