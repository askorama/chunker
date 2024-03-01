import type { Tiktoken } from 'npm:js-tiktoken@1.0.10'
import { getEncoding } from 'npm:js-tiktoken@1.0.10'

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
