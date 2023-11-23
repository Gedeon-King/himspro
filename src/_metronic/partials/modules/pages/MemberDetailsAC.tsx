/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../../_metronic/partials'
import {useLocation} from 'react-router'

const MemberDetailsAC: React.FC = () => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10 h-65'>
      <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0 fs-5'>Member Details</h3>
          </div>
        </div>

      <div className='card-body pt-6 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-100px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metronic' />
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Insurer</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>Apex Health Insurance</span>
                  </div>
                </div>
                
                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Full name</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>OFORI KENNETH EARLVIN</span>
                  </div>
                </div>

                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Sex</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>Male</span>
                  </div>
                </div>

                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Tel</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>0558300037</span>
                  </div>
                </div>
                
                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>DOB</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>9 May 1994</span>
                  </div>
                </div>

                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Age</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Mem. No.</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>200016349-0</span>
                  </div>
                </div>
                
                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Employer</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>APEX HEALTH INSURANCE</span>
                  </div>
                </div>

                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Plan</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>APEX PLATINUM</span>
                  </div>
                </div>

                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Exp. Date</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text-dark'>31 December 2023</span>
                  </div>
                </div>
                
                <div className='row mb-7'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Card Status</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text btn btn-success'>Active</span>
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-4 fw-bold text-muted fs-8'>Plan Status</label>

                  <div className='col-lg-8'>
                    <span className='fw-bolder fs-7 text btn btn-success'>Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {MemberDetailsAC}
