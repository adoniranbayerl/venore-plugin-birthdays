import { authorizeActor } from "@venore/plugin-sdk/rbac";
import { listBirthdays } from "./service";
import type { ListBirthdaysResult } from "./types";

export async function listBirthdaysHandler(): Promise<ListBirthdaysResult> {
  const authz = await authorizeActor("birthdays.read");
  if (!authz.authorized) {
    return { success: false, error: authz.error };
  }

  return listBirthdays();
}
