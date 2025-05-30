import { type Patient } from "./types";
import { getDbConnection } from "@/lib/db";
import { type Results } from "@electric-sql/pglite";
import { type TPatientForm } from "./Patient.schema";

export const registerPatient = async (
  data: TPatientForm,
  medicalConditions: string,
  createdAt: string
): Promise<Patient> => {
  const db = await getDbConnection();

  if (!db) {
    throw new Error("Database connection error");
  }

  const {
    firstName,
    lastName,
    age,
    gender,
    contactNumber,
    email,
    address,
    bloodGroup,
  } = data;

  try {
    const insertQuery = `
      INSERT INTO patients (
        firstName, lastName, age, gender, contactNumber, email, address,
        bloodGroup, medicalConditions, createdAt
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
      ) RETURNING *
    `;

    const values = [
      firstName,
      lastName,
      age,
      gender,
      contactNumber,
      email,
      address,
      bloodGroup,
      medicalConditions,
      createdAt,
    ];

    const res = await db.query(insertQuery, values);
    return res.rows[0] as Patient;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to register patient";
    throw new Error(errorMessage);
  }
};

export const getAllPatients = async () => {
  try {
    const db = await getDbConnection();

    if (!db) {
      throw new Error("Database connection error");
    }

    const result: Results<Patient> = await db.query(
      "SELECT * FROM patients ORDER BY createdAt DESC;"
    );

    console.log("result", result);

    if (!result) {
      throw new Error("Failed to fetch patients");
    }

    return result.rows;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch patients";
    throw new Error(errorMessage);
  }
};
