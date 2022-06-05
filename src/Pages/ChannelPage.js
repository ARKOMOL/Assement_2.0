import React, { useEffect, useState } from 'react'

const ChannelPage = () => {
    const [items,SetItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/info')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            SetItems(data)
        })
    },[])
  return (
    <div>
        <h1 className='text-4xl text-center'>Total Items: {items.length}</h1>

        <div class="Lg:mx-32 md:mx-32 container gap-5 card bg-base-100 shadow-xl  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5  l">
            
        {
            items.map(item=>
            <div  class="card-body items-center text-center" key={item._id}>
                {item.name}
            </div>)
        }

    </div>
    </div>
  )
}

export default ChannelPage