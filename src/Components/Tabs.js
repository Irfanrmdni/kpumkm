import React from 'react';

function Tabs({ children, event, variant, className, size }) {
   const addClassName = className ? className : "";

   const typeSize = {
      'large': 'w-full h-10 text-xl',
   }
   const addSize = typeSize[size];

   const typeVariant = {
      'solidBlue': 'text-white bg-blue rounded',
      'solidGray': 'text-white bg-gray'
   }
   const addVariant = typeVariant[variant];

   return (
      <ul className="w-full flex flex-row items-center justify-start">
         <li className="w-full">
            <button className={`inline-block uppercase ${addSize} ${addVariant} ${addClassName}`} onClick={event}>{children}</button>
         </li>
      </ul>
   )
}

export default Tabs;