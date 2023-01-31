import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function MergeCreditCard(props) {
  return <Card {...props} />;
}

MergeCreditCard.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  focused: PropTypes.oneOf(['none', 'name', 'number', 'expiry', 'cvc']),
  issuer: PropTypes.oneOf([
    'default',
    'visa',
    'mastercard',
    'discover',
    'amex',
    'jcb',
    'dinersclub',
    'maestro',
    'laser',
    'unionpay',
    'elo',
    'hipercard',
  ]),
  onInvalid: PropTypes.func,
  onValid: PropTypes.func,
  preview: PropTypes.bool,
};
