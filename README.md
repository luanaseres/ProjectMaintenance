# PRD - Product Requirements Document

## Introdução & objetivo

Atualmente, a empresa enfrenta desafios significativos na gestão de seu parque de máquinas, essencial para a produção de peças automotivas. O sistema manual de gerenciamento de manutenção leva a problemas críticos, como falta de organização e controle, dificuldades na comunicação entre as equipes e perda de tempo e produtividade. Esses problemas resultam em atrasos na produção e na incapacidade de garantir a segurança e a eficiência esperadas. O objetivo deste projeto é criar uma aplicação web para gerenciar as atividades de manutenção, otimizando os processos e melhorando a comunicação e a organização dentro da empresa.

## Por que implementar isto?

A implementação de uma aplicação web de gerenciamento de manutenção é fundamental para resolver problemas críticos enfrentados pela empresa:

- **Falta de organização e controle:** Melhorar o registro e o monitoramento das solicitações de manutenção, bem como o controle dos custos.
- **Comunicação ineficiente:** Facilitar a comunicação entre as equipes responsáveis pelas manutenções e acompanhar o progresso das mesmas.
- **Perda de tempo e produtividade:** Proporcionar acesso rápido e organizado às informações relevantes sobre as máquinas e seus históricos de manutenção, minimizando atrasos e interrupções na produção.

A aplicação trará benefícios significativos, como maior eficiência operacional, redução de custos e aumento da produtividade.

---

## Público alvo

Os principais grupos de usuários da aplicação são:

| Perfil de usuário | Descrição, necessidades e interesses. |
| --- | --- |
| Equipes de Manutenção | Técnicos e engenheiros responsáveis pela execução das manutenções. Necessitam de acesso fácil às solicitações de manutenção, status das manutenções e informações detalhadas sobre as máquinas. |
| Gestores de Manutenção | Supervisores e gerentes responsáveis pelo planejamento e controle das manutenções. Precisam de relatórios detalhados, controle de custos e ferramentas para atribuição de tarefas. |
| Equipe de Estoque | Colaboradores responsáveis pelo controle de peças e materiais. Necessitam de um sistema eficiente para registrar entradas e saídas de peças e visualizar o estoque em tempo real. |

### Priorizar Usuários

- **Equipes de Manutenção:** Críticos para o sucesso inicial, pois são os principais usuários do sistema e os mais afetados pela falta de organização.
- **Gestores de Manutenção:** Importantes para o planejamento estratégico e o controle de custos.
- **Equipe de Estoque:** Necessários para garantir a disponibilidade de peças e materiais.

## Personas

1. **João Silva:** Técnico de manutenção com 10 anos de experiência, trabalha diretamente nas máquinas e necessita de uma interface fácil para registrar manutenções e acessar informações sobre as máquinas rapidamente.
2. **Maria Oliveira:** Gerente de manutenção, responsável pelo planejamento e supervisão das manutenções. Precisa de relatórios detalhados e ferramentas para monitorar o progresso das manutenções e controlar custos.
3. **Carlos Souza:** Responsável pelo estoque de peças. Necessita de um sistema eficiente para registrar entradas e saídas de peças, monitorar o estoque em tempo real e gerar relatórios de inventário.

---

## Requisitos Funcionais

1. **Gerenciamento de Máquinas:**
    - Cadastro de máquinas, incluindo informações como nome, tipo, modelo, data de fabricação, número de série, localização, histórico de manutenção. **P1**
    - Visualização detalhada de cada máquina, com histórico de manutenções, informações sobre peças e materiais utilizados. **P1**
2. **Gerenciamento de Manutenções:**
    - Cadastro de solicitações de manutenção, incluindo informações como descrição do problema, data da solicitação, prioridade, responsável, status da manutenção. **P1**
    - Gerenciar o status da manutenção (pendente, em andamento, concluída, cancelada), com possibilidade de adicionar comentários e arquivos relacionados. **P1**
    - Atribuir equipes de manutenção às solicitações. **P1**
    - Registrar as peças e materiais utilizados durante a manutenção, incluindo quantidade e fornecedor. **P1**
    - Gerar relatórios de manutenção por máquina, por período, por tipo de manutenção (preventiva, corretiva, etc.). **P2**
3. **Controle de Estoque de Peças:**
    - Cadastrar peças de reposição, incluindo informações como nome, código, fornecedor, quantidade em estoque, valor unitário. **P1**
    - Registrar a entrada e saída de peças, com data e quantidade. **P1**
    - Visualizar o estoque de peças em tempo real e gerar relatórios de estoque. **P2**
4. **Gerenciamento de Equipes:**
    - Cadastrar as equipes de manutenção, com informações sobre os colaboradores e suas especialidades. **P1**
    - Atribuir as equipes às solicitações de manutenção. **P1**
    - Gerenciar a disponibilidade dos colaboradores. **P2**
5. **Autenticação e Autorização:**
    - Criar contas de usuário para diferentes tipos de acesso (administrador, técnico, etc.). **P1**
    - Controlar os acessos a diferentes funcionalidades da aplicação web. **P1**

### Casos de uso

1. **Caso de uso 1:** Um técnico de manutenção acessa a aplicação para registrar uma nova solicitação de manutenção, incluindo a descrição do problema, a prioridade e a data da solicitação.
2. **Caso de uso 2:** Um gerente de manutenção visualiza o status das manutenções em andamento e atribui uma equipe específica para uma nova solicitação de manutenção.
3. **Caso de uso 3:** O responsável pelo estoque de peças registra a entrada de novas peças no sistema, atualizando o estoque em tempo real.

---

## Requisitos Não Funcionais

1. **Interface amigável e intuitiva:** A interface deve ser fácil de usar e intuitiva para todos os usuários, independente do nível de conhecimento técnico. **P1**
2. **Responsividade:** A aplicação web deve funcionar perfeitamente em diferentes dispositivos (computadores, tablets, smartphones). **P1**
3. **Segurança:** Implementar medidas de segurança para proteger os dados da aplicação, evitando acessos não autorizados e protegendo a aplicação contra ataques de hackers. **P1**
4. **Desempenho:** A aplicação deve ser rápida e eficiente, respondendo às solicitações do usuário com rapidez, mesmo com um grande volume de dados. **P1**
