import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './ImageUpload.css'
import React, { useState } from 'react'

export default function ImageUpload() {
    const [image,setImage]=useState('') 
  
    const handleChange = (event) => {
        console.log(event.target.files);
        setImage(event.target.files[0])
    }
    const handleApi = () => {
      
      const formData = new FormData()
      formData.append('image', image)
      axios.post('https://api.imgur.com/3/image', formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }
  return (  
      <>
      <input className='Heading' placeholder=' Headline' />

        <div className='outside-card'>
          <div className='file-card'>
            <div className='file-input'>
              <input type='file' onChange={handleChange}></input>
              {/* <button onClick={handleApi}>
                <i>
                  <FontAwesomeIcon icon={faCameraRetro} />
                </i>
              </button> */}
            </div>
            <p className='main'>No cover image uploaded</p>
            <p className='info1'>Consider adding a cover image that complements your article to attract more readers.</p>
          <p className='info2'>We recommend uploading an image with a pixel size of 1280 x 720</p>
        </div>
      </div>
      <input className='box' placeholder=' Write here.You can also include @mentions or #hastags '/>
      </>
  )
}
