import React from 'react'
import { user } from '../user'
import { useState } from 'react'
import '../App.css'
function Firstfilter() {
  const [query, setquery] = useState('')
  const [userdata, setuser] = useState(user)

  const check = query.toLowerCase()
  const filterdata = user.filter((e) => {
    return e.firstName.toLowerCase().indexOf(check) !== -1
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
        <ul className="user-list">
          {userdata.length > 0
            ? userdata.map((userdetail, index) => {
                const { firstName } = userdetail
                return (
                  <li className="name" key={index}>
                    {firstName}
                  </li>
                )
              })
            : 'No Result Found'}
        </ul>
      </div>
    </>
  )
}

export default Firstfilter
