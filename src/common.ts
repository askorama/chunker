import { AutoTokenizer, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.15.0'

env.useBrowserCache = false
env.allowLocalModels = false

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

  private async init() {
    this.tokenizer = await AutoTokenizer.from_pretrained('Xenova/bert-base-uncased')
  }

  public async getNumberOfTokens(input: string): Promise<number> {
    await this.ready
    const result = await this.tokenizer(input)
    return result.input_ids.size
  }
}
