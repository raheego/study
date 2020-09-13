import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil/dist";
import {pageState} from "../state/PageState";

export default function BoardCreatePage() {
  const [page, setPage] = useRecoilState(pageState)
  //const setPage = useSetRecoilState(pageState)
  //const page = useRecoilValue(pageState)

  useEffect(() => {
    (async () => {

    })()

  }, [])

  return (
    <div>
      <Button onClick={() => setPage("BOARD")}>
        취소
      </Button>
      <Button>
        등록
      </Button>
    </div>
  );
}