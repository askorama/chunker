import nlp from 'npm:compromise/one'
import { Chunker } from './common.ts'

export class NLPChunker extends Chunker {
  constructor() {
    super()
  }

  public async chunk(input: string, maxTokensPerChunk: number): Promise<string[]> {
    await this.ready

    const sentences = nlp.tokenize(input).fullSentences().out('array')
    const chunks: string[] = []

    let currentChunk = ''
    for (const sentence of sentences) {
      const sentenceTokenCount = await this.getNumberOfTokens(sentence)
      const currentChunkTokenCount = await this.getNumberOfTokens(currentChunk)

      if (sentenceTokenCount + currentChunkTokenCount <= maxTokensPerChunk) {
        currentChunk += (currentChunk ? ' ' : '') + sentence
      } else {
        if (currentChunk) {
          chunks.push(currentChunk)
        }
        if (sentenceTokenCount > maxTokensPerChunk) {
          chunks.push(sentence)
          currentChunk = ''
        } else {
          currentChunk = sentence
        }
      }
    }
    if (currentChunk) {
      chunks.push(currentChunk)
    }

    return chunks
  }
}
