import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './main-nav'
import getCategories from '@/actions/get-categories'
import IconButton from './ui/icon-button'
import { Expand, Search, ShoppingCart } from 'lucide-react'
import { Input } from './ui/input'

export const revalidate = 0

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-8 gap-x-2">
            <p className="font-bold text-xl">TOKO OREN</p>
          </Link>
          <MainNav data={categories} />
          <Input/>
          <Link href="/cart" className="flex flex-end justify-end">
            <ShoppingCart size={25} />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Navbar