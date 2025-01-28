<h1 align="center">
  <br>
  <a href="https://github.com/aumanshkaushal/link"><img src="https://github.com/aumanshkaushal/link/blob/main/assets/readme_link.jpg?raw=true" alt="Link! Discord Bot"></a>
  <br>
  Link!
  <br>
</h1>


<h4 align="center">Securely send gamelinks to people present in the voice channel!</h4>

<p align="center">
  <a href="https://discord.gg/f85T9H7Wqn">
  <img alt="Discord" src="https://img.shields.io/discord/1291481095086538824?style=flat&logo=discord&logoColor=%23ffffff&logoSize=auto&label=Discord%20Support%20Server&color=%23ffffff">

  </a>
  <a href="https://github.com/aumanshkaushal/link">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/aumanshkaushal/link?style=flat&color=ffffff">

  </a>
  <a href="https://github.com/aumanshkaushal/link">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/aumanshkaushal/link?color=ffffff">
</p>

## Firestore Flowchart:

```mermaid
flowchart TD;
    A[(Link! - Firestore)];
    A --> |Collection| B[pack];
    A --> |Collection| C[info];
    A --> |Collection| D[guild];
    A --> |Collection| E[user];
    B --> |Document| F([Pack_ID_1]);
    B --> |Document| G([Pack_ID_2]);
    B --> |Document| H([Pack_ID_3]);
    F --> |Field| I[name];
    F --> |Field| J[gameId];
    J --> |Element| K([Game_ID_1]);
    J --> |Element| L([Game_ID_2]);
    J --> |Element| M([Game_ID_3]);
    C --> |Document| N([Game_ID_1]);
    C --> |Document| O([Game_ID_2]);
    C --> |Document| P([Game_ID_3]);
    N --> |Field| Q[emoji];
    N --> |Field| R[homepage];
    N --> |Field| S[name];
    N --> |Field| T[purchase];
    N --> |Field| U[range];
    N --> |Field| V[url];
    U --> |Element| W([Minimum_Players]);
    U --> |Element| X([Maximum_Players]);
    D --> |Document| Y([Guild_ID_1]);
    D --> |Document| Z([Guild_ID_2]);
    D --> |Document| A1([Guild_ID_3]);
    Y --> |Field| A2[customUrls];
    Y --> |Field| A3[enabledPacks];
    Y --> |Field| A4[trustedRoles];
    A2 --> |Element| A5([customurl1.com/*]);
    A2 --> |Element| A6([customurl2.com/*]);
    A2 --> |Element| A7([customurl3.com/*]);
    A3 --> |Element| A8([Pack_ID_1]);
    A3 --> |Element| A9([Pack_ID_2]);
    A3 --> |Element| A10([Pack_ID_3]);
    A4 --> |Element| A11([Role_ID_1]);
    A4 --> |Element| A12([Role_ID_2]);
    A4 --> |Element| A13([Role_ID_3]);
    E --> |Document| B1([User_ID_1]);
    E --> |Document| B2([User_ID_2]);
    E --> |Document| B3([User_ID_3]);
    B1 --> |Field| B4[blacklisted];
    B1 --> |Field| B5[optin];
```
