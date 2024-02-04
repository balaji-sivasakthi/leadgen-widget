export type ViewOptions = {
  name: string
}

export type ButtonOptions  =  {} & ViewOptions
export type InputFieldOptions =  {} & ViewOptions
export type ContainerOptions =  {} & ViewOptions
export type LeadGenOptions = {} & WidgetOptions;

export type WidgetOptions = {
  callbackUrl: string;
};
