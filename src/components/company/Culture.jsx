import React from 'react'

const Culture = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00df9a]">Our Culture</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built on trust and innovation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We foster a culture of creativity, collaboration, and continuous growth. Our team is driven by the desire to make a difference in people's financial lives.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name} className="flex flex-col bg-white/5 p-8 rounded-2xl">
              <div className="flex items-center gap-x-3">
                <value.icon className="h-7 w-7 text-[#00df9a]" />
                <h3 className="text-lg font-semibold leading-7 text-white">{value.name}</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const values = [
  {
    name: 'Innovation First',
    description: 'We embrace new ideas and technologies to create better solutions.',
    icon: props => (
      <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    name: 'Customer Focus',
    description: 'Everything we do is centered around providing value to our customers.',
    icon: props => (
      <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    name: 'Integrity',
    description: 'We maintain the highest standards of transparency and ethical conduct.',
    icon: props => (
      <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default Culture 