import { deepCopyObject } from "./deepCopyObject";
import { TMatrix } from "./types/types";

export const electron = (matrix: TMatrix, particle: string): TMatrix => {
  const newMatrix = deepCopyObject(matrix);

  newMatrix.forEach((_, i) => {
    newMatrix[0][i] = particle;
    newMatrix[i][newMatrix[i].length - 1] = particle;
  });

  return newMatrix;
};
