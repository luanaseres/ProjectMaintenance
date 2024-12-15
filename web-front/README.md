# **Sistema de Gerenciamento de Manutenção**

## **Sobre o Projeto**

Atualmente, a empresa enfrenta desafios significativos na gestão de seu parque de máquinas, essencial para a produção de peças automotivas. O sistema manual de gerenciamento de manutenção leva a problemas críticos, como:  

- Falta de organização e controle.  
- Dificuldades na comunicação entre as equipes.  
- Perda de tempo e produtividade.  

Esses problemas resultam em atrasos na produção e comprometem a segurança e a eficiência esperadas.  

O objetivo deste projeto é desenvolver uma aplicação web para gerenciar as atividades de manutenção de máquinas, otimizando processos e melhorando a comunicação e organização dentro da empresa.

---

## **Índice**

1. [Sobre o Projeto](#sobre-o-projeto)  
2. [Funcionalidades](#funcionalidades)  
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)  
4. [Estrutura do Projeto](#estrutura-do-projeto)  
5. [Instalação e Configuração](#instalação-e-configuração)  
6. [Uso](#uso)  
7. [Testes](#testes)  
8. [Licença](#licença)  
9. [Autores e Contribuidores](#autores-e-contribuidores)

---

## **Funcionalidades**

### **Gerenciamento de Máquinas**  
- Cadastro de máquinas, incluindo:  
  - Nome, tipo, modelo, data de fabricação, número de série, localização e histórico de manutenção.  
- Visualização detalhada de cada máquina, com:  
  - Histórico de manutenções, informações sobre peças e materiais utilizados. 

### **Gerenciamento de Manutenções**  
- Cadastro de solicitações de manutenção, com:  
  - Descrição do problema, data da solicitação, prioridade, responsável e status da manutenção. 
- Gerenciamento do status da manutenção:  
  - Pendente, em andamento, concluída, cancelada, com possibilidade de adicionar comentários e arquivos relacionados. 
- Atribuir equipes de manutenção às solicitações.
- Registrar peças e materiais utilizados durante a manutenção, incluindo quantidade e fornecedor. 
- Gerar relatórios de manutenção por:  
  - Máquina, período e tipo de manutenção (preventiva, corretiva, etc.).

### **Controle de Estoque de Peças**  
- Cadastrar peças de reposição, incluindo:  
  - Nome, código, fornecedor, quantidade em estoque e valor unitário. 
- Registrar entrada e saída de peças, com data e quantidade. 
- Visualizar o estoque de peças em tempo real e gerar relatórios de estoque.

### **Gerenciamento de Equipes**  
- Cadastrar equipes de manutenção, com informações sobre:  
  - Colaboradores e suas especialidades.
- Atribuir equipes às solicitações de manutenção.  
- Gerenciar a disponibilidade dos colaboradores.

### **Autenticação e Autorização**  
- Criar contas de usuário para diferentes tipos de acesso (administrador, técnico, etc.).
- Controlar o acesso às funcionalidades da aplicação web.

---

## **Tecnologias Utilizadas**

- **React**: Biblioteca para criação de interfaces de usuário.  
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.  
- **Next.js**: Framework para React, utilizado para renderização do lado servidor.  
- **TailwindCSS**: Framework de CSS para estilização rápida e responsiva.  

---

## **Estrutura do Projeto**

Abaixo está a organização das pastas e arquivos principais da aplicação:  

```plaintext
src/
│
├── app/  
│   ├── cadastro/                 # Tela de cadastro de informações gerais  
│   ├── cadastroManutencao/       # Tela de cadastro de manutenções  
│   ├── components/               # Componentes reutilizáveis  
│   ├── controleCustos/           # Controle de custos relacionados às manutenções  
│   ├── controleEstoque/          # Gerenciamento de estoque de peças  
│   ├── detalhes/                 # Visualização detalhada das informações  
│   ├── equipes/                  # Gerenciamento das equipes de manutenção  
│   ├── manutencao/               # Tela principal de gerenciamento de manutenções  
│   ├── registroMateriais/        # Registro de peças e materiais utilizados  
│   ├── relatorioDesempenho/      # Relatórios de desempenho  
│   ├── relatorioEstoque/         # Relatórios de estoque  
│   ├── relatorioManutencao/      # Relatórios de manutenções realizadas  
│   └── statusManutencao/         # Gerenciamento de status das manutenções  
│
├── globals.css                   # Estilos globais da aplicação  
├── layout.tsx                    # Layout principal da aplicação  
├── page.tsx                      # Página principal  
│
├── .eslintrc.json                # Configuração do ESLint  
├── .gitignore                    # Arquivos e pastas ignorados pelo Git  
├── next-env.d.ts                 # Tipagem automática do Next.js  
├── next.config.mjs               # Configuração do Next.js  
├── package.json                  # Dependências e scripts do projeto  
├── postcss.config.js             # Configuração do PostCSS  
├── README.md                     # Documentação do projeto  
├── tailwind.config.ts            # Configuração do TailwindCSS  
└── tsconfig.json                 # Configuração do TypeScript  
```

---

## **Instalação e Configuração**

### **Instalação**
1. Clone este repositório:
   ```bash
   git clone https://github.com/luanaseres/ProjectMaintenance.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd ProjectMaintenance
   ```

3. Navegue até a pasta do FrontEnd:
   ```bash
   cd web-front
   ```

4. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## **Uso**

1. Para rodar o projeto localmente, execute o comando:
   ```bash
   npm start
   # ou
   yarn start
   ```
2. Acesse a aplicação no navegador em `http://localhost:3000`.

---

## **Autores e Contribuidores**

- **Luana**
- **Misael**
- **Talia**
- **Leticia**
- **Gabriel Teodoro**
