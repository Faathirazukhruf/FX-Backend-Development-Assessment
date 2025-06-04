def find_pairs(arr, target):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == target:
                print(f"Pair found at {i} and {j} ({arr[i]} + {arr[j]})")

# Test fungsi
if __name__ == "__main__":
    arr = [1, 3, 5, 7, 2, 4]
    target = 8
    find_pairs(arr, target)