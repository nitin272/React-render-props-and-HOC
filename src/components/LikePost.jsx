import React from 'react'
import ParentHoc from './ParentHoc'
function LikePost(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Post {props.counter}</button>
    </div>
  )
}

export default ParentHoc(LikePost)
