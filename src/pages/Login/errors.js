const ErrorsMessage = {
  InvalidEmail: {
    code: 100,
    message: 'Email inválido'
  },
  NotFoundEmail: {
    code: 101,
    message: 'Este E-mail não foi cadastrado'
  },
  InvalidCode: {
    code: 102,
    message: 'Código informado é inválido',
  },
  InvalidLogin: {
    code: 103,
    message: 'Usuário e senha inválidos',
  },
  NotMatchPasswords: {
    code: 104,
    message: 'Senhas informadas não são iguais',
  },
}

export {
  ErrorsMessage,
};