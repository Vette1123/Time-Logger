import React from 'react'

function Result({ total }: { total: number }) {
  return (
    <div className='stats bg-gray-700 text-primary-content my-2'>
      <div className='stat'>
        <div className='stat-title text-green-50'>TOTAL</div>
        <div className='stat-value'>{total} hrs</div>
        <div className='stat-actions'></div>
      </div>

      <div className='stat'>
        <div className='stat-title text-green-50'>( LEFT OF 8 HOURS )</div>
        <div className='stat-value'>{8 - total} hrs</div>
        <div className='stat-actions'></div>
      </div>
    </div>
  )
}

export default Result
