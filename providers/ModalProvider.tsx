"use client"
import { useState, useEffect } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    //modals can cause hydration errors
    //never want to render a modal if we're in server side rendering

    useEffect(()=>{
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  )
}

export default ModalProvider