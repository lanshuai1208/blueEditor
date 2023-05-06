
 

import { IEditorConfig } from './types'
export class Editor {
  private config: Partial<IEditorConfig>

  private container: Element

  constructor(config: IEditorConfig) {
    this.config = config
    this.container = this.getContainer(config.selector)
    console.log(this.container)
    this.container.setAttribute('contenteditable', 'true')
  }

  public getContainer(selector: string) {
    if (!selector) {
      throw new Error('please input query selector of the container')
    }

    const container = document.querySelectorAll(selector)

    if (!container.length) {
      throw new Error('query selector did not match element')
    }

    if (container.length > 1) {
      throw new Error('query selector matched multiple elements')
    }

    return container[0]
  }
}