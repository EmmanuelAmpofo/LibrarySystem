import React from 'react'
import CardContent from '../cardComponent/CardContent'
import CardTitle from '../cardComponent/CardTitle'

function MainCard({title, children}) {
  return (
    <div>
        <CardTitle/>
        <CardContent/>
    </div>
  )
}

export default MainCard