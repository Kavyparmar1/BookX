const ImageKit = require('imagekit')
const { v4: uuid } = require('uuid')

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function fileUpload(fileBuffer, folder = '/books') {
  const result = await imagekit.upload({
    file: fileBuffer,          
    fileName: uuid(),
    folder
  })

  return {
    url: result.url,
    thumbnail: result.thumbnailUrl || result.url,
    id: result.fileId,
  }
}

module.exports = { fileUpload  }
