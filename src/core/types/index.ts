export type ViewOptions = {
  name: string;
  className?: string;
};

export type TextOptions =  {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
} & ViewOptions;
export type ButtonOptions = {} & ViewOptions;
export type InputFieldOptions = {} & ViewOptions;
export type ContainerOptions = {} & ViewOptions;

export type LeadGenOptions = {} & WidgetOptions;

export type WidgetOptions = {
  callbackUrl: string;
};
