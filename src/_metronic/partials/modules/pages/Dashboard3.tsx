/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
  chartColor: string
}

const Dashboard3: React.FC<Props> = ({className, chartColor}) => {

  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body p-0 d-flex justify-content-between flex-column overflow-hidden'>
        {/* begin::Hidden */}
        <div className='d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3'>
          <div className='me-2'>
            <span className='fw-bold text-gray-800 d-block fs-3'>CLAIMS GENERATED</span>

            <span className='text-gray-400 fw-semibold'>No Claim Generated</span>
          </div>

          <div className={`fw-bold fs-3 text-${chartColor}`}>GHC 0.00</div>
        </div>
        {/* end::Hidden */}
      </div>
    </div>
  )
}

export {Dashboard3}
