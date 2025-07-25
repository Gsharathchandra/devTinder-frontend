import React from 'react'

const UserCard = ({user}) => {
    console.log(user);
    const {firstName,lastName,age,gender,about,photoUrl} = user;
    
  return (
    <div className="card bg-base-300 w-56 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName }</h2>
    {age && gender && <p>{age + " " + gender}</p>}
    <div className="card-actions justify-centre my-4">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Intrested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard