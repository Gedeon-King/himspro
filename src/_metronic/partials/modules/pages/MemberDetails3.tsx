/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import {getLayout, ILayout, LayoutSetup, useLayout} from '../../../../_metronic/layout/core'

const MemberDetails3: React.FC = () => {
  const {setLayout} = useLayout()
  const [tab, setTab] = useState('H2')
  const [config, setConfig] = useState<ILayout>(getLayout())
  const [configLoading, setConfigLoading] = useState<boolean>(false)
  const [resetLoading, setResetLoading] = useState<boolean>(false)

  const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    const updatedData = {...config, ...fieldsToUpdate}
    setConfig(updatedData)
  }

  const updateConfig = () => {
    setConfigLoading(true)
    try {
      LayoutSetup.setConfig(config)
    } catch (error) {
      setConfig(getLayout())
    }
    setTimeout(() => {
      setLayout(config)
      setConfigLoading(false)
    }, 1000)
  }

  const reset = () => {
    setResetLoading(true)
    setTimeout(() => {
      setConfig(getLayout())
      setResetLoading(false)
    }, 1000)
  }

  return (
    <>
      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item fs-7'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'H1'})}
                onClick={() => setTab('H1')}
                role='tab'
              >
                Member Benefits and Exclusions
              </a>
            </li>
            <li className='nav-item fs-7'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'H2'})}
                onClick={() => setTab('H2')}
                role='tab'
              >
                Administrative Charges
              </a>
            </li>
            <li className='nav-item fs-7'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'H3'})}
                onClick={() => setTab('H3')}
                role='tab'
              >
                Previous Claims No.
              </a>
            </li>
            <li className='nav-item fs-7'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'H4'})}
                onClick={() => setTab('H4')}
                role='tab'
              >
                Procedure Authorisation
              </a>
            </li>
          </ul>
        </div>
        {/* end::Header */}

        {/* begin::div */}
        <div className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
              <div className={clsx('tab-pane', {active: tab === 'H1'})}>
                <div className='row mb-10'>
                  1
                </div>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'H2'})}>
                <div className='row mb-10'>
                  2
                </div>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'H3'})}>
                <div className='row mb-10'>
                  3
                </div>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'H4'})}>
                <div className='row mb-10'>
                  4
                </div>
              </div>
            </div>
          </div>
          {/* end::Body */}
        </div>
        {/* end::div */}
      </div>
    </>
  )
}

export {MemberDetails3}
