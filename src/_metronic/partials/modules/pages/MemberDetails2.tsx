/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers'

export function MemberDetails2() {
  return (
    <>
      <div className='card mb-5 mb-xl-10 h-auto'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0 fs-5'>Consult. Details</h3>
          </div>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-3 fw-bold text-muted fs-7'>Provider</label>

            <div className='col-lg-9'>
              <span className='fw-bolder fs-6 text-dark'>TEST APEX 1</span>
            </div>
          </div>
          <div className='row mb-7'>
            <label className='col-lg-3 fw-bold text-muted fs-7'>Visit Type</label>

            <div className='col-lg-9'>
              <span className='fw-bolder fs-6 text-dark'>Out-Patient</span>
            </div>
          </div>
          <div className='row mb-7'>
            <label className='col-lg-3 fw-bold text-muted'>Date of Consult.</label>

            <div className='col-lg-9'>
              <span className='fw-bolder fs-6 text-dark'>9th November 2023</span>
            </div>
          </div>
          <div className='row mb-7'>
            <label className='col-lg-3 fw-bold text-muted'>Folder ID</label>

            <div className='col-lg-9'>
                <form className='' action="">
                    <input className='' type="text" />
                    <button className='' type="submit">Save ID</button>
                </form>
            </div>
          </div>
          <div className='row mb-4'>
            <label className='col-lg-3 fw-bold text-muted'>HMS Visit No</label>

            <div className='col-lg-9'>
                <input type="text" />
            </div>
          </div>
        </div>

        <div className='card-footer p-9'>
          <div className='row'>
            <div className='col-lg-6'>
              <span className='fw-bolder fs-6 text-dark'>TEST APEX 1</span>
            </div>

            <div className='col-lg-6'>
              <span className='fw-bolder fs-6 text-dark'>TEST APEX 1</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
