function generateTwoSumSteps(nums, target) {
    const bruteForceSteps = [];
    const optimalSteps = [];

    // Brute Force Generation
    let found = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            const isMatch = sum === target;

            bruteForceSteps.push({
                step: bruteForceSteps.length + 1,
                description: isMatch
                    ? `Target ${target} found at indices ${i} and ${j}!`
                    : `Checking index i=${i} (val=${nums[i]}) and j=${j} (val=${nums[j]}). Sum: ${sum}`,
                activeLine: isMatch ? 6 : 5,
                state: {
                    pointers: [
                        { id: 'i', index: i, color: 'accent-blue' },
                        { id: 'j', index: j, color: 'purple-500' }
                    ],
                    found: isMatch,
                    customState: { sum, target }
                }
            });
            if (isMatch) {
                found = true;
                break;
            }
        }
        if (found) break;
    }

    // Optimal Generation
    const mapArr = {};
    found = false;
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const isMatch = mapArr[complement] !== undefined;

        optimalSteps.push({
            step: optimalSteps.length + 1,
            description: isMatch
                ? `Found complement ${complement} at index ${mapArr[complement]}!`
                : `Iterating index i=${i} (val=${nums[i]}). Looking for complement: ${complement}`,
            activeLine: isMatch ? 7 : 5,
            state: {
                pointers: [{ id: 'i', index: i, color: 'accent-blue' }],
                mapState: { ...mapArr },
                found: isMatch,
                customState: { complement, target }
            }
        });

        if (isMatch) {
            found = true;
            break;
        }

        mapArr[nums[i]] = i;
        optimalSteps.push({
            step: optimalSteps.length + 1,
            description: `Complement not found. Adding ${nums[i]} to the hash map.`,
            activeLine: 9,
            state: {
                pointers: [{ id: 'i', index: i, color: 'accent-blue' }],
                mapState: { ...mapArr },
                found: false
            }
        });
    }

    return { bruteForceSteps, optimalSteps };
}

function generateSlidingWindowSteps(s, targetIgnored) {
    const bruteForceSteps = [];
    const optimalSteps = [];

    // Brute Force: Check every substring
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const sub = s.substring(i, j + 1);
            const set = new Set();
            let hasRepeat = false;
            for (const char of sub) {
                if (set.has(char)) {
                    hasRepeat = true;
                    break;
                }
                set.add(char);
            }

            const isCurrentMax = !hasRepeat && sub.length > maxLen;
            if (isCurrentMax) maxLen = sub.length;

            bruteForceSteps.push({
                step: bruteForceSteps.length + 1,
                description: hasRepeat
                    ? `Substring "${sub}" has repeating characters.`
                    : `Substring "${sub}" is valid. Length: ${sub.length}`,
                activeLine: hasRepeat ? 15 : 10,
                state: {
                    windowRange: [i, j],
                    pointers: [
                        { id: 'i', index: i, color: 'accent-blue' },
                        { id: 'j', index: j, color: 'purple-500' }
                    ],
                    found: isCurrentMax,
                    customState: { currentLen: sub.length, maxLen, hasRepeat }
                }
            });
        }
    }

    // Optimal: Sliding Window
    const charSet = new Set();
    let l = 0;
    let res = 0;
    const sArr = s.split('');

    for (let r = 0; r < sArr.length; r++) {
        const charR = sArr[r];

        while (charSet.has(charR)) {
            const charL = sArr[l];
            optimalSteps.push({
                step: optimalSteps.length + 1,
                description: `Duplicate detected! Removing "${charL}" at index ${l} and shrinking window.`,
                activeLine: 10,
                state: {
                    windowRange: [l, r],
                    pointers: [
                        { id: 'l', index: l, color: 'accent-blue' },
                        { id: 'r', index: r, color: 'purple-500' }
                    ],
                    mapState: Array.from(charSet).reduce((obj, c) => ({ ...obj, [c]: true }), {}),
                    customState: { currentLen: r - l, maxLen: res, duplicateChar: charR }
                }
            });
            charSet.delete(charL);
            l++;
        }

        charSet.add(charR);
        const currentLen = r - l + 1;
        const isNewMax = currentLen > res;
        if (isNewMax) res = currentLen;

        optimalSteps.push({
            step: optimalSteps.length + 1,
            description: isNewMax
                ? `New maximum length found! Window: "${s.substring(l, r + 1)}", Length: ${currentLen}`
                : `Expanding window to include "${charR}" at index ${r}. Window: "${s.substring(l, r + 1)}"`,
            activeLine: isNewMax ? 13 : 12,
            state: {
                windowRange: [l, r],
                pointers: [
                    { id: 'l', index: l, color: 'accent-blue' },
                    { id: 'r', index: r, color: 'purple-500' }
                ],
                mapState: Array.from(charSet).reduce((obj, c) => ({ ...obj, [c]: true }), {}),
                found: isNewMax,
                customState: { currentLen, maxLen: res }
            }
        });
    }

    return { bruteForceSteps, optimalSteps };
}

module.exports = { generateTwoSumSteps, generateSlidingWindowSteps };
