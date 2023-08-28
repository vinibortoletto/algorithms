const generateMatrix = require("./generateMatrix");

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
      newMatrix[lastIndex - 1][i] = "1";
    }

    // last line
    newMatrix[lastIndex][i] = particle;
    newMatrix[lastIndex][lastIndex] = "1";
  });

  return newMatrix;
};

const accelerateNeutron = (matrix: TMatrix, particle: string): TMatrix => {
  const newMatrix = deepCopyObject(matrix);

  newMatrix.forEach((_, i) => {
    newMatrix[0][i] = particle;
  });

  return newMatrix;
};

const cyclotron = (particle: string, matrixSize: number): TMatrix | string => {
  if (matrixSize < 4) return "Matrix should be at least 4x4";

  const matrix: TMatrix = generateMatrix(matrixSize);

  if (particle === "e") {
    return accelerateElectron(matrix, particle);
  }

  if (particle === "p") {
    return accelerateProton(matrix, particle);
  }

  if (particle === "n") {
    return accelerateNeutron(matrix, particle);
  }

  return matrix;
};

const electron = cyclotron("e", 4);
const proton = cyclotron("p", 4);
const neutron = cyclotron("n", 4);
const error = cyclotron("x", 3);

console.log("electron: ", electron);
console.log("proton: ", proton);
console.log("neutron: ", neutron);
console.log("error: ", error);
