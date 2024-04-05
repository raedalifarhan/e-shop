'use client'

import { CartProductType } from "@/types/Product"

interface Props {
    cartCounter?: boolean
    cartProduct: CartProductType
    handleQtyIncrease: () => void
    handleQtyDecrease: () => void
}

const btnStyle = `px-2 rounded-sm border-[1.2px] border-slate-300 font-semibold`

const SetQuantity = ({
    cartCounter,
    cartProduct,
    handleQtyIncrease,
    handleQtyDecrease
}: Props) => {
    return (
        <div className="flex gap-6 items-center">
            <div className="flex items-center gap-4">
                {cartCounter ? null :
                    <span className="uppercase font-semibold">Quantity:</span>
                }
                <div className="flex items-center gap-4 text-base">
                    <button onClick={handleQtyIncrease}
                        className={btnStyle}
                    >-</button>

                    <div>{cartProduct.quantity}</div>

                    <button onClick={handleQtyDecrease} className={btnStyle}>+</button>
                </div>
            </div>
        </div>
    )
}

export default SetQuantity