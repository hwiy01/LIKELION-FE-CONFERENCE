import express from "express";
import { createEntry, deleteEntry, editEntry, getAllEntries, getEntryById } from "../controllers/guestbook.controller.js";

const router = express.Router();
//비슷한 라우트를 묶어서 라우터 객체로 사용

// controller에서 실제 로직 실행
router.get('/', getAllEntries);

router.get('/:id', getEntryById);

router.post('/', createEntry);

router.delete('/:id', deleteEntry);

router.patch('/:id', editEntry);

// router.get('/',(req,res)=>{
//     //전체 방명록 조회
// })
// router.get('/:id',(req,res)=>{
//     //특정 방명록 조회
// })
// router.post('/',(req,res)=>{
//     //방명록 생성
// })
// router.delete('/:id',(req,res)=>{
//     //방명록 삭제
// })
// router.patch('/:id',(req,res)=>{
//     //방명록 수정
// })

export default router;