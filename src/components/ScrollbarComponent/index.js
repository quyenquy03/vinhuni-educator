'use client'
import { OverlayScrollbarsComponent,useOverlayScrollbars } from "overlayscrollbars-react";
import { useEffect } from "react";

function ScrollbarComponent ({children}) {
    const [initBodyOverlayScrollbars, getBodyOverlayScrollbarsInstance] =
    useOverlayScrollbars({
      defer: true
    });
    useEffect(() => {
        initBodyOverlayScrollbars(document.body)
    },[])
    return (
        <OverlayScrollbarsComponent defer>
            {children}
        </OverlayScrollbarsComponent>
    )
}
export default ScrollbarComponent;