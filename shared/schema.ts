import { sql } from "drizzle-orm";
import { pgTable, text, varchar, date, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const patients = pgTable("patients", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  insuranceLevel: text("insurance_level").notNull(),
  hasHealthMonitor: boolean("has_health_monitor").notNull().default(false),
  pastHealthIssues: text("past_health_issues").default(""),
});

export const employees = pgTable("employees", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  role: text("role").notNull(),
  specialization: text("specialization").notNull(),
  status: text("status").notNull().default("active"),
});

export const gear = pgTable("gear", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  status: text("status").notNull().default("operational"),
  monthlyCost: integer("monthly_cost").notNull(),
  lastService: date("last_service").notNull(),
});

export const insertPatientSchema = createInsertSchema(patients).omit({
  id: true,
});

export const insertEmployeeSchema = createInsertSchema(employees).omit({
  id: true,
});

export const insertGearSchema = createInsertSchema(gear).omit({
  id: true,
});

export type InsertPatient = z.infer<typeof insertPatientSchema>;
export type Patient = typeof patients.$inferSelect;

export type InsertEmployee = z.infer<typeof insertEmployeeSchema>;
export type Employee = typeof employees.$inferSelect;

export type InsertGear = z.infer<typeof insertGearSchema>;
export type Gear = typeof gear.$inferSelect;
