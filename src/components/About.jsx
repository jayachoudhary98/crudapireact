import React from 'react'
import Commoon from './Commoon'
import Contact from './Contact'

const About = () => {
  return (
    <div>
        <Commoon
      name="This is all aout us "
      btnname="Get started"
      sechead="We serve quality"
      thirdhead='We undertake task-based projects requiring the delivery of tangible results in the form of either cell site production or network quality improvement and have consistently met with or exceeded the Key Performance Indicators (KPI).'
      imagef="/imgsec.png"
   />
   <Contact/>
    </div>
  )
}

export default About