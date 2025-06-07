# Configuração HarmoniQ

## URL da API de Música

Para conectar o HarmoniQ à sua API de música, você precisa definir a URL base da API.

1.  **Crie um arquivo `.env.local`** na raiz do seu projeto (ao lado de `package.json`).
2.  **Adicione a seguinte linha** ao seu arquivo `.env.local`, substituindo `https://your-actual-api.com/api/v1` pelo seu endpoint de API real:

    ```env
    NEXT_PUBLIC_MUSIC_API_URL=https://your-actual-api.com/api/v1
    ```

    Por exemplo, se sua API estiver hospedada em `https://my-music-service.dev/api`, você usaria:
    ```env
    NEXT_PUBLIC_MUSIC_API_URL=https://my-music-service.dev/api
    ```

3.  **Reinicie o seu servidor de desenvolvimento** (`npm run dev` ou `yarn dev`) para que as alterações entrem em vigor.

A aplicação usa uma URL de placeholder (`https://api.example.com/music`) por padrão, que provavelmente não funcionará. Você **deve** configurar esta variável de ambiente para que o aplicativo busque dados da sua API pretendida.

A lógica de interação da API pode ser encontrada em `src/lib/api.ts`. Se sua API tiver endpoints ou estruturas de dados diferentes, você precisará atualizar este arquivo de acordo.
