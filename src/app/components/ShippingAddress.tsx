import React from 'react'
import { useForm } from 'react-hook-form'
import { ShippingFormInput, shippingFormSchema } from '../../constants/types'
import {zodResolver} from '@hookform/resolvers/zod'

export const ShippingAddress = () => {
  const {register, handleSubmit, formState:{errors}} = useForm<ShippingFormInput>({
    resolver: zodResolver(shippingFormSchema)
  })
  return (
    <div className='w-full flex flex-col lg:w-6/10 rounded-xl shadow-xl border border-gray-100'>
        {/* TITLE */}
      <header className="flex justify-start items-center pl-4 pt-4 h-10">
        <h1>Shipping Address</h1>
      </header>
    
      <form className="w-full h-120 flex flex-col items-center gap-4 mt-7 py-2 bg-blue-100">
        <div className='w-full flex flex-col items-start gap-2'>
          <label htmlFor="name" className=''>Name</label>
          <input id='name' type='text' placeholder='James Smith' {...register('name')}/>
          {errors.name && <p>{errors.name.message}</p>}
        </div>

      </form>

    </div>
  )
}
