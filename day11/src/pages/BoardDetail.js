import React, {useEffect, useState} from 'react';
import {getBoard, removeBoard} from "../apis/boardApi";
import {useParams, useHistory} from "react-router-dom"
import {Button} from "@material-ui/core";
import {boardState} from "../state/boardState";
import {useSetRecoilState} from "recoil/dist"

export default function BoardDetailPage() {
  const [content, setContent] = useState({})
  const setBoards = useSetRecoilState(boardState)
  const {id} = useParams()
  const history = useHistory()

  useEffect(() => {
    (async () => {
      const content = await getBoard(id)
      setContent(content)
    })()

  }, [id])

  const onRemoveHandler = async () => {
    const res = await removeBoard(id)
    setBoards(res)
    history.goBack()
  }

  return (
    <div>
      <div>
        <Button onClick={onRemoveHandler}>
          삭제
        </Button>
      </div>
      <div>
        {content.id}
      </div>
      <div>
        제목: {content.title}
      </div>
      <div>
        작성자: {content.author}
      </div>
      <div>
        {content.contents}
      </div>
      <div>
        작성일: {content.createdAt}
      </div>
    </div>
  );
}