type TMatrix = (number | string)[][];

const deepCopyObject = <T>(object: T): T => {
  return JSON.parse(JSON.stringify(object));
};

const accelerateElectron = (matrix: TMatrix, particle: string): TMatrix => {
  const newMatrix = deepCopyObject(matrix);

  newMatrix.forEach((_, i) => {
    newMatrix[0][i] = particle;
    newMatrix[i][newMatrix[i].length - 1] = particle;
  });

  return newMatrix;
};

const accelerateProton = (matrix: TMatrix, particle: string): TMatrix => {
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
      newMatrix[lastIndex - 1][i] = 1;
    }

    // last line
    newMatrix[lastIndex][i] = particle;
    newMatrix[lastIndex][lastIndex] = 1;
  });

  return newMatrix;
};

const cyclotron = (particle: string, matrix: TMatrix): TMatrix => {
  if (particle === "e") {
    return accelerateElectron(matrix, particle);
  }

  if (particle === "p") {
    return accelerateProton(matrix, particle);
  }

  return matrix;
};

const matrixExample = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const electron = cyclotron("e", matrixExample);
const proton = cyclotron("p", matrixExample);

console.log("electron: ", electron);
console.log("proton: ", proton);
