import type { BlockRendererComponent } from "@venore/plugin-sdk";
import { BirthdaysMonthListBlock } from "./birthdays-month-list-block";

export const blockRenderers: Record<string, BlockRendererComponent> = {
  "birthdays.month.list": BirthdaysMonthListBlock,
};
