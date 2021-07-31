import React from 'react'
import ReactDOM from 'react-dom'
import { TopBar } from './TopBar';
import styled from 'styled-components';


const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    padding-bottom: 20px;
    transform: translate(-50%, -50%);
    background-color:  #f0eff4;
    font-size: 18px;
  }
`

type Props = {
  modalTitle: string
  children: React.ReactChild
  closeModal: () => void
}

const Modal = React.memo(({modalTitle, children, closeModal }: Props) => {
  const domEl = document.getElementById('modal-root')

  if (!domEl) return null
  return ReactDOM.createPortal(
    <ModalWrapper>
      <div className="modal">
        <div className="tagEdit">
          <TopBar pageTitle={modalTitle}/>
          {children}
        </div>
      </div>
    </ModalWrapper>,
    domEl
  )
})

export default Modal
