const storageService = require('../service/storage.service')



async function bookUpload(req,res){
   
    const uploadFileResult = await Promise.all(
        (req.files || []).map(file =>
          storageService.fileUpload(file.buffer)
        )
      )
  
      console.log(uploadFileResult)
}
module.exports = { 
     bookUpload
}