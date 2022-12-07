export type typeFormConfig = Record<string, { label: string; value: string }>;
export interface IForm {
  config: typeFormConfig;
  buttonLabel: string;
  onSubmit: (values: Record<string, string>) => void;
}
