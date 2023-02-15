import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header'
import CategoryCard from '@/components/CategoryCard'
import Grid from '@/components/Grid'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Grid>
          <div className='col-span-full md:col-span-4'>
            <CategoryCard />
          </div>
          <div className='col-span-full md:col-span-4'>
            <CategoryCard />
          </div>
          <div className='col-span-full md:col-span-4'>
            <CategoryCard />
          </div>
        </Grid>
      </div>
    </>
  )
}
