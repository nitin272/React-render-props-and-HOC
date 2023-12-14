import React from 'react'

const Likepost = (props) => {
  return (
    <div>
      <button onClick={props.functinality}> Like post {props.count} </button>
    </div>
  )
}

export default Likepost
