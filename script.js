// Função para validar o formulário de cadastro do cliente
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado com sucesso!")

  function validateCadastroForm() {
    console.log("Função de validação chamada!")

    const nomeCliente = document.getElementById("nomeCliente").value
    console.log("Nome do Cliente:", nomeCliente)

    const endereco = document.getElementById("endereco").value
    const telefone = document.getElementById("telefone").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const confirmarSenha = document.getElementById("confirmarSenha").value

    // Verifica se os campos obrigatórios estão preenchidos
    if (
      !nomeCliente ||
      !endereco ||
      !telefone ||
      !email ||
      !senha ||
      !confirmarSenha
    ) {
      alert("Por favor, preencha todos os campos.")
      console.log("Campos obrigatórios não preenchidos")

      return false
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, tente novamente.")
      console.log("Senhas não coincidem")

      return false
    }

    // Outras verificações podem ser adicionadas conforme necessário

    // Se todas as verificações passarem, o formulário é enviado
    alert("Cadastro realizado com sucesso!")
    console.log("Validação concluída com sucesso")

    return true
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um ouvinte de evento para o envio do formulário
    const submitButton = document.querySelector("#cadastroForm button")

    if (submitButton) {
      submitButton.addEventListener("click", function (event) {
        console.log("Botão de envio clicado!")
        event.preventDefault()
        validateCadastroForm()
      })
    }
  })
})
