import LandlordServices from '@/components/visa-and-ticking/LandlordServices'
import ROIMarketAnalysis from '@/components/visa-and-ticking/ROIMarketAnalysis'
import TenantServices from '@/components/visa-and-ticking/TenantServices'
import TravelFaq from '@/components/visa-and-ticking/TravelFaq'
import VisaTicketingServices from '@/components/visa-and-ticking/VisaTicketingServices'
import React from 'react'

const page = () => {
  return (
    <div>
        <VisaTicketingServices/>
        <TenantServices/>
        <LandlordServices/>
        <ROIMarketAnalysis/>
        <TravelFaq/>
    </div>
  )
}

export default page
