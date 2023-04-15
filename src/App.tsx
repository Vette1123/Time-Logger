import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Card from './components/Card'
import Result from './components/Result'

function App() {
  const { register, watch } = useForm()
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  const formValues = watch()

  useEffect(() => {
    setHours(
      formValues?.hours
        ?.filter((number: any) => !isNaN(number))
        ?.reduce((a: number, b: number) => a + b, 0)
    )
    setMinutes(
      formValues?.minutes
        ?.filter((number: any) => !isNaN(number))
        ?.reduce((a: number, b: number) => a + b, 0)
    )
    setTotal(hours + minutes / 60)
  }, [formValues])

  return (
    <main className='grid place-items-center'>
      <Card register={register} watch={watch} />
      <Result total={total} />
    </main>
  )
}

export default App
