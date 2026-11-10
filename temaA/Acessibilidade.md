# Relatório de acessibilidade

## Antes
- Nota do Lighthouse (mobile): 82
- Problemas apontados pelo Lighthouse: 
- Falta de atributos alt descritivos nas imagens estáticas da seção "Sobre".
- Botões do FAQ sem marcadores claros de acessibilidade.
-Problemas apontados pelo axe:
- Elementos de controle interativos sem conexão explícita com os blocos de texto expandidos.
-Problemas encontrados no teste do teclado:
- O foco sumia ou ficava oculto ao navegar pelos botões do carrossel antigo e o outline padrão não estava visível.

## Depois
- Nota do Lighthouse (mobile): 100
- O que foi corrigido:
- Refatoração completa da seção de Perguntas Frequentes utilizando botões nativos dentro de títulos `<h3>`.
- Implementação das propriedades `aria-expanded` (atrelada ao useState) e `aria-controls` vinculada ao ID das respostas.
- Ocultação semântica de respostas fechadas usando o atributo global `hidden`.
- Remoção de classes que ocultavam o anel de foco visual (`focus:outline-none`), garantindo navegação fluida por teclado.
- Inclusão de imagens de alta fidelidade com textos alternativos (`alt`) descritivos e significativos para leitores de tela.
- O que ainda não está bom (e por quê):
- Tudo foi mitigado com sucesso, atingindo a pontuação máxima de acessibilidade automatizada.

## Um problema que a ferramenta NÃO apontou e eu encontrei
Ordem de determinados arquivos