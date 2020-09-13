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
