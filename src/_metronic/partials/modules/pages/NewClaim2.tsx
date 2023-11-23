/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Link} from 'react-router-dom'

type Props = {
  className: string
}

const NewClaim2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-80px'>Surname</th>
                <th className='min-w-80px'>Firstname</th>
                <th className='min-w-80px'>Othername</th>
                <th className='min-w-150px'>Insurance Company</th>
                <th className='min-w-150px'>Employer</th>
                <th className='min-w-150px'>Membership No.</th>
                <th className='min-w-150px'>Hearth Plan</th>
                <th className='min-w-120px'>Hearth Status</th>
                <th className='min-w-100px'>Status</th>
                <th className='min-w-50px'>Sex</th>
                <th className='min-w-50px'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}

            {/* begin::Table body */}
            <tbody>
              <tr>
                <td><Link className='text-dark fw-bold text-hover-primary fs-6' to='/claim/memberclaim'>OFORI</Link></td>
                <td><Link className='text-dark fw-bold text-hover-primary fs-6' to='/claim/memberclaim'>KENNETH</Link></td>
                <td><Link className='text-dark fw-bold text-hover-primary fs-6' to='/claim/memberclaim'>EARLVIN</Link></td>
                <td><Link className='text-dark fw-bold text-hover-primary fs-6' to='/claim/memberclaim'>APEX HEALTH INSURANCE</Link></td>
                <td><Link className='text-dark fw-bold text-hover-primary fs-6' to='/claim/memberclaim'>APEX HEALTH INSURANCE(CORPORATE)</Link></td>
                <td><Link className='text-dark fw-bold text-hover-primary fs-6' to='/claim/memberclaim'>200016349-0</Link></td>
                <td><Link className='text-dark fw-bold text-hover-primary fs-6' to='/claim/memberclaim'>APEX PLATINUM</Link></td>
                <td>
                  <span className='badge badge-light-success'>ACTIVE</span>
                </td>
                <td>
                  <span className='badge badge-light-success'>ACTIVE</span>
                </td>
                <td><Link className='text-dark fw-bold text-hover-primary fs-6' to='/claim/memberclaim'>MALE</Link></td>
                <td>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {NewClaim2}
