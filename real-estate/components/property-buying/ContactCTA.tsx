import React from 'react'

const ContactCTA = () => {
    return (
        <section className="py-16 max-w-6xl mx-auto px-6">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white shadow-2xl">
                <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
                <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                    Our team is available to answer your questions and schedule property viewings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-slate-900 rounded-xl shadow-lg hover:shadow-xl transition font-semibold">
                        Browse Properties
                    </button>
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold">
                        Contact Our Team
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ContactCTA
