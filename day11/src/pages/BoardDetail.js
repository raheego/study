import React, {useEffect, useState} from 'react';
import {useRecoilState} from "recoil/dist";
import {pageState} from "../state/PageState";

export default function BoardDetailPage() {
  const [page, setPage] = useRecoilState(pageState)
  useEffect(() => {
    (async () => {

    })()

  }, [])

  return (
    <div>detail</div>
  );
}