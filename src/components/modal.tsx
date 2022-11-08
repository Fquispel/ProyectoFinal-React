import React from "react";
import './modal.css';
interface ModalProps {
  /**
   * estilo de la letra en el modal
   */
  color?: string;
  /**
   *  color de la letra
   */
  backgroundColor?: string;
  /**
   * Color de Fondo del modal.
   */
  titulo: string;
  animacion?: 'Aparecer';
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  backgroundColor = '#fff',
  titulo = 'Ejemplo Modal',
  animacion = 'Aparecer',
  color = '#000',
  ...props
}: ModalProps) => {
  const pres = animacion=='Aparecer'? 'movedown' : 'rotate';

  return (
    <>
    <ul>
			<li><a href="#modal">Proyecto Final React Modal</a></li>
		</ul>
    <div id="modal" className="modalmask">
      <div className={[`modalbox ${pres}`].join(' ')} style={{ backgroundColor, color}}>
		    <a href="#close" title="Close" className="close">X</a>
		    <h2>{titulo}</h2>
        <h5>Tipo de Animación: {animacion}</h5>
	      <p>Fernando Quispe Lefonzo CI: 7057993 LP</p>
		  </div>
    </div>
    </>
  );
};