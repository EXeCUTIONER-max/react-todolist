import {useState} from  "react"
import Card from "./shared/Card"

function Feedbackitem({feedbody}) {
  return (
    <Card>
        <div className="num-display">{feedbody.rating}</div>
            <div className="text-display">{feedbody.text}</div>
    </Card>
  )
}

export default Feedbackitem;