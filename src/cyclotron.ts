import { electron } from "./electron";
import { generateMatrix } from "./generateMatrix";
import { neutron } from "./neutron";
import { proton } from "./proton";
import { TMatrix } from "./types/types";

export const cyclotron = (
  particle: string,
  matrixSize: number
): TMatrix | string => {
  if (matrixSize < 4) return "Matrix should be at least 4x4";

  const matrix: TMatrix = generateMatrix(matrixSize);

  if (particle === "e") {
    return electron(matrix, particle);
  }

  if (particle === "p") {
    return proton(matrix, particle);
  }

  if (particle === "n") {
    return neutron(matrix, particle);
  }

  return matrix;
};
