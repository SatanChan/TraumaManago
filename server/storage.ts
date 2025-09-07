import { type Patient, type InsertPatient, type Employee, type InsertEmployee, type Gear, type InsertGear } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Patient CRUD
  getPatients(): Promise<Patient[]>;
  getPatient(id: string): Promise<Patient | undefined>;
  createPatient(patient: InsertPatient): Promise<Patient>;
  updatePatient(id: string, patient: Partial<InsertPatient>): Promise<Patient | undefined>;
  deletePatient(id: string): Promise<boolean>;

  // Employee CRUD
  getEmployees(): Promise<Employee[]>;
  getEmployee(id: string): Promise<Employee | undefined>;
  createEmployee(employee: InsertEmployee): Promise<Employee>;
  updateEmployee(id: string, employee: Partial<InsertEmployee>): Promise<Employee | undefined>;
  deleteEmployee(id: string): Promise<boolean>;

  // Gear CRUD
  getGear(): Promise<Gear[]>;
  getGearItem(id: string): Promise<Gear | undefined>;
  createGear(gear: InsertGear): Promise<Gear>;
  updateGear(id: string, gear: Partial<InsertGear>): Promise<Gear | undefined>;
  deleteGear(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private patients: Map<string, Patient>;
  private employees: Map<string, Employee>;
  private gear: Map<string, Gear>;

  constructor() {
    this.patients = new Map();
    this.employees = new Map();
    this.gear = new Map();
  }

  // Patient methods
  async getPatients(): Promise<Patient[]> {
    return Array.from(this.patients.values());
  }

  async getPatient(id: string): Promise<Patient | undefined> {
    return this.patients.get(id);
  }

  async createPatient(insertPatient: InsertPatient): Promise<Patient> {
    const id = randomUUID();
    const patient: Patient = { ...insertPatient, id };
    this.patients.set(id, patient);
    return patient;
  }

  async updatePatient(id: string, updates: Partial<InsertPatient>): Promise<Patient | undefined> {
    const patient = this.patients.get(id);
    if (!patient) return undefined;
    
    const updated: Patient = { ...patient, ...updates };
    this.patients.set(id, updated);
    return updated;
  }

  async deletePatient(id: string): Promise<boolean> {
    return this.patients.delete(id);
  }

  // Employee methods
  async getEmployees(): Promise<Employee[]> {
    return Array.from(this.employees.values());
  }

  async getEmployee(id: string): Promise<Employee | undefined> {
    return this.employees.get(id);
  }

  async createEmployee(insertEmployee: InsertEmployee): Promise<Employee> {
    const id = randomUUID();
    const employee: Employee = { ...insertEmployee, id };
    this.employees.set(id, employee);
    return employee;
  }

  async updateEmployee(id: string, updates: Partial<InsertEmployee>): Promise<Employee | undefined> {
    const employee = this.employees.get(id);
    if (!employee) return undefined;
    
    const updated: Employee = { ...employee, ...updates };
    this.employees.set(id, updated);
    return updated;
  }

  async deleteEmployee(id: string): Promise<boolean> {
    return this.employees.delete(id);
  }

  // Gear methods
  async getGear(): Promise<Gear[]> {
    return Array.from(this.gear.values());
  }

  async getGearItem(id: string): Promise<Gear | undefined> {
    return this.gear.get(id);
  }

  async createGear(insertGear: InsertGear): Promise<Gear> {
    const id = randomUUID();
    const gear: Gear = { ...insertGear, id };
    this.gear.set(id, gear);
    return gear;
  }

  async updateGear(id: string, updates: Partial<InsertGear>): Promise<Gear | undefined> {
    const gear = this.gear.get(id);
    if (!gear) return undefined;
    
    const updated: Gear = { ...gear, ...updates };
    this.gear.set(id, updated);
    return updated;
  }

  async deleteGear(id: string): Promise<boolean> {
    return this.gear.delete(id);
  }
}

export const storage = new MemStorage();
