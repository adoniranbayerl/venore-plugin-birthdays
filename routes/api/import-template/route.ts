import { NextResponse } from "next/server";
import { authorizeActor } from "@venore/plugin-sdk/rbac";
import { generateBirthdaysCsvTemplate } from "../../../index";
import { isPluginActive } from "@venore/plugin-sdk";

export async function GET() {
  // Checagem de plugin ativo (Fase 6) antes da authorization: este route handler é invocável
  // direto por URL, sem passar por nenhum gate de página.
  if (!(await isPluginActive("birthdays"))) {
    return NextResponse.json({ error: "O plugin Aniversariantes está desabilitado." }, { status: 404 });
  }

  const authz = await authorizeActor("birthdays.manage");
  if (!authz.authorized) {
    return NextResponse.json({ error: authz.error.message }, { status: 403 });
  }

  return new NextResponse(generateBirthdaysCsvTemplate(), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="modelo-aniversariantes.csv"',
    },
  });
}
