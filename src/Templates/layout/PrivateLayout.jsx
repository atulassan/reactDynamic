import React from "react";
import PrivateHeader from "../PrivateHeader";
import PrivateFooter from "../PrivateFooter";

export default function PrivateLayout({ children }) {
    return (
        <>
            <PrivateHeader />
            {children}
            <PrivateFooter />
        </>
    )
}

