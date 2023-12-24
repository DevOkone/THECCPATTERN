import React from 'react'
import Image from "next/image";

export default function ProduitsLists({PRODUITS}) {
  return (
      <div>
           <ul className=" grid grid-cols-3 gap-10">
              {PRODUITS.map((prod) => {
                const imageUrl = `/images/${prod.image}`;
                return (
                  <li className="flex flex-col gap-2 cursor-pointer border border-gray-300 p-2 rounded-xl">
                    <div className=" relative h-24 w-24 m-auto">
                      <Image
                        src={imageUrl}
                        fill
                        className=" relative h-full w-full rounded-xl"
                      />
                    </div>
                    <div className=" text-center">
                      <h3 className=" text-sm font-semibold">{prod.name}</h3>
                      <h3 className=" text-sm">{prod.price} FCFA</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
    </div>
  )
}
