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
            marginRight: '50px'
        },

        upload: {
            width: 250,
            height: 250,
            background: 'gold',
            // borderRadius: '100pt',
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