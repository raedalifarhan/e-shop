'use client'
import { CartProductType } from "@/types/Product"
import { formatPrice } from "@/utils/formatPrice"
import { TruncateText } from "@/utils/TruncateText"
import Image from "next/image"
import Link from "next/link"
import SetQuantity from "../components/products/SetQuantity"
import { useCart } from "@/hooks/useCart"

interface Props {
    item: CartProductType
}

const ItemContent = ({ item }: Props) => {

    const {handleRemoveProductFromCart, handleCartQtyDecrease, handleCartQtyIncrease} = useCart()
    return (
        <div className="
        grid grid-cols-5 items-center gap-4
        text-xs md:text-sm
        border-t-[1.5px] border-slate-200
        py-4
        ">
            <div className="
            col-span-2
            justify-self-start
            flex gap-2 md:gap-4
            ">
                <Link className="relative w-[70px] aspect-square"
                    href={`/product/${item.id}`}>
                    <Image
                        src={item.selectedImage.image}
                        alt={item.name}
                        fill
                        className="object-contain" />
                </Link>
                <div className="flex flex-col justify-between">
                    <Link href={`/product/${item.id}`}>{TruncateText(item.name)}</Link>
                    <div>{item.selectedImage.color}</div>
                    <div className="w-[70px]">
                        <button className="text-slate-500 underline"
                            onClick={() => {handleRemoveProductFromCart(item)}}
                        >Remove</button>
                    </div>
                </div>
            </div>
            <div className="uppercase justify-self-center">{formatPrice(item.price)}</div>
            <div className="uppercase justify-self-center">
                <SetQuantity
                    cartProduct={item}
                    cartCounter={true}
                    handleQtyDecrease={() => {handleCartQtyDecrease(item)}}
                    handleQtyIncrease={() => {handleCartQtyIncrease(item)}}
                />
            </div>
            <div className="uppercase justify-self-end">
                {formatPrice(item.price * item.quantity)}
            </div>
        </div>
    )
}

export default ItemContent