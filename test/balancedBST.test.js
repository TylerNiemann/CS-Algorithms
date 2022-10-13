import { Tree } from "./balancedBST";

const arr = Tree([2,4,3,3])

describe('Tree properties', () => {
  test('Tree sorts unsorted array', () => {
    expect(arr).toStrictEqual([2,3,4])
  });
});