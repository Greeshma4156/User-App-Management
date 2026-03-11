import { useLocation } from "react-router"

function User() {

  let {state} = useLocation();

  if(!state){
    return <h2 className="text-center">No user selected</h2>
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded">

      <h1 className="text-3xl mb-6 text-center">User Details</h1>

      <p><b>Name:</b> {state.name}</p>
      <p><b>Email:</b> {state.email}</p>
      <p><b>Date Of Birth:</b> {state.dateOfBirth}</p>
      <p><b>Mobile:</b> {state.mobileNumber}</p>

    </div>
  )
}

export default User
