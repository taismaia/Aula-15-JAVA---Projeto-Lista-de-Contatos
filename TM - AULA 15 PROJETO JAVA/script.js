const formulario = document.querySelector("#lista_contatos");
const resultado = document.querySelector("#resultado");
const nome = document.querySelector("#nome");
const numero = document.querySelector("#numero");
const email = document.querySelector("#email");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nomeValor = nome.value;
    const numeroValor = numero.value;
    const emailValor = email.value;

    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = `
        <h2>${nomeValor}</h2>
        <p><strong>Número:</strong> ${numeroValor}</p>
        <p><strong>Email:</strong> ${emailValor}</p>
        <button class="editar">Editar</button>
        <button class="excluir">Excluir</button>
    `;
    
    resultado.appendChild(card);

    nome.value = "";
    numero.value = "";
    email.value = "";

    const editarBtn = card.querySelector(".editar");
    const excluirBtn = card.querySelector(".excluir");

    editarBtn.addEventListener("click", function() {
        
        nome.value = nomeValor;
        numero.value = numeroValor;
        email.value = emailValor;

        
        const botaoCadastrar = document.createElement("button");
        botaoCadastrar.textContent = "Editar";
        botaoCadastrar.classList.add("editar-contato");

        
        const botaoExistente = document.querySelector("#lista_contatos button");
        if (botaoExistente) {
            botaoExistente.replaceWith(botaoCadastrar);
        }

        botaoCadastrar.addEventListener("click", function() {
            // Atualizar as informações no card
            card.innerHTML = `
                <h2>${nome.value}</h2>
                <p><strong>Número:</strong> ${numero.value}</p>
                <p><strong>Email:</strong> ${email.value}</p>
                <button class="editar">Editar</button>
                <button class="excluir">Excluir</button>
            `;
            
         
            formulario.reset();
            botaoCadastrar.replaceWith(document.createElement("button"));
        });
    });

    excluirBtn.addEventListener("click", function() {
        card.remove();
    });
});
