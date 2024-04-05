'use client'

import { useCart } from "@/hooks/useCart"
import Link from "next/link"
import { MdArrowBack } from "react-icons/md"
import Headings from "../components/Headings"
import Button from "../components/Button"
import ItemContent from "./ItemContent"


const CartClient = () => {
    const { cartProducts } = useCart()

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">Yuor cart is empty</div>
                <div>
                    <Link href={`/`} className="
                    flex items-center gap-1
                    mt-2
                    text-slate-500"
                    >
                        <MdArrowBack />
                        <span>Start shopping</span>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Headings title="Shopping Cart" center />
            <div className="
            grid grid-cols-5 items-center gap-4
            pb-2 mt-8
            text-xs
            ">
                <div className="uppercase justify-self-start">product</div>
                <div className="uppercase justify-self-center">price</div>
                <div className="uppercase justify-self-center">quantity</div>
                <div className="uppercase justify-self-end">total</div>
            </div>
            <div>
                {cartProducts && cartProducts.map((item) => {
                    return <ItemContent key={item.id} item={item} />
                })}
            </div>
            <div className="
            flex items-center gap-4 justify-between
            border-t-[1.2px] border-slate-200
            mt-4 py-4">
                <div className="w-[90px]">
                    <Button label="Clear Cart" onClick={() => { }} small outline />
                </div>
                <div className="flex flex-col gap-1 items-start">
                    <div className="flex items-center justify-between gap-4 w-full text-base font-semibold">
                        <span>Subtotal</span>
                        <span>$1000</span>
                    </div>
                    <p className="text-slate-500">Taxes and shipping calculate at checkout</p>
                    <Button label="Checkout" onClick={() => {}}  />
                    <Link href={`/`} className="
                    flex items-center gap-1
                    mt-2
                    text-slate-500"
                    >
                        <MdArrowBack />
                        <span>Continue shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartClient