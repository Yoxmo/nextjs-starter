import React from 'react'

const notUsedChild = async () => {
  return ( 
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
          }
        `}
      </style>
      <iframe
        allowFullScreen
        style={{ width: "100%" , height: "100%" ,  }} 
        src="https://moxo-landing-yoxmo.vercel.app/" >
      </iframe>
      </>
   );
}

export default notUsedChild;

