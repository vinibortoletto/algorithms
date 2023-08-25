type TMatrix = (number | string)[][];

const accelerateElectron = (matrix: TMatrix, particle: string): TMatrix => {
  matrix.forEach((_, i) => {
    matrix[0][i] = particle;
    matrix[i][matrix[i].length - 1] = particle;
  });

  return matrix;
};

const cyclotron = (particle: string, matrix: TMatrix): TMatrix => {
  if (particle === "e") {
    return accelerateElectron(matrix, particle);
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

console.log("electron: ", electron);
