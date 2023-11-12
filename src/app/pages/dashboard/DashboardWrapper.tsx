/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  Dashboard1,
  Dashboard2,
  Dashboard3,
  Dashboard4,
  Dashboard5,
  Dashboard6,
  Dashboard7,
  Dashboard8,
} from '../../../_metronic/partials/modules'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <Dashboard1
          className='card-xl mb-xl-4'
          chartColor='primary'
        />
      </div>
      <div className='col-xxl-4'>
        <Dashboard2
          className='card-xl mb-xl-4'
          chartColor='success'
        />
      </div>
      <div className='col-xxl-4'>
        <Dashboard3
          className='card-xl mb-xl-4'
          chartColor='danger'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <Dashboard4
          className='card-xl mb-xl-4'
          chartColor='primary'
        />
      </div>
      <div className='col-xxl-4'>
        <Dashboard5
          className='card-xl mb-xl-4'
          chartColor='warning'
        />
      </div>
      <div className='col-xxl-4'>
        <Dashboard6
          className='card-xl mb-xl-4'
          chartColor='success'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-6'>
        <Dashboard7 className='card-xxl mb-xl-3' />
      </div>
      <div className='col-xl-6'>
        <Dashboard8 className='card-xxl mb-5 mb-xl-4' />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
