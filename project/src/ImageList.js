import React from 'react'

export default function ImageList(props) {
  return (
    <div className='imageList'>
        {props.ImagePLaceholder.map((image, index) =>{
            return(
                <img
                    className='imageListImage'
                    key={index}
                    src={image.urls.small}
                />
            )
        }
        )
        }
    </div>
  )
}
