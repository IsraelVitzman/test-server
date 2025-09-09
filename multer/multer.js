import multer from 'multer';
import path from 'path'
export function multer(){
    const storge = multer.diskStorage({
        destination: (req, file, cd) => {
            cd(null, "./public/imag")
        },
        fileName: (req, file, cd) => {
            console.log(file);
            cd(null, Date.now + path.extname('file.originalname'))
        }

    })
    return storge
}
    
    