import axios from 'axios'

class GameMusic {
  private audioContext: AudioContext
  private audioBuffer: AudioBuffer | undefined
  private sources: AudioBufferSourceNode[] = []
  public loop = false
  constructor(url: string, loop = false) {
    this.initMusic(url)
    this.loop = loop
    this.audioContext = new AudioContext()
  }

  private async initMusic(url: string) {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    })
    this.audioBuffer = await this.audioContext.decodeAudioData(response.data)
  }

  private createSource() {
    if (!this.audioBuffer) {
      return
    }
    const source = this.audioContext.createBufferSource()
    source.buffer = this.audioBuffer
    source.loop = this.loop
    source.connect(this.audioContext.destination)

    return source
  }

  public start() {
    const source = this.createSource()
    if (source) {
      this.sources.push(source)
      source.start()
    }
  }

  public stop() {
    this.sources.forEach(source => source.stop())
  }
}

export default GameMusic
