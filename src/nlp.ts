/**
 * Represents a chunker that uses natural language processing (NLP) to split text into chunks.
 * This chunker extends the base `Chunker` class.
 */
import nlp from 'npm:compromise@14.11.2/one'
import { Chunker } from './common.ts'

export class NLPChunker extends Chunker {
  /**
   * Splits the input text into chunks based on the maximum number of tokens per chunk.
   * @param {String} input - The input text to be chunked.
   * @param {Number} maxTokensPerChunk - The maximum number of tokens allowed per chunk.
   * @returns A promise that resolves to an array of chunks.
   */
  public chunk(input: string, maxTokensPerChunk: number): string[] {
    const sentences = nlp.tokenize(input).fullSentences().out('array')
    const chunks: string[] = []

    let currentChunk = ''
    for (const sentence of sentences) {
      const sentenceTokenCount = this.getNumberOfTokens(sentence)
      const currentChunkTokenCount = this.getNumberOfTokens(currentChunk)

      if (sentenceTokenCount + currentChunkTokenCount <= maxTokensPerChunk) {
        currentChunk += (currentChunk ? ' ' : '') + sentence
      } else {
        if (currentChunk) {
          chunks.push(currentChunk)
        }
        currentChunk = sentenceTokenCount > maxTokensPerChunk ? '' : sentence

        if (sentenceTokenCount > maxTokensPerChunk) {
          chunks.push(sentence)
        }
      }
    }

    if (currentChunk) {
      chunks.push(currentChunk)
    }

    return chunks
  }
}
