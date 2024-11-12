import GuestBook from "../models/guestbook.model.js";

// guestbook의 조작에 대한 것들 여기 담길 것임
// find가 조회할 수 있도록 해줌
export const getAllEntries = async (req, res) => {
    try{
        const entries = await GuestBook.find();
        //res.status(200).json(entries);
        res.render('guestbook', {entries});
    }catch(error){
        res.status(500).json({message:"조회 과정에서 에러 발생"}, error);
    }
}

export const getEntryById = async (req, res) => {
    const {id} = req.params;
    try{
        const entry = await GuestBook.findById();
        if(!entry){
            res.status(404).json({message: "해당하는 데이터가 없습니다."});
        }
        res.status(200).json(entry);
    }catch(error){
        res.status(500).json({message:"조회 과정에서 에러 발생"}, error);
    }
}

export const createEntry = async (req, res) => {
    const { author, message } = req.body;
    try{
        const newEntry = new GuestBook({author, message});
        await newEntry.save();
        //res.status(201).json({message: "방명록 생성 성공"})
        res.redirect("/guestbook"); // 성공 후 홈으로 이동하도록
    }catch(error){
        res.status(500).json({message:"생성 과정에서 에러 발생"}, error);
    }
}

export const deleteEntry = async (req, res) => {
    const { id } = req.params; 
    try {
        const deletedEntry = await GuestBook.findByIdAndDelete(id); // 
        if (!deletedEntry) {
            return res.status(404).json({ message: "해당하는 데이터가 없습니다." });
        }
        res.status(200).json({ message: "삭제 성공" });
    } catch (error) {
        res.status(500).json({ message: "삭제 과정에서 에러 발생", error });
    }
};

export const editEntry = async (req, res) => {
    const { id } = req.params;
    const { author, message } = req.body; // 수정할 데이터 받아오기
    try {
        const updatedEntry = await GuestBook.findByIdAndUpdate(
            id, { author, message }, { new: true } // 업데이트 후의 최신 데이터를 반환
        );
        if (!updatedEntry) {
            return res.status(404).json({ message: "해당하는 데이터가 없습니다." });
        }
        res.status(200).json({ message: "수정 성공", updatedEntry });
    } catch (error) {
        res.status(500).json({ message: "수정 과정에서 에러 발생", error });
    }
};