import { deepCopyObject } from "./deepCopyObject";
import { TMatrix } from "./types/types";

export const proton = (matrix: TMatrix, particle: string): TMatrix => {
  const newMatrix = deepCopyObject(matrix);
  const lastIndex = newMatrix.length - 1;

  newMatrix.forEach((_, i) => {
    // first line
    newMatrix[0][i] = particle;

    // middle lines
    newMatrix[i][0] = particle;
    newMatrix[i][lastIndex] = particle;

    // penultimate line
    newMatrix[lastIndex - 1][i] = particle;

    if (i > 0 && i < newMatrix.length - 2) {
      newMatrix[lastIndex - 1][i] = "1";
    }

    // last line
    newMatrix[lastIndex][i] = particle;
    newMatrix[lastIndex][lastIndex] = "1";
  });

  return newMatrix;
};
