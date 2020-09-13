import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getBoards} from "../apis/boardApi";
import Button from "@material-ui/core/Button";
import {useRecoilState} from "recoil/dist";
import {pageState} from "../state/PageState";
import {boardState} from "../state/boardState";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BoardPage() {
  const classes = useStyles();
  const [boards, setBoards] = useRecoilState(boardState)
  const [page, setPage] = useRecoilState(pageState)

  return (
    <>
      <Button color={"primary"}
              variant={"contained"}
              onClick={() => setPage("CREATE_BOARD")}
      >
        작성하기
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>제목</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell align="right">작성일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {boards.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}