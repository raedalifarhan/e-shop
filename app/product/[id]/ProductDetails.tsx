'use client'
import Button from '@/app/components/Button'
import ProductImage from '@/app/components/products/ProductImage'
import SetColor from '@/app/components/products/SetColor'
import SetQuantity from '@/app/components/products/SetQuantity'
import { useCart } from '@/hooks/useCart'
import { CartProductType, SelectedImageType } from '@/types/Product'
import { dividerClasses, Rating } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'

interface Props {
    product: any
}

const Horizontal = () => {
    return <hr className='w-[30%] my-2' />
}

const ProductDetails = ({ product }: Props) => {

    const router = useRouter()

    const { handleAddProductToCart, cartProducts } = useCart()

    const [isProductInCart, setIsProductInCart] = useState(false)

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImage: { ...product.images[0] },
        quantity: 1,
        price: product.price
    });

    console.log('cartProducts: ', cartProducts);

    useEffect(() => {
        setIsProductInCart(false)

        if (cartProducts) {
            const indexExisting = cartProducts.findIndex(item => item.id === product.id)

            if (indexExisting > -1)
                setIsProductInCart(true)
        }

    }, [cartProducts])

    const productRating = product.reviews
        .reduce((acc: number, item: any) =>
            item.rating + acc, 0) /
        product.reviews.length;

    const handleColorSelect = useCallback((value: SelectedImageType) => {
        setCartProduct((prev) => {
            return { ...prev, selectedImage: value }
        })
    }, [cartProduct.selectedImage])

    const handleQtyDecrease = useCallback(() => {
        if (cartProduct.quantity >= 99) return

        setCartProduct((prev) => {
            return { ...prev, quantity: ++prev.quantity }
        })
    }, [cartProduct])

    const handleQtyIncrease = useCallback(() => {
        if (cartProduct.quantity <= 1) return

        setCartProduct((prev) => {
            return { ...prev, quantity: --prev.quantity }
        })
    }, [cartProduct])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <ProductImage product={product} cartProduct={cartProduct} handleColorSelect={handleColorSelect} />
            <div className='flex flex-col gap-1 text-sm text-slate-500'>
                <h2 className='text-3xl font-medium text-slate-700'>{product.name}</h2>
                <div className='flex items-center gap-2'>
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal />
                <div>{product.description}</div>
                <Horizontal />
                <div>
                    <span className='uppercase font-semibold'>Category: </span> {product.category}
                </div>
                <div>
                    <span className='uppercase font-semibold'>Brand: </span> {product.brand}
                </div>
                <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
                    {product.inStock ? 'In stock' : 'Out of stock'}
                </div>
                <Horizontal />
                {isProductInCart ? (
                    <>
                        <p className='mb-2 flex items-center gap-1 text-slate-500'>
                            <MdCheckCircle size={20} className='text-teal-400' />
                            <span className='text-base'>Product added to cart</span>
                        </p>
                        <div className='max-w-[300px]'>
                            <Button
                                label='View Cart'
                                onClick={() => { router.push('/cart') }}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <SetColor
                            images={product.images}
                            cartProduct={cartProduct}
                            handleColorSelect={handleColorSelect}
                        />
                        <Horizontal />
                        <SetQuantity
                            cartProduct={cartProduct}
                            handleQtyDecrease={handleQtyDecrease}
                            handleQtyIncrease={handleQtyIncrease}
                        />
                        <Horizontal />
                        <div className='max-w-[300px]'>
                            <Button
                                label='Add To Cart'
                                onClick={() => handleAddProductToCart(cartProduct)}
                            />
                        </div>
                    </>)}
            </div>
        </div>
    )
}

export default ProductDetails