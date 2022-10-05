import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUP() {


  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function handleSubmit() {

    const newSigning = {
      name: name,
      email: email,
      password: password
    }


    fetch('  http://localhost:8001/clients', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ newSigning })
    })
      .then(r => r.json())
      .then(data => console.log(data))
  }

  function handleClick() {

    handleSubmit()

    alert(`Thank you for signing with us ${name}!`)

    navigate('/')

  }
  return (

    <div className='reservationform'>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label  className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)} 
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label  className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4 row">
          <label  className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              value={password}         
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
      </form>



    </div>





  )
}

export default SignUP;
