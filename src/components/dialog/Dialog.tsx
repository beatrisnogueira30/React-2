import { useState } from 'react';
import './Dialog.css'

import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';

type DialogProps = {
  title?: string;
  mostrar: boolean;
  mensagem: string;
  textoConfirmar: string;
  textoCancelar: string;
  aoFechar: () => void;
  aoConfirmar: () => void;

}




function Dialog({ title,
  mostrar,
  mensagem = "Esta é uma mensagem padrão",
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
  aoFechar,
  aoConfirmar }: DialogProps) {


  return (
    <>


      <Modal show={mostrar} onHide={aoFechar} centered>
        <Modal.Header closeButton>
          <Modal.Title> {title ? title : "Texto Padrão"}</Modal.Title>
        </Modal.Header>

        <ModalBody>Deu certo nosso Modal funcionou</ModalBody>

        <ModalFooter>
          <Button variant='seconday' onClick={aoFechar}>
            {textoCancelar}
          </Button>
          <Button variant='primary' onClick={aoConfirmar}>
            {textoConfirmar}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Dialog;