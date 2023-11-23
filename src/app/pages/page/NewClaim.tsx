/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  NewClaim1,
  NewClaim2,
} from '../../../_metronic/partials/modules'

const NewClaimPage: FC = () => (
  <>
    <NewClaim1 />

    {/* begin::Row */}
    <NewClaim2 className='mb-5 mb-xl-8' />
    {/* end::Row */}
  </>
)

const NewClaimWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>New Claim</PageTitle>
      <NewClaimPage />
    </>
  )
}

export {NewClaimWrapper}
