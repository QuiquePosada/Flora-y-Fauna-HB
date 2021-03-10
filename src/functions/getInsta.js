

// const url = `https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":"45856047939","first":12}`

// import axios from "axios";
import axios from 'axios'

const getInstaFeed = async (id, limit) => {
    const url = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"${id}","first":${limit}}`;
    try {
        const response = await axios.get(url);
    return response;
    } catch (error) {
        return error;
    }
}

export { getInstaFeed }


// const cache = {
//     lastFetch: 0,
//     posts: [],
// }

// const getPosts = async () => {
//     // Check if data has been cached
//     const timestampLastFetch = Date.now() - cache.lastFetch
//     if(timestampLastFetch <= 1800000) {
//         return cache.posts
//     }
//     const data = await fetch(url).then((result) => result.json())
//     cache.lastFetch = Date.now()
//     cache.posts = data
//     console.log("DATA from IG Acc ", data)
//     return data
// }

// exports.handler = async function (event, context, callback) {
//     const posts = await getPosts()
//     callback(
//         null, 
//         {
//             statusCode: 200,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(posts),
//         }
//     )
// }