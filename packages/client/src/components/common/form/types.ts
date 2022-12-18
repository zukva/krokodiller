export type TypeFormConfig = Record<string, { label: string; value: string }>
export interface IForm {
  config: TypeFormConfig
  buttonLabel: string
  onSubmit: (values: Record<string, string>) => void
}
