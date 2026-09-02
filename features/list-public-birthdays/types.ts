import type { OperationResult } from "@venore/plugin-sdk";

export type PublicBirthdayView = {
  id: string;
  fullName: string;
  role: string | null;
  month: number;
  day: number;
};

export type ListPublicBirthdaysResult = OperationResult<PublicBirthdayView[]>;
