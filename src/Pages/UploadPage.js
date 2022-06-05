import React from 'react'
import { useForm } from 'react-hook-form';

const UploadPage = () => {

    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
            const url = `http://localhost:5000/info-add`
        //    const url = `https://peaceful-shore-76688.herokuapp.com/review`
           console.log(url);
           fetch(url, {
               method:'POST',
               headers: {
                   'content-type':'application/json'
               },
               body:JSON.stringify(data)
           })
           .then(res =>res.json())
           .then(result =>{
               console.log(result);
               reset()
           })
       
        reset()
        }
  
    

  return (
    <div >
        <h1 className='text-4xl text-yellow-600 text-center'>Upload Your Videos</h1>
    <div className='flex mt-10 justify-center items-center'>
        
        {/* Form part  */}

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
            <input 
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("title", { required: true })} />
            {errors.title && <span>This field is required</span>}
        </div>
        
            
        <div className="form-control w-full max-w-xs py-8">
            <input  
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("description", { required: true })} />
            {errors.description && <span>This field is required</span>}

            </div>

            <div className="form-control w-full max-w-xs">
            <input
            className="input input-bordered w-full max-w-xs"
            type='file'  {...register("video", { required: true })} />
            {errors.video && <span>This field is required</span>}
            </div>
            
            <input  className='btn w-full max-w-xs mt-4 text-white'  type="submit" />
    </form>

    </div>
    </div>

  )
}

export default UploadPage