import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';


const LatestCollection = () => {

    const {products} = useContext(ShopContext)
    // console.log(products);

    const [latestProduct, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1 = {'LATEST'} text2 = {'COLLECTIONS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur sint dignissimos, atque, distinctio velit voluptate iusto placeat harum autem repellendus iure.
                </p>
            </div>

            {/* Rederring Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProduct.map((item) => (
                    <ProductItem
                        key={item._id} // Using a unique identifier
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>

        </div>
        
    )
}

export default LatestCollection