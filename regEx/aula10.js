// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/gm

// Não números, tem que usar replace e trocar por nada
const naoNumerosRegEx = /\D/gm

//Válida IP
const ipRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/gm

//Válida CPF
const cpfRegEx = /(?:\d{3}\.){2}\d{3}-\d{2}/gm

//Valida Telefones
const telefoneRegEx = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/gm

//Validar senhas fortes
const senhaRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*\]\)]).{8,}$/gm

//Validar emails
const emailPermissivaRegEx = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/gi //Permissiva
const emailRegradoRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi