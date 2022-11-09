import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import App from '../../App';
import './Header.css'

export default function Header() {

    const [body, setBody] = useState('');
    const handleBody = (e) => {
        console.log(e);
        setBody(e);
    };
  return (
    <div>
      <div className='container'>
        <ReactQuill
          onChange={handleBody}
          value={body}
        //   modules={App.modules}
          placeholder='  Write here.You can also include @mentions or #hastags.. '
        />
        <button className='submit'> Publish</button>
         </div>
      </div>
  )
}
// App.modules = {
//     toolbar: [
//         ['bold','italic','underline']
//     ]
// }