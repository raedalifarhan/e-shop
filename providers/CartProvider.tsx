'use client'

import { CartContextProvider } from "@/hooks/useCart"

interface Props {
    children: React.ReactNode
}

const CartProvider = ({ children }: Props) => {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    )
}

export default CartProvider