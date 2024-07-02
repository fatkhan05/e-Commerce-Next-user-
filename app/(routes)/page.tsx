import getBanner from '@/actions/get-banner'
import getProducts from '@/actions/get-products'
import Banner from '@/components/banner'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({isFeatured: true})

  const banner = await getBanner("b6e0dcd4-5d71-4447-a902-d9c63bfd4d25");

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Banner data={ banner } />
        <div className='flex flex-col gap-y-8 p-4 sm:px-6 lg:px-8'>
          <ProductList title="Produk Unggulan" items={ products } />
        </div>
      </div>
    </Container>
  )
}

export default HomePage