import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPatientSchema, insertEmployeeSchema, insertGearSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Patient routes
  app.get("/api/patients", async (_req, res) => {
    try {
      const patients = await storage.getPatients();
      res.json(patients);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch patients" });
    }
  });

  app.post("/api/patients", async (req, res) => {
    try {
      const validatedData = insertPatientSchema.parse(req.body);
      const patient = await storage.createPatient(validatedData);
      res.json(patient);
    } catch (error) {
      res.status(400).json({ message: "Invalid patient data" });
    }
  });

  app.put("/api/patients/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertPatientSchema.partial().parse(req.body);
      const patient = await storage.updatePatient(id, validatedData);
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.json(patient);
    } catch (error) {
      res.status(400).json({ message: "Invalid patient data" });
    }
  });

  app.delete("/api/patients/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deletePatient(id);
      if (!success) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete patient" });
    }
  });

  // Employee routes
  app.get("/api/employees", async (_req, res) => {
    try {
      const employees = await storage.getEmployees();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch employees" });
    }
  });

  app.post("/api/employees", async (req, res) => {
    try {
      const validatedData = insertEmployeeSchema.parse(req.body);
      const employee = await storage.createEmployee(validatedData);
      res.json(employee);
    } catch (error) {
      res.status(400).json({ message: "Invalid employee data" });
    }
  });

  app.put("/api/employees/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertEmployeeSchema.partial().parse(req.body);
      const employee = await storage.updateEmployee(id, validatedData);
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
      res.json(employee);
    } catch (error) {
      res.status(400).json({ message: "Invalid employee data" });
    }
  });

  app.delete("/api/employees/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deleteEmployee(id);
      if (!success) {
        return res.status(404).json({ message: "Employee not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete employee" });
    }
  });

  // Gear routes
  app.get("/api/gear", async (_req, res) => {
    try {
      const gear = await storage.getGear();
      res.json(gear);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gear" });
    }
  });

  app.post("/api/gear", async (req, res) => {
    try {
      const validatedData = insertGearSchema.parse(req.body);
      const gear = await storage.createGear(validatedData);
      res.json(gear);
    } catch (error) {
      res.status(400).json({ message: "Invalid gear data" });
    }
  });

  app.put("/api/gear/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertGearSchema.partial().parse(req.body);
      const gear = await storage.updateGear(id, validatedData);
      if (!gear) {
        return res.status(404).json({ message: "Gear not found" });
      }
      res.json(gear);
    } catch (error) {
      res.status(400).json({ message: "Invalid gear data" });
    }
  });

  app.delete("/api/gear/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deleteGear(id);
      if (!success) {
        return res.status(404).json({ message: "Gear not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete gear" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
