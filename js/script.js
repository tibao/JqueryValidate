$(document).ready(function () {
    $("#formFuncionario").validate({
      rules: {
        nome: {
          required: true,
          minlength: 5,
          maxlength: 50
        },
        email: {
          required: true,
          email: true
        },
        filhos: {
          required: true,
          number: true,
          min: 0,
          max: 10
        },
        salario: {
          required: true,
          number: true,
          min: 2000,
          max: 10000
        },
        admissao: {
          required: true,
          date: true
        },
        redeSocial: {
          required: true,
          url: true
        }
      },
      mensagens: {
        nome: {
          required: "Por favor, informe o nome.",
          minlength: "O nome deve ter no mínimo 5 caracteres.",
          maxlength: "O nome pode ter no máximo 50 caracteres."
        },
        email: {
          required: "Informe o e-mail.",
          email: "Informe um e-mail válido."
        },
        filhos: {
          required: "Informe o número de filhos.",
          number: "Somente números são permitidos.",
          min: "Valor mínimo é 0.",
          max: "Valor máximo é 10."
        },
        salario: {
          required: "Informe o salário.",
          number: "Informe um número válido.",
          min: "O salário mínimo é R$2000.",
          max: "O salário máximo é R$10000."
        },
        admissao: {
          required: "Informe a data de admissão.",
          date: "Formato de data inválido."
        },
        redeSocial: {
          required: "Informe a URL da rede social.",
          url: "Informe uma URL válida (ex: https://...)."
        }
      }
    });
  });
  