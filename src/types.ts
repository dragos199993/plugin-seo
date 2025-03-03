import { Field } from 'payload/dist/fields/config/types';

export type GenerateTitle = <T = any>(args: { doc: T; locale?: string }) => string | Promise<string>
export type GenerateDescription = <T = any>(args: {
  doc: T
  locale?: string
}) => string | Promise<string>
export type GenerateImage = <T = any>(args: { doc: T; locale?: string }) => string | Promise<string>
export type GenerateURL = <T = any>(args: { doc: T; locale?: string }) => string | Promise<string>

export type PluginConfig = {
  collections?: string[]
  globals?: string[]
  uploadsCollection?: string
  fields?: Partial<Field>[]
  tabbedUI?: boolean
  generateTitle?: GenerateTitle
  generateDescription?: GenerateDescription
  generateImage?: GenerateImage
  generateURL?: GenerateURL
}

export type Meta = {
  title?: string
  description?: string
  keywords?: string
  image?: any // TODO: type this
}
