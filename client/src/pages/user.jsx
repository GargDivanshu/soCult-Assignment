import React from 'react'

const User = () => {
  return (
    <main
      className="min-h-screen bg-white grid">
      <div className="h-2/5 relative bg-cover bg-[url('https://th.bing.com/th/id/OIP.mnVfqsrwycAiaxy_A0Y_UQHaEK?pid=ImgDet&w=3840&h=2160&rs=1')] "
      >
      <div
      className="bg-black grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 absolute bottom-0 text-white bg-opacity-70 w-full h-[50px]"
      >
       <img
       className="w-28 mx-4 h-28 border-4 rounded-full object-cover"
        src="https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1"
       />

       <ul className="flex my-auto justify-center w-min col-span-3">
        <li className="mx-5 font-semibold my-auto">Timeline</li>
        <li className="mx-5 font-semibold my-auto">About</li>
        <li className="mx-5 font-semibold my-auto">Album</li>
        <li className="mx-5 font-semibold my-auto">Friends</li>
       </ul>
      </div>
      </div>
      </main>
  )
}

export default User