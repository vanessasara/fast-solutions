import React from 'react'

const PropertDetails = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Comprehensive Property Information</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Every listing features detailed specifications and rich media
        </p>

        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Pricing & Investment Insights</h4>
                <p className="text-gray-600">Transparent pricing with market analysis and ROI projections</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Location Intelligence</h4>
                <p className="text-gray-600">Interactive maps, nearby amenities, and transportation access</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Complete Feature List</h4>
                <p className="text-gray-600">Bedrooms, bathrooms, parking, security, and all amenities</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Professional Photography</h4>
                <p className="text-gray-600">High-resolution interior, exterior, and aerial imagery</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Detailed Floor Plans</h4>
                <p className="text-gray-600">Complete layout diagrams with accurate dimensions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Virtual Tours</h4>
                <p className="text-gray-600">Immersive 3D walkthroughs for remote viewing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PropertDetails
