# 📌 Chatbot para IFBA - Integração Dialogflow, Pipedream, Gemini e WhatsApp  

## 📖 Sobre o Projeto  
Este projeto tem como objetivo desenvolver um **chatbot inteligente** para responder dúvidas de alunos, professores e servidores do **IFBA**. O chatbot utiliza o **Dialogflow** para reconhecimento de intents, o **Pipedream** para automação de processos e o **Gemini** para respostas mais elaboradas com base em documentos institucionais.  

A comunicação acontece via **WhatsApp**, permitindo que os usuários enviem perguntas diretamente pelo aplicativo e recebam respostas de forma automatizada.  

---

## 🛠️ Tecnologias Utilizadas  

- **[Dialogflow](https://cloud.google.com/dialogflow)** → Para análise de intenção do usuário  
- **[Gemini AI (Google AI Studio)](https://ai.google.dev/)** → Para geração de respostas com base em arquivos de texto baseados no Projeto Pedagógico do Curso de Sistemas de Informação, IFBA Campus Vitória da Conquista  
- **[Pipedream](https://pipedream.com/)** → Para orquestração e automação das integrações  
- **[AutoReply]** → Para envio e recebimento de mensagens no WhatsApp  
- **[Google Cloud Platform](https://cloud.google.com/)** → Para hospedagem e gerenciamento de credenciais  

---

## 📌 Fluxo de Funcionamento  

1️⃣ O usuário envia uma **mensagem no WhatsApp** 📲  
2️⃣ O **Dialogflow** processa a mensagem e verifica se existe um **intent correspondente**  
   - **Se o intent for encontrado**, retorna a resposta diretamente  
   - **Se o intent não for encontrado**, a mensagem é enviada ao **Pipedream**  
3️⃣ O **Pipedream** relaciona a dúvida do usuário com um arquivo de texto alocado em seu workflow e envia-os ao **Gemini**  
4️⃣ O **Gemini** responde a dúvida do usuário com base no que entendeu do aquivo de texto e gera uma resposta contextualizada 
5️⃣ O chatbot retorna a resposta ao usuário no **WhatsApp** ✅ 

---

## 🏗️ Estrutura do Projeto  

📂 **Pasta do Projeto**  
├── 📜 `README.md` → Este arquivo, contendo a documentação do projeto  
├── 📂 `arquivos .txt` → Contém os arquivos utilizados pelo **Gemini** como base para responder às dúvidas  
├── 📂 `workflow` → Contém os fluxos de trabalho organizados em quatro etapas:                                                                          
│   ├── 📂 `Trigger (Recebe a sessão do Dialogflow)` → Contém a documentação sobre o recebimento da sessão do usuário   
│   ├── 📂 `Step 1 (Código Fonte)` → Contém o código-fonte do projeto e sua documentação  
│   ├── 📂 `Step 2 (Integração com Gemini)` → Contém a documentação da integração com o Gemini  
│   ├── 📂 `Step 3 (Retorna ao Dialogflow)` → Contém a documentação sobre o retorno da resposta ao Dialogflow   

---

## 🚀 Implementação Técnica  

### 🔹 **1. Configuração do Dialogflow**  
- Criar um agente no **Dialogflow CX** ou **Dialogflow ES**  
- Adicionar intents relevantes (exemplo: "Informações sobre TCC", "Prazos de matrícula", etc.)  
- Criar um webhook para chamadas externas (Pipedream)  

### 🔹 **2. Integração com Pipedream**  
- Criar um fluxo no **Pipedream** com os seguintes steps:  

  1️⃣ **Webhook (Trigger)** → Recebe a requisição do Dialogflow  
  2️⃣ **Busca de variável no .env** → Obtém a informação relevante  
  3️⃣ **Gemini AI (Google AI Studio)** → Gera uma resposta baseada na base de dados  
  4️⃣ **Resposta HTTP para o Dialogflow**  


## 📌 Exemplo de Mensagem e Resposta  

**Usuário no WhatsApp:**  
> "Quais são os pré-requisitos para cursar TCC II?"  

**Resposta do Chatbot:**  
> "Para se matricular em TCC II, é necessário ter sido aprovado em TCC I e cumprir pelo menos 60% da carga horária do curso. Além disso, um professor da área de Computação deve atuar como orientador."  

---

## 🔐 Segurança e Gerenciamento de Credenciais  

Para proteger credenciais e evitar acessos não autorizados:  
- Utilizamos variáveis de ambiente (`.env`) para armazenar tokens do Google Cloud e Twilio  
- O acesso ao Gemini AI é autenticado via **OAuth 2.0**  
- O webhook do Dialogflow aceita apenas requisições autenticadas  

---

## 📅 Próximos Passos  
✔ Melhorar a base de conhecimento do chatbot  
✔ Implementar suporte para múltiplos documentos no Google Drive  
✔ Adicionar um banco de dados para registrar interações do usuário  

---

## 🤝 Contribuição  
Se deseja contribuir, siga os passos:  
1. Faça um **fork** do repositório  
2. Crie uma **branch** (`feature/nova-funcionalidade`)  
3. Envie um **pull request** 🚀  

---

## 🏆 Créditos  
Desenvolvido por **Dr. Leonardo Barreto Campos** e **Caio Cotrim** como parte de um projeto de iniciação científica no **IFBA Campus Vitória da Conquista** 🎓  
