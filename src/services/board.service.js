import { httpService } from './http.service'

export const boardService = {
  add,
  query,
  remove,
  getById,
  update,
  getEmptyGroup,
}

const KEY = 'board'

// _addBoardToStorage()
// async function _addBoardToStorage() {
// return await JSON.parse(localStorage.getItem(KEY)) || add(board)
// }

function query() {
  return storageService.query(KEY)
  // return httpService.get(`board`)
}

function remove(boardId) {
  return storageService.delete(KEY, boardId)
  // return httpService.delete(`board/${boardId}`)

}

function update(board) {
  return storageService.put(KEY, board)
  // return httpService.put(`board/${board._id}`, board)

}
async function add(board) {
  const addedBoard = storageService.post(KEY, board)
  // const addedBoard = await httpService.post(`board`, board)

  return addedBoard
}

function getById(boardId) {
  return storageService.get(KEY, boardId)
  // return httpService.get(`board/${boardId}`)
}

function getEmptyGroup() {
  return {}
}
