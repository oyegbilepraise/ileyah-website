'use client'
import Button from '@/components/global/Button';
import { IconChevronRight, IconHome, IconHome2, IconStar } from '@tabler/icons-react';
import React from 'react'
import Transactions from './Transactions';

const Page = () => {
  return (
    <>
      <div className='text-4xl'>
        Welcome, Landlord 👋🏿
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-10 mt-5">
        <div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
            <div class=" bg-[#F0F3FA] shadow rounded-xl px-8 py-6 hover:bg-gray-50 cursor-pointer h-[100px]">
              <div class="flex justify-between">
                <div>
                  <div class="text-3xl font-bold">100</div>
                  <div className='text-sm mt-2'>Total House</div>
                </div>
                <div class="my-auto">
                  <IconChevronRight color='gray' />
                </div>
              </div>
            </div>
            <div class=" bg-[#F0F3FA] shadow rounded-xl px-8 py-6 hover:bg-gray-50 cursor-pointer h-[100px]">
              <div class="flex justify-between">
                <div>
                  <div class="text-3xl font-bold">100</div>
                  <div className='text-sm mt-2'>Rented Apartments</div>
                </div>
                <div class="my-auto">
                  <IconChevronRight color='gray' />
                </div>
              </div>
            </div>
            <div class=" bg-[#F0F3FA] shadow rounded-xl px-8 py-6 hover:bg-gray-50 cursor-pointer h-[100px]">
              <div class="flex justify-between">
                <div>
                  <div class="text-3xl font-bold">100</div>
                  <div className='text-sm mt-2'>Vacant Apartments</div>
                </div>
                <div class="my-auto">
                  <IconChevronRight color='gray' />
                </div>
              </div>
            </div>
          </div>
        <Transactions />
        </div>
        <div className='mr-10'>
          <div className="bg-blue-600 rounded-xl p-4 inline-flex w-full">
            <IconHome2 color='white' />
            <p className='text-white mx-5'>Claim Your <span className='font-bold'>SIGNUP</span> Bonus </p>
          </div>
          <div className='mt-3 bg-[#F0F3FA] shadow rounded-lg pl-10 pr-10 pt-10 text-xl h-[350px] relative'>
            <p className='text-5xl font-medium'>No more Tenant Palava</p>
            <div className="flex mt-5 font-bold">
              <Button className='inline-flex' variant='outlined' color='black' size='sm' rightIcon={<IconChevronRight />} >Get Started </Button>
            </div>
            <img src="/assets/images/house-svg.png" alt="Image" class="absolute bottom-0 right-0 w-32 h-32" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;