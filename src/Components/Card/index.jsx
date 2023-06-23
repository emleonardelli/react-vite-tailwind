import React from 'react'

/*

{
    "id": 3,
    "title": "Licensed Plastic Fish",
    "price": 982,
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "images": [
        "https://picsum.photos/640/640?r=3404",
        "https://picsum.photos/640/640?r=1480",
        "https://picsum.photos/640/640?r=6534"
    ],
    "creationAt": "2023-06-23T07:25:10.000Z",
    "updatedAt": "2023-06-23T07:25:10.000Z",
    "category": {
        "id": 4,
        "name": "Shoes",
        "image": "https://picsum.photos/640/640?r=9326",
        "creationAt": "2023-06-23T07:25:10.000Z",
        "updatedAt": "2023-06-23T07:25:10.000Z"
    }
}
*/

function Card({ item }) {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='
                absolute
                bottom-0
                left-0
                bg-white/60
                rounded-lg
                text-black
                text-xs
                m-2
                px-3
                p7-0.5'>
                {item.category.name}
            </span>
            <img
                src={item.images[0]}
                alt='headphones'
                className='rounded-lg w-full h-full object-cover'
            />
            <div className='
                absolute
                top-0
                right-0
                flex
                justify-center
                items-center
                bg-white
                w-6
                h-6
                rounded-full
                m-2
                p-1'>
                +
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>
                {item.title}
            </span>
            <span className='text-lg font-bold'>
                ${item.price}
            </span>
        </p>
    </div>
  )
}

export default Card