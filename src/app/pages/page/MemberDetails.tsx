/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  NewClaim1,
  MemberDetails1,
  MemberDetails2,
  MemberDetails3
} from '../../../_metronic/partials/modules'

const MemberDetailsPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-6'>
        <MemberDetails1 />
      </div>
      <div className='col-xxl-6'>
        <MemberDetails2 />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-12'>
        <MemberDetails3 />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const MemberDetailsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>New Claim</PageTitle>
      <MemberDetailsPage />
    </>
  )
}

export {MemberDetailsWrapper}
