/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-5' style={{backgroundColor: 'whitesmoke'}}></div>
        </div>
      </div>

      <AsideMenuItemWithSub
        to='/administrative'
        title='Administrative Services'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItem to='/administrative/newclaim' title='New Claim' hasBullet={true} />
        <AsideMenuItem to='/administrative/listofpendingclaim' title='List of Pending Claims' hasBullet={true} />
      </AsideMenuItemWithSub>
      
      <AsideMenuItemWithSub
        to='/claim'
        title='Claim Office'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItem to='/claim/listofpendingclaim' title='List of Pending Claims' hasBullet={true} />
        <AsideMenuItem to='/claim/listofsubmitttedclaim' title='List of Submitted Claims' hasBullet={true} />
        <AsideMenuItem to='/claim/claimfinancial' title='Claims Financials' hasBullet={true} />
        <AsideMenuItem to='/claim/queriedclaim' title='Queried Claims' hasBullet={true} />
        <AsideMenuItem to='/claim/claimreport' title='Claims Reports' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/preauthorisation'
        title='Procedure Authorisation'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItem to='/preauthorisation/newpreauthorisation' title='New Pre-Authorisation' hasBullet={true} />
        <AsideMenuItem to='/preauthorisation/listofpendingpreauthorisation' title='List of Pending Pre-Authorisation' hasBullet={true} />
        <AsideMenuItem to='/preauthorisation/listofapprovedpreauthorisation' title='List of Approved Pre-Authorisation' hasBullet={true} />
        <AsideMenuItem to='/preauthorisation/listoftemplate' title='List Of Templates' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/authorisation'
        title='Items Authorisation'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItem to='/authorisation/newauthorisation' title='New Authorisation' hasBullet={true} />
        <AsideMenuItem to='/authorisation/listofpendingauthorisation' title='List of Pending Authorisation' hasBullet={true} />
        <AsideMenuItem to='/authorisation/listofapprovedauthorisation' title='List of Approved Authorisation' hasBullet={true} />
      </AsideMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-5'></div>
        </div>
      </div>

      <AsideMenuItemWithSub
        to='/utilies'
        title='Admin Utilies'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItem to='/utilies/systemusers' title='System Users' hasBullet={true} />
        <AsideMenuItem to='/utilies/securitylevels' title='Security Levels' hasBullet={true} />
        <AsideMenuItem to='/utilies/permissionroles' title='Permission Roles' hasBullet={true} />
        <AsideMenuItem to='/utilies/provideritems' title='Provider Items' hasBullet={true} />
        <AsideMenuItem to='/utilies/pendingitems' title='Pending Items' hasBullet={true} />
      </AsideMenuItemWithSub>
    </>
  )
}
