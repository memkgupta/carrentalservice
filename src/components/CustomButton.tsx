'use client'
import React from 'react'
import Image from 'next/image'
import { CustomButtonPropsInterface } from '@/types'
const CustomButton = ({title,btnType,containerStyles,handleClick,rightIcon}:CustomButtonPropsInterface) => {
  return (
    <button disabled={false}
    type={btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
<span className={`flex w-full px-12 justify-between`}>
    <span className=' flex-grow text-center'>{title}</span> {rightIcon&&<Image src={rightIcon} alt={rightIcon} width={20} height={20}/>}
</span>
    </button>
  )
}

export default CustomButton