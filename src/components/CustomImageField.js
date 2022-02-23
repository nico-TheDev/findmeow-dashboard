import * as React from "react";
import { useRecordContext } from "react-admin";
import { Image, Placeholder } from "cloudinary-react";

// const useStyles = makeStyles({
//     link: {
//         textDecoration: "none",
//         display: "flex",
//         alignItems: "center",
//     },
//     icon: {
//         width: "0.5em",
//         height: "0.5em",
//         paddingLeft: 2,
//     },
// });

const CustomImageField = () => {
    const record = useRecordContext();

    return record ? (
        <Image
            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
            publicId={record.profileImg || record.image}
            width="350"
            height="350"
        >
            <Placeholder type="pixelated" />
        </Image>
    ) : null;
};

export default CustomImageField;
