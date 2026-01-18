import { VisualizationStep } from '../types';

export function generateSteps(problemId: string): VisualizationStep[] {
  const steps: VisualizationStep[] = [];

  if (problemId === 'two-sum') {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const map: Record<number, number> = {};

    steps.push({
      id: 'ts-init',
      description: 'Initialize an empty Hash Map to store numbers and their indices.',
      state: { nums, map: { ...map }, target }
    });

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      steps.push({
        id: `ts-step-${i}-1`,
        description: `Checking index ${i} (value: ${nums[i]}). Complement needed: ${target} - ${nums[i]} = ${complement}.`,
        state: { nums, map: { ...map }, activeIndices: [i], currentNum: nums[i], complement, target }
      });

      if (complement in map) {
        steps.push({
          id: `ts-step-${i}-found`,
          description: `Found complement ${complement} in map at index ${map[complement]}! Returning [${map[complement]}, ${i}].`,
          state: { nums, map: { ...map }, activeIndices: [i], foundIndices: [map[complement], i], currentNum: nums[i], complement, target }
        });
        return steps;
      }

      map[nums[i]] = i;
      steps.push({
        id: `ts-step-${i}-store`,
        description: `Complement not found. Storing ${nums[i]} at index ${i} in the map.`,
        state: { nums, map: { ...map }, activeIndices: [i], currentNum: nums[i], target }
      });
    }
  }

  if (problemId === 'bubble-sort') {
    let nums = [5, 1, 4, 2, 8];
    const n = nums.length;
    const sortedIndices: number[] = [];

    steps.push({
      id: 'bs-init',
      description: 'Starting Bubble Sort on the input array.',
      state: { nums: [...nums], sortedIndices: [] }
    });

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({
          id: `bs-comp-${i}-${j}`,
          description: `Comparing elements at index ${j} (${nums[j]}) and ${j + 1} (${nums[j + 1]}).`,
          state: { nums: [...nums], activeIndices: [j, j + 1], sortedIndices: [...sortedIndices] }
        });

        if (nums[j] > nums[j + 1]) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
          steps.push({
            id: `bs-swap-${i}-${j}`,
            description: `${nums[j + 1]} > ${nums[j]}, so we swap them.`,
            state: { nums: [...nums], activeIndices: [j, j + 1], sortedIndices: [...sortedIndices] }
          });
        }
      }
      sortedIndices.push(n - i - 1);
      steps.push({
        id: `bs-pass-${i}`,
        description: `Pass ${i + 1} complete. ${nums[n - i - 1]} is now in its correct sorted position.`,
        state: { nums: [...nums], activeIndices: [], sortedIndices: [...sortedIndices] }
      });
    }
  }

  return steps;
}
