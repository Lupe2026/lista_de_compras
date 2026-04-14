# 🛒 App Lista de Compras PWA

Uma aplicação simples, leve e funcional de lista de compras, projetada para ser instalada diretamente no telemóvel como um **PWA (Progressive Web App)**, sem a necessidade de utilizar a Google Play Store.

## 🚀 Funcionalidades

- **Categorias Pré-definidas:** Organização automática por:
  - Alimentação
  - Higiene e Limpeza
  - Utensílios Domésticos
  - Cama, Mesa e Banho
  - Bazar
- **Gestão de Itens:** Adicione novos produtos, edite nomes ou remova itens que já não são necessários.
- **Persistência de Dados:** Os itens são guardados no armazenamento local do navegador (`localStorage`), para que não perca a sua lista ao fechar o app.
- **Splash Screen:** Tela de abertura personalizada com logo e duração de 4 segundos.
- **Instalável:** Funciona como um app nativo no Android e iOS através da função "Adicionar à tela de início".

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura da aplicação.
- **CSS3:** Design responsivo e animações da Splash Screen.
- **JavaScript (Vanilla):** Lógica de manipulação de dados e controlo do tempo de carregamento.
- **Web App Manifest:** Configurações para instalação no smartphone.

## 📱 Como instalar no telemóvel

Este app foi configurado para ser utilizado via **GitHub Pages**.

1. Aceda ao link do projeto pelo navegador do seu telemóvel (Chrome para Android ou Safari para iPhone).
2. Aguarde a Splash Screen de 4 segundos terminar.
3. No **Android**: Clique nos três pontos (menu) e selecione **"Instalar aplicativo"** ou **"Adicionar ao ecrã principal"**.
4. No **iPhone**: Clique no ícone de partilha (quadrado com seta para cima) e selecione **"Adicionar ao ecrã principal"**.

## 💻 Como rodar localmente (Desenvolvedor)

Se quiser editar este código no seu computador utilizando o **Visual Studio Code**:

1. Clone ou descarregue os ficheiros deste repositório.
2. Abra a pasta no VS Code.
3. Utilize a extensão **Live Server** para rodar o projeto num servidor local.
4. Clique com o botão direito no ficheiro `index.html` e selecione **"Open with Live Server"**.

## 📁 Estrutura de Ficheiros

- `index.html`: Interface principal e estrutura da Splash Screen.
- `style.css`: Estilos visuais e responsividade.
- `script.js`: Funções de adicionar, editar, eliminar e lógica do timer da splash.
- `manifest.json`: Ficheiro de configuração PWA.
- `logo_lista_de_compras.png`: Ícone oficial do app.

---
Desenvolvido para uso pessoal e organização doméstica.
