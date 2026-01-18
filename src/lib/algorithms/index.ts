import { getTwoSumSteps } from "./twoSum";
import { getReverseLinkedListSteps } from "./reverseLinkedList";
import { getValidPalindromeSteps } from "./validPalindrome";
import { getThreeSumSteps } from "./threeSum";
import { getQuickSortSteps } from "./quickSort";
import { getContainerWithMostWaterSteps } from "./containerWithMostWater";
import { generateUniversalSteps } from "./universalEngine";
import { problems } from "../../data/problems";

// Base generators for already implemented algorithms
const baseGenerators: Record<string, (input: any, mode: string) => any> = {
    'two-sum': (input: any, mode: string) => getTwoSumSteps(input.nums, input.target, mode),
    'container-with-most-water': (input: any, mode: string) => getContainerWithMostWaterSteps(input.height, mode),
    'reverse-linked-list': (input: any, mode: string) => getReverseLinkedListSteps(input.nodes, mode),
    'valid-palindrome': (input: any, mode: string) => getValidPalindromeSteps(input.s, mode),
    '3sum': (input: any, mode: string) => getThreeSumSteps(input.nums, mode),
    'quick-sort': (input: any, mode: string) => getQuickSortSteps(input.nums, mode),
};

// Automagically map all problems from the library to the universal engine if not already implemented
const autoGenerators: Record<string, (input: any, mode: string) => any> = {};

problems.forEach(p => {
    if (!baseGenerators[p.slug]) {
        autoGenerators[p.slug] = (input: any, _mode: string) => generateUniversalSteps(p, input);
    }
});

export const algorithmGenerators: Record<string, (input: any, mode: string) => any> = {
    ...baseGenerators,
    ...autoGenerators
};
