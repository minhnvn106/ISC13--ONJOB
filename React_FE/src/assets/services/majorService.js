// import api from './api';

// // const major = () => {
// //     return api.get(api.url.major, data).then(res => res.data);
// // };

// // const majorService = {
// //     major
// // };

// const getAll = () => api.get(api.url.major).then(res=>res.data);

// const majorService= {
//     getAll
// };
// export default MajorGet
//----------------------------------------------------
// CÁCH 1
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function MajorGet(){
//     const [posts, setPosts] = useState([])

//     useEffect(()=>{
//         axios.get('http://localhost:8888/listMajors')
//         .then(res => {
//             console.log(res)
//             setPosts(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     })
//     return (        
//         posts.map(post => (
//             <tr key={post.majorID}>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                     {post.majorName}
//                 </td>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
//                     {post.majorCode}
//                 </td>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
//                       <a href="/">
//                       <i className="fas fa-edit text-primary"></i>
//                       </a>
//                       <a href="/">
//                       <i className="fas fa-trash-alt text-danger"></i>
//                       </a>
//                   </td>
//             </tr>
//           ))
//     )
// }


// export default majorService;

// CÁCH 2
export function getList() {
    return fetch('http://localhost:8888/listMajors')
      .then(data => data.json())
  }