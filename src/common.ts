import type { Tiktoken } from 'npm:js-tiktoken'
import { getEncoding } from 'npm:js-tiktoken'

/**
 * Represents a Chunker object that can be used to tokenize input strings and count the number of tokens.
 */
export class Chunker {
  protected verbose = false
  private tokenizer: Tiktoken

  constructor() {
    this.tokenizer = getEncoding('gpt2')
  }

  /**
   * Gets the number of tokens in the input string.
   * @param input - The input string to tokenize.
   * @returns A promise that resolves with the number of tokens in the input string.
   */
  public getNumberOfTokens(input: string): number {
    return this.tokenizer.encode(input).length
  }
}
