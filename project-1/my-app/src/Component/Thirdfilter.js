import React, { useEffect, useState } from 'react'
import '../App.css'
function Thirdfilter() {
  const [query, setquery] = useState('')
  const [data, setdata] = useState([])

  useEffect(() => {
    const datacall = async () => {
      try {
        const fetchdata = await fetch(`http://localhost:8000?q=${query}`)
        const res = await fetchdata.json()
        console.log(res)
        setdata(res)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
    datacall()
  }, [query])
  return (
    <>
      <div className="filter">
        <input
          type="text"
          onChange={(e) => setquery(e.target.value)}
          className="search"
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
            {data.length > 0
              ? data.map((userdetail, index) => {
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

export default Thirdfilter
