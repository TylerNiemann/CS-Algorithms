import { Tree } from "./balancedBST";

const arr = Tree([2, 5, 6, 235, 5, 236, 23, 62, 52, 345, 21, 35, 45, 346,])

describe('Tree properties', () => {
  test("The tree should be built", () => {
    expect(arr).toMatchObject({
      data: 45,
      leftPart: {
        data: 6,
        leftPart: {
          data: 2,
          leftPart: null,
          rightPart: {
            data: 5,
            leftPart: null,
            rightPart: null,
          },
        },
        rightPart: {
          data: 23,
          leftPart: {
            data: 21,
            leftPart: null,
            rightPart: null,
          },
          rightPart: {
            data: 35,
            leftPart: null,
            rightPart: null,
          },
        },
      },
      rightPart: {
        data: 235,
        leftPart: {
          data: 52,
          leftPart: null,
          rightPart: {
            data: 62,
            leftPart: null,
            rightPart: null,
          },
        },
        rightPart: {
          data: 345,
          leftPart: {
            data: 236,
            leftPart: null,
            rightPart: null,
          },
          rightPart: {
            data: 346,
            leftPart: null,
            rightPart: null,
          },
        },
      },
    });
  });
  test('root of Tree is 45', () => {
    expect(arr).toMatchObject({data: 45})
  });
});