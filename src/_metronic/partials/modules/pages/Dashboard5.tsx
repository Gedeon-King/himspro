/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
  chartColor: string
}

const Dashboard5: React.FC<Props> = ({className, chartColor}) => {

  return (
    <div className={`card ${className} h-80`}>
      {/* begin::Body */}
      <div className='card-body p-0 d-flex justify-content-between flex-column overflow-hidden'>
        {/* begin::Hidden */}
        <div className='d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3'>
          <div className='me-2'>
            <span className={`fw-bold text-${chartColor} d-block fs-5`}>APPROVED AUTHORIZATION</span>
          </div>

          {/* <div className='fw-bold fs-3 text-gray-800'>0</div> */}
        </div>
        {/* end::Hidden */}
      </div>
    </div>
  )
}

export {Dashboard5}
