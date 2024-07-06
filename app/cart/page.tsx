import { Separator } from '@/components/ui/separator'
import { Table } from '@/components/ui/table'
import React from 'react'
import { ProductColumn } from './components/columns';
import CartPageClient from './components/clients';

interface ProductClientProps {
  data: ProductColumn[];
}

const CartPage: React.FC<ProductClientProps> = ({data}) => {
  return (
    <>
      <CartPageClient data={[]}/>
      <Separator />
    </>
  );
};

export default CartPage