import React, {useEffect, useState} from "react";
import Avatar from "react-avatar-edit";


export const UploadAvatar = (props) => {

    const [src, setSrc] = useState('');
    const path = require("../../Images/PublicImages/profile-placeholder-image.jpg");
    const [preview, setPreview] = useState(path);

    const onClose = () => {
        props.handleUpload(preview);
    }

    const onCrop = view => {
        setPreview(view);
        props.handleUpload(preview);
    }

    useEffect(() => {
    }, [preview])

    return(
        <div className="row">
            <div className="col-7 mt-3 mb-5">
                <Avatar
                    width={300}
                    height={150}
                    onCrop={onCrop}
                    onClose={onClose}
                    src={src}
                />
            </div>
            <div className="col-5 text-center mt-auto mb-auto">
                <img src={preview}
                style={{height: '60%', width: '60%'}} alt="user-photo"/>
            </div>
        </div>
    );
}