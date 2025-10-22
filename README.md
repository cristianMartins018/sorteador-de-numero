# Sorteador de Números

Pequeno projeto front-end para sortear números únicos dentro de um intervalo.

## Arquivos principais
- [index.html](index.html) — interface e elementos DOM.
- [app.js](app.js) — lógica de sorteio (funções: [`sortear()`](app.js), [`reiniciar()`](app.js), [`gerarNumeroAleatorio()`](app.js), [`alterarStatusBotao()`](app.js)).
- [style.css](style.css) — estilos visuais.
- [img/](img/) — imagens usadas pela interface.

## Como usar
1. Abra [index.html](index.html) no navegador (ou sirva a pasta com um servidor estático).
2. Preencha:
   - Quantidade de números (`#quantidade`)
   - Valor inicial (`#de`)
   - Valor final (`#ate`)
3. Clique em "Sortear" para gerar números únicos. Use "Reiniciar" para limpar.

## Como funciona (resumo)
- A função [`sortear()`](app.js) lê os valores dos inputs em [index.html](index.html), valida os dados e gera a quantidade solicitada de números únicos no intervalo.
- A geração de um número aleatório é feita por [`gerarNumeroAleatorio()`](app.js).
- Se a quantidade solicitada for maior que o tamanho do intervalo, o usuário recebe um alerta.
- Após sortear, o botão "Sortear" é desabilitado e "Reiniciar" é habilitado via [`alterarStatusBotao()`](app.js).
- O botão "Reiniciar" limpa os campos e redefine o estado via [`reiniciar()`](app.js).