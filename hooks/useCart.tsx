import { CartProductType } from "@/types/Product";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number
    cartProducts: CartProductType[] | null
    handleAddProductToCart: (product: CartProductType) => void
    handleRemoveProductFromCart: (product: CartProductType) => void
    handleCartQtyIncrease: (product: CartProductType) => void
    handleCartQtyDecrease: (product: CartProductType) => void
}

export const CartContext = createContext<CartContextType | null>(null)

interface Props {
    // mean: prop is any type (propName is just a placeholder)
    [propName: string]: any
}

export const CartContextProvider = (props: Props) => {

    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('eShopCartItems')
        const cProduct: CartProductType[] | null = JSON.parse(cartItems)

        setCartProducts(cProduct)
    }, [])

    const handleAddProductToCart = useCallback((product: CartProductType) => {

        setCartProducts((prev) => {

            let updatedCart

            if (prev)
                updatedCart = [...prev, product]
            else
                updatedCart = [product]

            toast.success('Product added to cart')
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))

            return updatedCart
        })

    }, [])

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {

        if (cartProducts) {

            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            })

            setCartProducts(filteredProducts)
            toast.success('Product removed')
            localStorage.setItem('eShopCartItems', JSON.stringify(filteredProducts))
        }

    }, [cartProducts])

    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        if (product.quantity >= 99) {
            toast.error('Ooop! Maximum reached')
        }

        if (cartProducts) {

            let updatedCart = [...cartProducts]

            const existingIndex = cartProducts!.findIndex((item) => item.id === product.id)
    
            if (existingIndex > -1 ) {
                updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
            }

            setCartProducts(updatedCart)
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
        }
        
    }, [cartProducts])

    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        if (product.quantity >= 99) {
            toast.error('Ooop! Minimum reached')
        }

        if (cartProducts) {

            let updatedCart = [...cartProducts]

            const existingIndex = cartProducts!.findIndex((item) => item.id === product.id)
    
            if (existingIndex > -1 ) {
                updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
            }

            setCartProducts(updatedCart)
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
        }
        
    }, [cartProducts])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease
    }

    return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {

    const context = useContext(CartContext)

    if (context === null)
        throw new Error("useCart must be used within a CartContextProvider")

    return context
}