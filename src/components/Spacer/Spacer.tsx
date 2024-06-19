import {FC} from "react";

interface SpacerProps {
    width?: string
    height?: string
}

const Spacer: FC<SpacerProps> = ({width, height}) => {
    return (
        <div style={{width, height}}></div>
    )
}

export default Spacer;