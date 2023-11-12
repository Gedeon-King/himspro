/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../../../../app/modules/accounts/components/settings/SettingsModel'


type Props = {
  className: string
  chartColor: string
}

const NewClaim1: React.FC<Props> = ({className, chartColor}) => {
    const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  return (
    <div className={`${className}`}>
        <div
            className='card-title mt-2 border-0 cursor-pointer p-0'
            role='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_account_profile_details'
            aria-expanded='true'
            aria-controls='kt_account_profile_details'
        >
            <div className='card-title m-0'>
                <h3 className='fw-bolder m-0 fs-7 text-gray-500'>Search For PHIS Member (200016349-0)</h3>
            </div>
        </div>

        <div>
            <form noValidate className='form'>
                <div className=' border-top p-4'>
                    <div className='row mb-1'>
                        <label className='col-lg-2 col-form-label required fw-bold fs-6 ms-6'>Card No</label>

                        <div className='col-lg-7 me-12'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-2 mb-lg-0'
                                        placeholder='Card Number'
                                        // {...formik.getFieldProps('fName')}
                                    />
                                    {/* {formik.touched.fName && formik.errors.fName && ( */}
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{/* formik.errors.fName */}</div>
                                    </div>
                                    {/* )} */}
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-2'>
                            <div className='row'>
                                <button type='submit' className='btn btn-primary' disabled={loading}>
                                {!loading && 'Search'}
                                {loading && (
                                    <span className='indicator-progress' style={{display: 'block'}}>
                                    Please wait...{' '}
                                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                    </span>
                                )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export {NewClaim1}
