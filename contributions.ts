import type { PluginContributions } from "@venore/plugin-sdk";
import { birthdaysBreadcrumbSegments } from "./breadcrumbs";
import { blockDefinitions } from "./blocks/definitions";
import { birthdaysSeeds } from "./seeds";

// O que o birthdays contribui pro core. `blockDefinitions` é dado puro (serializável) e entra
// direto; `blockRenderers` puxa o componente de render (handler -> query -> db), então é um
// loader preguiçoso — só block-renderers.tsx do core o chama.
export const birthdaysContributions: PluginContributions = {
  breadcrumbSegments: birthdaysBreadcrumbSegments,
  blockDefinitions,
  blockRenderers: async () => (await import("./blocks/renderers")).blockRenderers,
  seeds: birthdaysSeeds,
};
