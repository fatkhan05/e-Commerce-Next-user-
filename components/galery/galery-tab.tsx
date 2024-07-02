import React from 'react'
import { Image as ImageType} from "@/types"
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface GaleryTabProps {
  image: ImageType
}

const GaleryTab: React.FC<GaleryTabProps> = ({image}) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({selected}) => (
        <div>
          <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover"
            />
          </span>
          <span className={cn(
            "abselute inset-0 rounded-md ring-2 ring-ofset-2",
            selected ? "ring-black" : "ring-transparent"
          )}></span>
        </div>
      )}
    </Tab>
  )
}

export default GaleryTab