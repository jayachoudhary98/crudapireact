import React from 'react'

const Commoon = (props) => {
  return (
<>
    <section id='header' className='pt-5'>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-md-6 pt-lg-0 order-2 order-lg-1'>
            <h1 className='pt-5'>{props.name}<strong className='brand'>{props.sechead}</strong></h1>
           <h2 className='my-3'>{props.thirdhead}</h2>
           <div className='mt-3'>
            <a href='' className='btn-get-started'>{props.btnname}</a>
           </div>
          </div>
      <div className='col-lg-6 order-1 order-lg-2 header-img'> 
      <img style={{width: 650}} src={props.imagef} alt="homepage" />
      </div>
        </div>

      </div>
    </section>
    </>  )
}

export default Commoon