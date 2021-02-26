import React from 'react';
require('dotenv').config();

class ProfileImg extends React.Component {
    state = {
        imageUrl: '',
        imageAlt: '',
    }

    handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]');
        const formData = new FormData();
        formData.append('file', files[0]);
        // replace this with your upload preset name
        formData.append('upload_preset', 'relgaflm');
        const options = {
            method: 'POST',
            body: formData,
        };

        // replace cloudname with your Cloudinary cloud_name
        const upload = process.env.CLOUD_NAME;
        return fetch(`https://api.Cloudinary.com/v1_1/${upload}/image/upload`, options)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    imageUrl: res.secure_url,
                    imageAlt: `An image of ${res.original_filename}`
                });
            })
            .catch(err => console.log(err));
    };

    // openWidget = () => {
    //     // create the widget
    //     window.Cloudinary.createUploadWidget(
    //         {
    //             cloudName: 'dtjgq9m2t',
    //             uploadPreset: 'relgaflm',
    //         },
    //         (error, result) => {
    //             this.setState({
    //                 imageUrl: result.info.secure_url,
    //                 imageAlt: `An image of ${result.info.original_filename}`
    //             });
    //         },
    //     ).open(); // open up the widget after creation
    // };

    render() {
        const { imageUrl, imageAlt } = this.state;
        const styles = {
            profileBtn: {
                textAlign: 'center',
                backgroundColor: '#212f35',
                color: '#f9f9f9c9',
                border: '0 solid #FFD217',
                fontSize: '10.8pt'
            },
            profileImg: {
                height: '300px',
                width: '300px',
                borderRadius: '10px',
                alignContent: 'center'
            }

        };
        return (
            <main className="ProfileImg">
                <section className="right-side">
                    {imageUrl && (
                        <img src={imageUrl} alt={imageAlt} style={styles.profileImg} className="displayed-image" />
                    )}
                </section>
                <section className="left-side">
                    <form>
                        <div className="form-group">
                            <input type="file" />
                        </div>
                        <button type="button" style={styles.profileBtn} className="btn" onClick={this.handleImageUpload}>Submit</button>
                        {/* <button type="button" className="btn widget-btn" onClick={this.openWidget}>Upload Via Widget</button> */}
                    </form>
                </section>
            </main>
        );
    }
}

export default ProfileImg;