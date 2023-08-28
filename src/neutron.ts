import { deepCopyObject } from "./deepCopyObject";
import { TMatrix } from "./types/types";

export const neutron = (matrix: TMatrix, particle: string): TMatrix => {
  const newMatrix = deepCopyObject(matrix);

  newMatrix.forEach((_, i) => {
    newMatrix[0][i] = particle;
  });

  return newMatrix;
};
