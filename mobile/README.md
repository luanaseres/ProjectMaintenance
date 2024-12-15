# **Sistema de Manutenção**

## **Resumo**

Este projeto faz parte de um sistema de manutenção composto por duas aplicações: uma web e outra mobile. A aplicação mobile foi desenvolvida com o objetivo de gerenciar máquinas, manutenções e equipes, além de fornecer funcionalidades de autenticação e visualização de relatórios. A aplicação permite o acompanhamento detalhado de solicitações de manutenção, registro de peças e materiais utilizados, e gerenciamento de equipes envolvidas nas manutenções.

---

## **Funcionalidades do Aplicativo Mobile**

### **1. Gerenciamento de Máquinas**
- Lista de máquinas com informações básicas (nome, tipo, localização).
- Acesso a informações detalhadas de uma máquina (modelo, data de fabricação, número de série).

### **2. Manutenção**
- Visualizar o histórico de manutenções recentes.
- Marcar uma máquina como "em manutenção" e adicionar comentários.

### **3. Solicitação**
- Criar solicitações de manutenção (descrição do problema, prioridade, responsável).
- Visualizar o status da manutenção (pendente, em andamento, concluída).
- Adicionar comentários e fotos à solicitação.

### **4. Registro**
- Registrar as peças e materiais utilizados durante a manutenção.

### **5. Relatórios**
- Visualizar relatórios de manutenções recentes (data, descrição, status).
- Visualizar o estoque de peças disponíveis (nome, quantidade).
- Consultar a disponibilidade de peças específicas para uma manutenção.

### **6. Gerenciamento de Equipes**
- Visualizar a lista de equipes disponíveis e seus membros.
- Verificar a disponibilidade de equipes para uma determinada manutenção.

### **7. Autenticação e Autorização**
- Autenticação via login e senha.

---

## **Estrutura do Projeto**

O código está organizado da seguinte maneira:

- **components/**: Contém os componentes reutilizáveis, como cards e tabelas, usados nas telas.
- **app/**: Contém as telas principais da aplicação. 
  - As telas que não fazem parte do menu de navegação (tab) estão diretamente dentro desta pasta.
  - As telas que fazem parte do menu de navegação estão dentro da pasta `tabs`, que se encontra dentro de `app/`.

---

## **Tecnologias Utilizadas**

- **React Native**: Framework principal para desenvolvimento da aplicação mobile.
- **NativeWind**: Utilizado para estilização com Tailwind CSS.
- **Expo**: Plataforma para execução e desenvolvimento de aplicativos React Native de maneira simplificada.

---

## **Instalação e Configuração**

### **Clone o repositório**

1. Clone o repositório:
   ```bash
   git clone https://github.com/LuanaSeres/ProjectMaintenance.git
   ```

2. Entre na pasta `mobile`:
   ```bash
   cd mobile
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Instale a CLI do Expo globalmente:
   ```bash
   npm install -g expo-cli
   ```

5. Inicie o projeto:
   ```bash
   npm start
   # ou
   npx expo start
   ```

6. Baixe o app Expo Go no seu dispositivo móvel:
   - **iOS**: Utilize a câmera do seu celular para escanear o QR Code gerado.
   - **Android**: Escaneie o QR Code diretamente pelo app **Expo Go**.

Agora, você deve conseguir visualizar e interagir com a aplicação mobile diretamente no seu dispositivo.

---

## **Autores e Contribuidores**

- **Luana**
- **Misael**
- **Talia**
- **Leticia**
- **Gabriel Teodoro**

