# Projeto 2 – Sistemas de Busca

Este projeto tem como objetivo implementar e analisar o desempenho de diferentes algoritmos de busca em estruturas de dados.

Foram implementados três métodos de busca:

- **Busca Sequencial**
- **Busca Binária**
- **Busca em Árvore Binária de Busca (BST)**

O projeto também realiza experimentos para comparar o desempenho empírico dos algoritmos com suas complexidades teóricas.

---

# Algoritmos Implementados

## Busca Sequencial

A busca sequencial percorre todos os elementos do vetor até encontrar o elemento desejado.

### Complexidade

| Caso        | Complexidade |
| ----------- | ------------ |
| Melhor caso | O(1)         |
| Caso médio  | O(n)         |
| Pior caso   | O(n)         |

---

## Busca Binária

A busca binária divide o vetor ao meio a cada iteração.
Esse método **exige que o vetor esteja ordenado**.

### Complexidade

| Caso        | Complexidade |
| ----------- | ------------ |
| Melhor caso | O(1)         |
| Caso médio  | O(log n)     |
| Pior caso   | O(log n)     |

---

## Busca em Árvore Binária de Busca (BST)

A árvore binária de busca organiza os elementos de forma hierárquica:

- valores menores ficam à esquerda
- valores maiores ficam à direita

### Complexidade

| Caso        | Complexidade |
| ----------- | ------------ |
| Melhor caso | O(log n)     |
| Caso médio  | O(log n)     |
| Pior caso   | O(n)         |

O pior caso ocorre quando a árvore se torna **degenerada**, semelhante a uma lista encadeada.

---

# Metodologia dos Experimentos

Para avaliar o desempenho dos algoritmos foram realizados experimentos com diferentes volumes de dados.

## Tamanhos de entrada

- 1000 elementos
- 5000 elementos
- 10000 elementos

## Execuções

Cada experimento foi executado **30 vezes** para obter resultados estatisticamente mais confiáveis.

O tempo de execução foi medido utilizando:

```
performance.now()
```

Após as execuções foram calculados:

- **Tempo médio**
- **Desvio padrão**

---

# Estrutura do Projeto

```
src
 ├── search
 │    ├── sequentialSearch.ts
 │    ├── binarySearch.ts
 │    └── bst.ts
 │
 ├── benchmark
 │    └── benchmarkSearch.ts
 │
 └── index.ts
```

---

# Como executar o projeto

## 1. Instalar dependências

```
npm install
```

## 2. Compilar o projeto

```
npm run build
```

## 3. Executar os testes de benchmark

```
npm run start
```

---

# Exemplo de saída

```
Volume de dados: 1000

Busca Sequencial média: 0.120 ms | desvio: 0.01
Busca Binária média: 0.002 ms | desvio: 0.0003
Busca BST média: 0.003 ms | desvio: 0.0004
```

---

# Análise dos Resultados

Os resultados mostram que:

- **Busca sequencial** cresce linearmente com o tamanho dos dados.
- **Busca binária** apresenta desempenho muito superior para grandes volumes devido à complexidade **O(log n)**.
- **Busca em árvore de busca** também apresenta desempenho logarítmico em média, porém depende da estrutura da árvore.

Os resultados experimentais observados estão de acordo com as previsões teóricas de complexidade dos algoritmos.

---

# Conclusão

A análise demonstrou que algoritmos com complexidade logarítmica escalam muito melhor para grandes volumes de dados.

A busca binária e a busca em árvore binária de busca mostraram desempenho significativamente superior à busca sequencial em cenários com grande quantidade de elementos.
