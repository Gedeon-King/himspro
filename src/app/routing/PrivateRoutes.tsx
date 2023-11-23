import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { NewClaimWrapper } from '../pages/page/NewClaim'
import { MemberDetailsWrapper } from '../pages/page/MemberDetails'

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />

        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />

        <Route path='/administrative/newclaim' element={<NewClaimWrapper />} />
        <Route path='/administrative/listofpendingclaim' element={<NewClaimWrapper />} />

        <Route path='/claim/listofpendingclaim' element={<NewClaimWrapper />} />
        <Route path='/claim/listofsubmitttedclaim' element={<NewClaimWrapper />} />
        <Route path='/claim/claimfinancial' element={<NewClaimWrapper />} />
        <Route path='/claim/queriedclaim' element={<NewClaimWrapper />} />
        <Route path='/claim/claimreport' element={<NewClaimWrapper />} />
        <Route path='/claim/claimreport' element={<NewClaimWrapper />} />
        <Route path='/claim/claimreport' element={<NewClaimWrapper />} />
        <Route path='/claim/claimreport' element={<NewClaimWrapper />} />
        
        <Route path='/claim/memberclaim' element={<MemberDetailsWrapper />} />

        <Route path='/preauthorisation/newpreauthorisation' element={<NewClaimWrapper />} />
        <Route path='/preauthorisation/listofpendingpreauthorisation' element={<NewClaimWrapper />} />
        <Route path='/preauthorisation/listofapprovedpreauthorisation' element={<NewClaimWrapper />} />
        <Route path='/preauthorisation/listoftemplate' element={<NewClaimWrapper />} />

        <Route path='/authorisation/newauthorisation' element={<NewClaimWrapper />} />
        <Route path='/authorisation/listofpendingauthorisation' element={<NewClaimWrapper />} />
        <Route path='/authorisation/listofapprovedauthorisation' element={<NewClaimWrapper />} />

        <Route path='/utilies/systemusers' element={<NewClaimWrapper />} />
        <Route path='/utilies/securitylevels' element={<NewClaimWrapper />} />
        <Route path='/utilies/permissionroles' element={<NewClaimWrapper />} />
        <Route path='/utilies/provideritems' element={<NewClaimWrapper />} />
        <Route path='/utilies/pendingitems' element={<NewClaimWrapper />} />

        <Route path='builder' element={<BuilderPageWrapper />} />

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

// const SuspensedView: FC<WithChildren> = ({children}) => {
//   const baseColor = getCSSVariableValue('--kt-danger')
//   TopBarProgress.config({
//     barColors: {
//       '0': baseColor,
//     },
//     barThickness: 1,
//     shadowBlur: 5,
//   })
//   return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
// }

export {PrivateRoutes}
