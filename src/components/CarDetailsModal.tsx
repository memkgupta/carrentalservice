'use client'
import React, { Fragment } from 'react'
import { useState } from 'react'
import { Dialog,Transition } from '@headlessui/react'
import { CarCardProps } from '@/types'
import Image from 'next/image'
import { CustomButton } from '.'
const CarDetailsModal = ({isOpen,closeModal,car}:{isOpen:boolean,closeModal:()=>void,car:CarCardProps}) => {
 
    return (
     <>
      <Transition appear show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={closeModal} className={"relative z-10"}>
        <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0'
        leave='ease-in duration-200' 
        enterTo='opacity-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25'/>
        </Transition.Child>
     <div className='fixed inset-0 overflow-y-auto'>
        <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95'
        leave='ease-in duration-200' 
        enterTo='opacity-100 scale-100'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
             <Dialog.Panel className={"relative w-full max-w-lg max-h-[90vh] transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-12"}>
                <button type='button' onClick={closeModal}
                className='bg-yellow-100 w-fit z-10 top-2 right-2 absolute rounded-full p-2'>
                    <Image src={"/close.svg"} alt='close' width={20} height={20}/>
                </button>
        <div className='
        flex-1 flex flex-col gap-3
        '>

            <div className='
            relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
<Image alt='car model' className='object-contain' fill  src={"/hero.png"} />
            </div>
            <div className='flex gap-3'>
                <div className="flex-1 relative w-full h-24 bg-yellow-50">
                <Image alt='car model' className='object-contain' fill  src={"/hero.png"} />
                </div>
                <div className="flex-1 relative w-full h-24 bg-yellow-50">
                <Image alt='car model' className='object-contain' fill  src={"/hero.png"} />
                </div>
                <div className="flex-1 relative w-full h-24 bg-yellow-50">
                <Image alt='car model' className='object-contain' fill  src={"/hero.png"} />
                </div>
            </div>
        </div>
         
        </Dialog.Panel>
        </Transition.Child>
        </div>
     </div>
      </Dialog>
      </Transition>
     </>
  )
}

export default CarDetailsModal