import type { OperationResult } from "@venore/plugin-sdk";

export type DeleteBirthdayCommand = { birthdayId: string; actorId: string };
export type DeleteBirthdayInput = { birthdayId: string };
export type DeleteBirthdayResult = OperationResult<{ birthdayId: string }>;
