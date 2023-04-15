import { useState } from 'react'
import { FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { stats } from '../../data'

interface IStat {
  register: UseFormRegister<FieldValues>
  watch: UseFormWatch<FieldValues>
}

function Card(props: IStat) {
  const { register } = props
  const [fields, setFields] = useState(stats)

  const handleAddClick = () => {
    fields.forEach((stat) => {
      stat.fieldsArray.push({ key: stat.key })
    })
    setFields([...fields])
  }

  return (
    <div>
      <dl className='mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-2 md:divide-y-0 md:divide-x'>
        {fields.map((item) => (
          <div key={item.name} className='px-4 py-5 sm:p-6 space-y-4'>
            <dt className='text-lg font-bold text-gray-900'>{item.name}</dt>
            {item.fieldsArray.map((field, index) => (
              <div
                key={index}
                className='flex justify-center items-center gap-x-3'
              >
                <input
                  type='number'
                  {...register(`${field.key}.${index}`, {
                    required: true,
                    valueAsNumber: true,
                  })}
                  placeholder='Type here'
                  className='input input-bordered input-info w-full max-w-xs text-xl text-pink-50'
                />
                <button className='btn btn-square' onClick={handleAddClick}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 4.5v15m7.5-7.5h-15'
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ))}
      </dl>
    </div>
  )
}
export default Card
