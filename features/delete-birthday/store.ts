import { eq } from "drizzle-orm";
import { db } from "@venore/plugin-sdk";
import { birthdays } from "../../database/schema";

export async function deleteBirthdayById(id: string): Promise<boolean> {
  const rows = await db.delete(birthdays).where(eq(birthdays.id, id)).returning({ id: birthdays.id });
  return rows.length > 0;
}
