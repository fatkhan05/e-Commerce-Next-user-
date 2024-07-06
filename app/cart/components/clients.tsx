'use client'
import { Separator } from "@/components/ui/separator";
import { Table } from "@/components/ui/table";
import React from "react";
import { ProductColumn } from "./columns";

interface ProductClientProps {
  data: ProductColumn[];
}

const CartPageClient: React.FC<ProductClientProps> = ({ data }) => {
  return (
    <>
      <div className="p-4 flex flex-center justify-center text-3xl font-bold">
        Your Cart (0 items)
      </div>
      <Table/>
      <Separator />
    </>
  );
};

export default CartPageClient;