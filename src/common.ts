import { AutoTokenizer, env } from 'npm:@xenova/transformers@2.15.0'

env.useBrowserCache = false
env.allowLocalModels = false

/**
 * Represents a Chunker object that can be used to tokenize input strings and count the number of tokens.
 */
export class Chunker {
  protected verbose = false
  protected ready: Promise<boolean>
  // deno-lint-ignore no-explicit-any
  private tokenizer: any

  constructor() {
    this.ready = this.init()
      .then(() => true)
      .catch(() => false)
  }

  /**
   * Initializes the Chunker object by loading the tokenizer.
   * @returns A promise that resolves when the tokenizer is loaded successfully.
   */
  private async init(): Promise<void> {
    this.tokenizer = await AutoTokenizer.from_pretrained('Xenova/bert-base-uncased')
  }

  /**
   * Gets the number of tokens in the input string.
   * @param input - The input string to tokenize.
   * @returns A promise that resolves with the number of tokens in the input string.
   */
  public async getNumberOfTokens(input: string): Promise<number> {
    await this.ready
    const result = await this.tokenizer(input)
    return result.input_ids.size
  }
}
