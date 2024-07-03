# Explorer-Stock
Controlando Acessos Usando Tokens e Cookies.

## Back-end

### Cadastro de Usuário e Restrição de Perfil
- Implementação do cadastro de usuários com diferentes perfis, introduzindo a coluna "role" na tabela de usuários para verificar as restrições.

### Informações do Usuário nas Requisições
- Utilização do payload do token para incluir informações do usuário nas requisições, melhorando a segurança e personalização da interação.

### Middleware de Autorização
- Criação de um novo middleware chamado `verifyUserAuthorization` para gerenciar a lógica de autorização na API, garantindo o controle adequado de acessos.

### Aplicação de Autorização
- Aplicação da autorização de usuário através de tokens, restringindo o acesso do usuário de acordo com seu perfil.

### Restrição de Acesso em Rota Específica
- Aplicação de autorização em um conjunto ou rota específica, oferecendo flexibilidade na gestão de permissões.

### Estratégia de Autenticação com Cookie
- Utilização do cookie como estratégia de autenticação, substituindo o armazenamento do token no local storage. Implementando configurações de segurança, como a propriedade HTTP only, same site, e um tempo de validade para o cookie.

### Middleware de Autenticação com Cookie
- Modificação do middleware de autenticação para buscar o token no cookie, garantindo uma transição segura para o uso de cookies na autenticação.

## Front-end

### Organização de Rota
- Organização das rotas na aplicação, separando-as em arquivos diferentes e ajustando os acessos permitidos com base nos perfis dos usuários.

### Distribuição de Rota por Perfil
- Distribuição das rotas de acordo com o perfil do usuário, utilizando a estrutura de switch case e criando uma função chamada `accessRoute`.

### Ocultação de Opção de Menu
- Utilização do hook `useAuth` para obter informações do usuário e ocultar ou mostrar opções ou funcionalidades como botões, ícones, etc. Com base no perfil do usuário.

### Consumo do Token que é Enviado pelo Cookie nas Requisições
- Consumir o token enviado pelo cookie nas requisições, garantindo a continuidade da autenticação e autorização no front-end.

### Propriedade "withCredentials"
- Utilização da propriedade "withCredentials" para incluir cookies nas requisições, mantendo a integridade da autenticação entre o front-end e o back-end.

## Conclusão
Essas implementações e aprendizados me proporcionaram uma compreensão mais profunda sobre o controle de acesso e autenticação em um projeto.