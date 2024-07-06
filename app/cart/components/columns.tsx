'use client'

import { ColumnDef } from "@tanstack/react-table";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  quantity: string;
  total: string;
};

export const column: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Item",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
];
