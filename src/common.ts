import { AutoTokenizer, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.15.0'

env.useBrowserCache = false
env.allowLocalModels = false

export type ChunkerParameters = {
  verbose?: boolean
}

export class Chunker {
  protected verbose = false
  protected ready: Promise<boolean>
  private tokenizer: any

  constructor(params: ChunkerParameters = {}) {
    this.verbose = Boolean(params?.verbose)

    this.ready = this.init()
      .then(() => true)
      .catch((err) => {
        console.error(err)
        return false
      })
  }

  private async init() {
    this.tokenizer = await AutoTokenizer.from_pretrained('Xenova/bert-base-uncased')
  }

  public async getNumberOfTokens(input: string): Promise<number> {
    const result = await this.tokenizer(input)
    return result.input_ids.size
  }
}
