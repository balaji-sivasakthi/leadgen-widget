import CoreWidget from "./core/index";
import { WidgetOptions } from "./core/types";

export class LeadGenWidget extends CoreWidget {
  constructor(options: WidgetOptions) {
    super(options);
  }
}

// LendGen's Usage Example
new LeadGenWidget({
  callbackUrl: "http://localhost:3000/form-data"
});
