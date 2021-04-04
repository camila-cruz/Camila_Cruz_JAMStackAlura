import loadingAnimation from '../animations/loading.json';
import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';

export default {
  DEFAULT: {
    feedback: {
      animation: '',
      loop: false,
    },
    buttonText: 'Enviar mensagem',
  },
  LOADING: {
    feedback: {
      animation: loadingAnimation,
      loop: true,
    },
    text: 'Aguarde',
  },
  DONE: {
    feedback: {
      animation: successAnimation,
      loop: false,
    },
    text: 'Mensagem enviada!',
    buttonText: 'Nova mensagem',
  },
  ERROR: {
    feedback: {
      animation: errorAnimation,
      loop: false,
    },
    text: 'Houve um erro!',
    buttonText: 'Tente novamente',
  },
};
