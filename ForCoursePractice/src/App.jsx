import { useEffect } from "react";

export default function Form() {
    useEffect(() => {
        console.log("Rendered...");
    })
    return <>Hello useEffect()</>;
}
