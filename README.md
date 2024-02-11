# Orama Chunker

![Chunking Strategies](/misc/chunker.png)

When engaging with ChatGPT or other Large Language Models (LLMs), breaking down your input into smaller chunks is a strategy that significantly enhances the interaction experience. This approach is not just about managing the technical constraints of these models, such as input length limitations, but also about improving the quality of the dialogue. By dividing a complex query or detailed discussion into more digestible parts, users can guide the model through the conversation in a step-by-step manner. This method allows for a more nuanced understanding of the context and the specifics of each query, leading to responses that are not only accurate but also highly relevant to the user's needs.

Orama Chunker lets you achieve this by providing a simple yet powerful interface to two different chunking strategies: **fixed chunking**, and **NLP chunking**.

## Installation

You can install Orama Chunker via `npm`:

```sh
npm i @orama/chunker
```

If you're using Deno, you can import it via JSR:

```js
import { FixedChunker, NLPChunker } from 'jsr:@orama/chunker' 
```

## Usage

Orama Chunker is really easy to use. First of all, you have to decide which chunking strategy you want to adopt.

![Chunking Strategies](/misc/chunking-strategies.png)

## License

[Apache 2.0](/LICENSE.md)