import { ReactElement } from "react";

interface Props {
    children: ReactElement
}

function RoundedBox(props: Props) {
    return (
        <div className="rounded-box">
            {props.children}
        </div>
    )
}

export default RoundedBox;