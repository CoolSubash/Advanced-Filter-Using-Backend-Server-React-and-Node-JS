import React from 'react'
import { useState } from 'react'
import { user } from '../user'
import '../App.css'
function SecondFilter() {
  const [query, setquery] = useState('')
  const [userdata, setuser] = useState(user)
  const keys = ['firstName', 'lastName', 'email']
  const check = query.toLowerCase()
  const filterdata = user.filter((e) => {
    return keys.some((key) => e[key].toLowerCase().includes(check))
  })

  return (
    <>
      <div className="filter">
        <input
          type="text"
          onChange={(e) => setquery(e.target.value)}
          className="search"
          onKeyUp={() => setuser(filterdata)}
          placeholder="Search...."
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {userdata.length > 0
              ? userdata.map((userdetail, index) => {
                  const { firstName, email, lastName } = userdetail
                  return (
                    <tr key={index}>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{email}</td>
                    </tr>
                  )
                })
              : 'No Result Found'}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SecondFilter
