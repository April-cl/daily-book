import React, { useState } from 'react'
import Modal from 'components/Modal'


// Modal组件最基础的两个事件，show/hide
export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)

  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)

  const RenderModal = ({ children }: { children: React.ReactChild }) => (
    <>
      {isVisible && <Modal closeModal={hide}>{
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
