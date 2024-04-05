'use client'

import { CartProductType, SelectedImageType } from "@/types/Product"

interface Props {
  images: SelectedImageType[]
  cartProduct: CartProductType
  handleColorSelect: (value: SelectedImageType) => void
}

const SetColor = ({ images, cartProduct, handleColorSelect }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="uppercase font-semibold">color: </span>
        <div className="flex items-center gap-1">{images && images.map((image) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center ${cartProduct.selectedImage.color === image.color
                ? 'border-[1.5px]'
                : 'border-none'
                }`}>
              <div style={{ background: image.colorCode }} className={`
              h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer`}></div>
            </div>
          )
        })}</div>
      </div>
    </div>
  )
}

export default SetColor