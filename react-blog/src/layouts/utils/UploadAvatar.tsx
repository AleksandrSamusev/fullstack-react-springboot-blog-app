import React, {useEffect, useState} from "react";
import Avatar from "react-avatar-edit";


export const UploadAvatar = () => {

    const [src, setSrc] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    let path = require("../../Images/PublicImages/profile-placeholder-image.jpg");
    const [preview, setPreview] = useState(path);

    const onClose = () => {
        setPreview(preview);
    }

    const onCrop = view => {
        setPreview(view);
    }

    useEffect(() => {
        console.log(preview)
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
                style={{height: '50%', width: '50%'}} alt="user-photo"/>
            </div>
        </div>
    );
}