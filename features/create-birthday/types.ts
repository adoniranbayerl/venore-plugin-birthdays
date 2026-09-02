import type { OperationResult } from "@venore/plugin-sdk";
import type { BirthdayRecord } from "../../contracts/types";

export type CreateBirthdayCommand = {
  fullName: string;
  role?: string | null;
  locality?: string;
  month: number;
  day: number;
  actorId: string;
};

export type CreateBirthdayInput = Omit<CreateBirthdayCommand, "actorId">;
export type CreateBirthdayResult = OperationResult<BirthdayRecord>;
