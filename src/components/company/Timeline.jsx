import React from 'react'

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started with a vision to transform financial management for everyone.',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Expanded our services to over 150 countries, reaching millions of users.',
  },
  {
    year: '2024',
    title: 'Innovation Leader',
    description: 'Recognized as the leading financial technology platform in the industry.',
  },
]

const Timeline = () => {
  return (
    <div className="bg-[#000300] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00df9a]">Our Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From idea to innovation
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <span className="text-[#00df9a]">{milestone.year}</span>
                  {milestone.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{milestone.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


export default Timeline 