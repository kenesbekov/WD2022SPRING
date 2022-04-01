def xor(x, y):
    if x != y:
        return 1
    return 0

x, y = list(map(int, input().split()))
print(xor(x, y))