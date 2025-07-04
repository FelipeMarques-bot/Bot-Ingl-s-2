# 🤖 ChatBot Voz: Analisador de Fala em Inglês

Este projeto é um chatbot inteligente desenvolvido para interações em inglês com análise da fala por áudio. A ferramenta permite que o usuário envie um áudio com sua pronúncia e receba feedback de correção, promovendo o aprendizado prático da língua inglesa.

## 📌 Funcionalidades

- Envio de áudios com frases em inglês
- Detecção automática da fala
- Comparação com a fala esperada
- Resposta com correção e sugestões
- Interface baseada em WhatsApp Web
- Utilização de scripts em JavaScript, Python e JSON para controle

## 🛠 Tecnologias utilizadas

- `Node.js` e `npm`
- `JavaScript`
- `Python`
- `speech_recognition` e bibliotecas de áudio
- `puppeteer` para automação do WhatsApp Web
- JSON para controle de vocabulário e progresso

## 🚀 Como instalar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto:
   ```bash
   node index.js
   ```

4. Para testar o reconhecimento de áudio (em Python):
   ```bash
   python teste_audio.py
   ```

> **Obs:** Certifique-se de ter Python 3 instalado e bibliotecas como `speech_recognition`, `pyaudio` ou similares.

## 💡 Estrutura do Projeto

```
├── áudio/               # Áudios de exemplo ou capturados
├── manipuladores/       # Funções auxiliares do chatbot
├── utilitários/         # Scripts e módulos de apoio
├── index.js             # Arquivo principal
├── pacote.json          # Configuração do projeto Node.js
├── palavras.json        # Vocabulário esperado
├── progresso.json       # Armazena evolução do usuário
├── teste_audio.py       # Script para reconhecimento de fala
├── whatsapp_web.js      # Interface com o WhatsApp Web
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📬 Contato

Feito por **Felipe Marques**.  
📧 Email: seuemail@email.com  
🔗 Instagram: [@ensino_religioso_em_acao](https://www.instagram.com/ensino_religioso_em_acao)

---

> Este projeto é ideal para fins educacionais e aprendizado interativo de inglês! ✨
