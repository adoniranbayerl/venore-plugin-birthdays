import type { BreadcrumbSegmentDefinition } from "@venore/plugin-sdk";
import { staticBreadcrumbSegment } from "@venore/plugin-sdk";

export const birthdaysBreadcrumbSegments: BreadcrumbSegmentDefinition[] = [
  staticBreadcrumbSegment({ key: "birthdays.public", segments: ["birthdays"], label: "Aniversariantes" }),
  staticBreadcrumbSegment({ key: "birthdays.admin", segments: ["admin", "birthdays"], label: "Aniversariantes" }),
  staticBreadcrumbSegment({
    key: "birthdays.admin.appearance",
    segments: ["admin", "birthdays", "appearance"],
    label: "Aparência",
  }),
];
