import { Chunker } from './common.ts'

export class FixedChunker extends Chunker {
  public async chunk(input: string, maxTokensPerChunk: number): Promise<string[]> {
    const words = input.split(/\s+/)
    const chunks: string[] = []

    let start = 0

    const totalWords = words.length

    while (start < totalWords) {
      let low = start
      let high = totalWords
      let validChunk = ''

      while (low < high) {
        const mid = low + Math.floor((high - low) / 2)
        const testChunk = words.slice(start, mid + 1).join(' ')
        const tokenCount = await this.getNumberOfTokens(testChunk)

        if (tokenCount <= maxTokensPerChunk) {
          validChunk = testChunk
          low = mid + 1
        } else {
          high = mid
        }
      }

      if (validChunk) {
        chunks.push(validChunk)
        start = low
      } else {
        chunks.push(words[start])
        start += 1
      }
    }

    return chunks
  }
}
