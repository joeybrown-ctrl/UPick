import React, { useState } from 'react';
import ImageUpload from 'image-upload-react';
//important for getting nice style.
import 'image-upload-react/dist/index.css';
 
function ProfilePicture() {
    const [imageSrc, setImageSrc] = useState();
 
    const handleImageSelect = (e) => {
        setImageSrc(URL.createObjectURL(e.target.files[0]));
    };

    const styles = {
        imageDiv: {
            justifyContent: 'center',
        },

        upload: {
            width: 200,
            height: 200,
            background: 'gold',
            borderRadius: '100pt'
        }
    };
 
    return (
        <div style={styles.imageDiv}>
            <ImageUpload
                handleImageSelect={handleImageSelect}
                imageSrc={imageSrc}
                setImageSrc={setImageSrc}
                style={styles.upload}
            />
        </div>
    );
}
 
export default ProfilePicture;