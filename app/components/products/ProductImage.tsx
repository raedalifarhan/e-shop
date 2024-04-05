'use client'

import { CartProductType, SelectedImageType } from "@/types/Product"
import Image from "next/image";

interface Props {
  cartProduct: CartProductType
  product: any;
  handleColorSelect: (value: SelectedImageType) => void
}

const ProductImage = ({ cartProduct, product, handleColorSelect }: Props) => {

  const imageClassName = "h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]";

  return (
    <div className={`
    grid grid-cols-6 gap-2
    ${imageClassName}
    `}>
      <div className={`
      flex flex-col gap-4 items-center justify-center
      cursor-pointer
      border
      ${imageClassName}
      `}>
        {product && product.images.map((image: SelectedImageType) => {
          return (
            <div key={image.color} onClick={() => handleColorSelect(image)} className={`
            relative w-[80%]
            aspect-square
            rounded
            border-teal-300
            ${cartProduct.selectedImage.color === image.color ? 'border-[1.5px]' : 'border-none'}
            `}>
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              />
            </div>
          )
        })}
      </div>
      <div className='
      relative col-span-5 aspect-square
      '>
        <Image
          src={cartProduct.selectedImage.image}
          alt={cartProduct.name}
          fill
          className={`
          object-contain
          ${imageClassName}
          `}
        />
      </div>
    </div>
  )
}

export default ProductImage