import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom"

import TextField from "@material-ui/core/TextField";
import {postBoard} from "../apis/boardApi";
import {boardState} from "../state/boardState";
import {useSetRecoilState} from "recoil/dist"

export default function BoardCreatePage() {
  const history = useHistory()
  const setBoards = useSetRecoilState(boardState)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [contents, setContents] = useState("")

  const onSubmitHandler = async () => {
    const res = await postBoard({
      title, author, contents
    })
    if (!res.errorMessage) {
      setBoards(res)
      history.goBack()
    }
  }

  return (
    <div>
      <div>
        <TextField value={title} onChange={(e) => setTitle(e.target.value)} label="제목" />
      </div>
      <div>
        <TextField value={author} onChange={(e) => setAuthor(e.target.value)} label="작성자" />
      </div>
      <div>
        <textarea value={contents} onChange={(e) => setContents(e.target.value)} />
      </div>
      <Button onClick={history.goBack}>
        취소
      </Button>
      <Button onClick={onSubmitHandler}>
        등록
      </Button>
    </div>
  );
}