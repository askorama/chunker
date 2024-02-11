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

The **Fixed Chunker** will divide your input text into several pieces of a specified size. It does not consider the semantics of your input text, as its sole purpose is to divide the text and ensure that each piece contains a maximum number of tokens. It is slightly faster and lighter as it requires fewer computations to determine the chunking strategy.

On the other hand, the **NLP Chunker** divides your input into multiple sentences while preserving the overall context of each individual chunk. This method requires a bit more computing power, but it's usually the preferred option.

Once you have decided which chunking strategy you want to adopt, you can import the `FixedChunker` or the `NLPChunker` into your project:

```js
import { FixedChunker } from '@orama/chunker'

const input = `My large text input...`
const maxTokens = 512

const chunker = new FixedChunker()
const result = await chunker.chunk(input, maxTokens)
```

In this example, `result` will return an array of strings, where each string contains at most `512` tokens.

The **NLP Chunker** works in the same way:

```js
import { NLPChunker } from '@orama/chunker'

const input = `My large text input...`
const maxTokens = 512

const chunker = new NLPChunker()
const result = await chunker.chunk(input, maxTokens)
```

The only difference is that it will return all the sentences found in the text input, where each sentence will have at most `512` tokens.

## License

[Apache 2.0](/LICENSE.md)