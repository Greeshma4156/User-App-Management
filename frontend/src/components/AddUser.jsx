import { useState } from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router";
 
function AddUser() {

  const { register, handleSubmit, formState:{errors} } = useForm();
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  const navigate = useNavigate();

  const onUserCreate = async(newUser)=>{
    setLoading(true);

    try{
      let res = await fetch("https://user-app-management-qjjm.onrender.com/user-api/users",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(newUser)
      })

      if(res.status===201){
        navigate("/users-list")
      }else{
        throw new Error("Failed to create user")
      }

    }catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }
  }

  if(loading){
    return <p className="text-center text-2xl text-orange-600">Loading...</p>
  }

  if(error){
    return <p className="text-center text-2xl text-red-600">{error.message}</p>
  }

  return (
    <div className="max-w-md mx-auto mt-10">

      <h1 className="text-4xl text-center mb-8">Add New User</h1>

      <form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col gap-4">

        <input type="text" placeholder="Name" {...register("name",{required:"Name required"})} className="border p-2 rounded" />
        <p className="text-red-500">{errors.name?.message}</p>

        <input type="email" placeholder="Email" {...register("email",{required:"Email required"})} className="border p-2 rounded" />
        <p className="text-red-500">{errors.email?.message}</p>

        <input type="date" {...register("dateOfBirth",{required:"Date required"})} className="border p-2 rounded" />

        <input type="number" placeholder="Mobile Number" {...register("mobileNumber",{required:"Mobile required"})} className="border p-2 rounded" />

        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add User
        </button>

      </form>

    </div>
  )
}

export default AddUser