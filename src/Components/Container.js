import React from 'react';

function Container({ children }) {

   return (
      <section className="w-full h-full p-5 mx-auto overflow-hidden">{children}</section>
   )
}

export default Container;