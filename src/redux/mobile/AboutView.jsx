import React from 'react'
import about from '../../about.jpg'
const AboutView = () => {
    return (
       
      <div className='container-about'  style={{
        backgroundImage: `url(${about})`,color:"white"
    }}>
          <h1>
          Headquarters Office Address 
          </h1>
          <hr/>
          <address>
              410 Terry Avenue North Seattle, <br />
              WA 98109 United States.
          </address>
      </div>
  )
}

export default AboutView