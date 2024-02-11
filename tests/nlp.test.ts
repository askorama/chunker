import dedent from 'https://esm.sh/dedent'
import { assertEquals } from 'https://deno.land/std@0.215.0/assert/mod.ts'
import { NLPChunker } from '../src/nlp.ts'

const longInput = dedent`
  Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American businessman, inventor, and investor best known for co-founding the technology giant Apple Inc. Jobs was also the founder of NeXT and chairman and majority shareholder of Pixar. He was a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak.

  Jobs was born in San Francisco in 1955 and adopted shortly afterwards. He attended Reed College in 1972 before withdrawing that same year. In 1974, he traveled through India, seeking enlightenment before later studying Zen Buddhism. He and Wozniak co-founded Apple in 1976 to further develop and sell Wozniak's Apple I personal computer. Together, the duo gained fame and wealth a year later with production and sale of the Apple II, one of the first highly successful mass-produced microcomputers. Jobs saw the commercial potential of the Xerox Alto in 1979, which was mouse-driven and had a graphical user interface (GUI). This led to the development of the unsuccessful Apple Lisa in 1983, followed by the breakthrough Macintosh in 1984, the first mass-produced computer with a GUI. The Macintosh introduced the desktop publishing industry in 1985 with the addition of the Apple LaserWriter, the first laser printer to feature vector graphics.

  In 1985, Jobs departed Apple after a long power struggle with the company's board and its then-CEO, John Sculley. That same year, Jobs took some Apple employees with him to found NeXT, a computer platform development company that specialized in computers for higher-education and business markets, serving as its CEO. In 1986, he helped develop the visual effects industry by funding the computer graphics division of Lucasfilm that eventually spun off independently as Pixar, which produced the first 3D computer-animated feature film Toy Story (1995) and became a leading animation studio, producing over 27 films since.
`

Deno.test('NLP chunker', async () => {
  const chunker = new NLPChunker()
  const chunks = await chunker.chunk(longInput, 128)

  assertEquals(chunks.length, 4)
})
