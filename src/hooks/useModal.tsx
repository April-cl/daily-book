import React, { useState } from 'react'
import Modal from 'components/Modal'

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)

  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)

  const RenderModal = ({ children, modalTitle }: { children: React.ReactChild, modalTitle: string }) => (
    <>
      {isVisible && <Modal modalTitle={modalTitle} closeModal={hide}>{
        children
      }</Modal>}
    </>
  )

  return {
    show,
    hide,
    RenderModal,
  }
}
