/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  NewClaim1,
} from '../../../_metronic/partials/modules'

const ListOfPendingClaimPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-12 card'>
        <NewClaim1
            className='card-xl mb-xl-2'
            chartColor='primary'
        />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const ListOfPendingClaimWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>New Claim</PageTitle>
      <ListOfPendingClaimPage />
    </>
  )
}

export {ListOfPendingClaimWrapper}
