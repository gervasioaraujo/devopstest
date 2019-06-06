# MundoDevOps teste

## Solução:

Este projeto foi desenvolvido utilizando o framework React Native na versão 0.59.8.

Algumas bibliotecas foram utilizadas no desenvolvimento:

1. Para criar os ícones de menu e configurações, foi utilizada a "react-native-vector-icons";

2. Para criar o efeito de gradiente nos filtros, foi utilizada a "react-native-linear-gradient";

3. Para auxiliar na criação do header foi utilizada a lib "react-navigation", tendo em vista que, se fosse continuado, o aplicativo precisaria de funcionalidades de navegação entre telas.

## Passos para execução do projeto:

Este projeto foi testado somente na plataforma Android.

Considerando que na máquina já estejam configurados e funcionando adequadamente o git e o react native, execute os seguintes passos:

1. Abra o terminal na sua máquina, escolha o diretório apropriado, e digite o comando `git clone https://github.com/gervasioaraujo/devopstest.git` para baixar o projeto;

2. Digite `cd devopstest` para acessar o diretório do projeto;

3. Dentro do diretório do projeto, rode o comando `npm install` para que todas as libs utilizadas por ele sejam baixadas;

4. Ainda dentro do diretório do projeto, rode o comando `react-native link` para que configurações de algumas das libs instaladas sejam feitas em código nativo Android e IOS;

5. Por fim, conecte um dispositivo Android na sua máquina pela porta usb e execute o comando `react-native run-android`.

Obs.: Os filtros no app são ativados pelo toque.