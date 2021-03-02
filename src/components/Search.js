import { useEffect, useState } from 'react'
import axios from 'axios'

export default async function Search(query) {
  console.log(query)
  try {
    const {data} = await axios.get(`https://api.github.com/users/${query}`
    )
    console.log(data)
    const username =await data.login
    const name =await data.name
    const userid =await data.id
    const followers =await data.followers
    const follow =await data.following
    const public_reops =await data.public_repos
    const profilepic = await data.avatar_url
    const location = await data.location
    

    const send_data = {
        profilepic,
        username,
        name,
        followers,
        follow,
        userid,
        public_reops,
        location,
    }
    return send_data
}
catch (err) {
    return err
}

}