import React from "react";
import PublicHeader from "../PublicHeader";
import PublicFooter from "../PublicFooter";


export default function PublicLayout({children}) {
    return(
        <>
            <PublicHeader />
                {children}
            <PublicFooter />
        </>
    )
}

