/**
 *
 * Modal
 *
 */

import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal as ModalPlugin } from 'react-responsive-modal';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Modal = (props) => {
	console.log(props);
	return (
		<ModalPlugin
			{...props}
			closeIconSize={20}
			// open={true}

			styles={{
				closeButton: {
					cursor: 'pointer',
					outline: 'none',
					color: 'white',
				},
				modal: {
					maxWidth: '100%',
					background: 'grey',
					borderRadius: '5px',
					padding: '0px',
					overflow: props.overflow || 'hidden',
				},
				overlay: {
					padding: 0,
				},
			}}
		>
			{props.children}
		</ModalPlugin>
	);
};

Modal.propTypes = {};

export default Modal;
