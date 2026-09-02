"use client";

import { useActionState } from "react";
import { Button } from "@venore/plugin-sdk/ui";
import { useActionToast } from "@venore/plugin-sdk/ui";
import { createBirthdayAction, type BirthdaysActionState } from "./actions";
import { BirthdayFields } from "./birthday-fields";

const initialState: BirthdaysActionState = { error: null };

export function CreateBirthdayForm({ onSuccess }: { onSuccess?: () => void }) {
  const [state, formAction, pending] = useActionState(createBirthdayAction, initialState);
  useActionToast({ pending, error: state.error, successMessage: "Aniversariante cadastrado.", onSuccess });

  return (
    <form action={formAction} className="space-y-3">
      <BirthdayFields />
      <Button type="submit" disabled={pending} className="w-full">
        Cadastrar
      </Button>
    </form>
  );
}
