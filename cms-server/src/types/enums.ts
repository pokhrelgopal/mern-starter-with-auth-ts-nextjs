type STATUS = "ACTIVE" | "INACTIVE" | "SUSPENDED";

type ROLE = "USER" | "MODERATOR" | "ADMIN" | "SUPERUSER";

type RETURN_POLICY = "NO_RETURN" | "REFUND" | "EXCHANGE" | "STORE_CREDIT";

type WARRANTY_PERIOD =
  | "NO_WARRANTY"
  | "ONE_MONTH"
  | "THREE_MONTHS"
  | "SIX_MONTHS"
  | "ONE_YEAR"
  | "TWO_YEARS"
  | "THREE_YEARS"
  | "FIVE_YEARS"
  | "LIFETIME";

type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED";

type PaymentMethod = "COD" | "ESEWA" | "KHALTI" | "DEBIT_CARD" | "CREDIT_CARD";

type PaymentStatus = "PENDING" | "PAID" | "FAILED" | "REFUNDED";

export type {
  STATUS,
  ROLE,
  RETURN_POLICY,
  WARRANTY_PERIOD,
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
};
