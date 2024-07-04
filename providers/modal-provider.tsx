'use client'
import PreviewModal from '@/components/preview-modal'
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // jika is not mounted, maka kembalikan sebagai null
  if (!isMounted) {
    return null
  }

  // jika mounted tampilkan isinya
  return (
    <>
      <PreviewModal/>
    </>
  )
}

export default ModalProvider