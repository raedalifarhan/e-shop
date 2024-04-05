'use client'

import { formatPrice } from "@/utils/formatPrice"
import { TruncateText } from "@/utils/TruncateText"
import { Rating } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Props {
    product: any
}

const ProductCard = ({ product }: Props) => {

    const router = useRouter();
    const productRating =
        product.reviews.reduce((acc: number, item: any) =>
            item.rating + acc, 0) /
        product.reviews.length;

    return (
        <div
            onClick={() => router.push(`/product/${product.id}`)}
            className="
            col-span-1
            cursor-pointer
            border-[1.2px]
            border-slate-200
            bg-slate-50
            p-2
            hover:scale-105
            transition
            text-sm
            text-center
            rounded-sm
            "
        >
            <div className="
        flex
        flex-col
        items-center
        gap-1
        w-full
        ">
                <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                        fill
                        src={product.images[0].image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="mt-4">{TruncateText(product.name)}</div>
                <div>
                    <Rating value={productRating} readOnly />
                </div>
                <div>{product.reviews.length} reviews</div>
                <div>{formatPrice(product.price)}</div>
            </div>
        </div>
    )
}

export default ProductCard