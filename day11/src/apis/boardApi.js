import axios from "axios";

// export const getBoards = () => {
//   return new Promise((resolve, reject) => {
//     axios.get("https://protected-beach-40061.herokuapp.com/boards")
//       .then(res => res.data)
//       .then(data => resolve(data))
//   })
// }

//async, await
export const getBoards = async () => {
  const res = await axios.get("https://protected-beach-40061.herokuapp.com/boards")
  return res.data

  ////return await (await axios.get("https://protected-beach-40061.herokuapp.com/boards")).data
}
// export async function getBoards() {
//
// }

export const getBoard = async (id) => {
  const res = await axios.get(`https://protected-beach-40061.herokuapp.com/boards/${id}`)
  return res.data
}

export const postBoard = async ({title, author, contents}) => {
  const res = await axios.post(`https://protected-beach-40061.herokuapp.com/boards`, {
    title, author, contents
  })
  return res.data
}

export const removeBoard = async (id) => {
  const res = await axios.delete(`https://protected-beach-40061.herokuapp.com/boards/${id}`)
  return res.data
}