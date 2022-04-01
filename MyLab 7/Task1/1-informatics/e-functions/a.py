a, b, c, d = list(map(int, input().split()))
def min4(a, b, c, d):
    return min(min(min(a,b), c), d)
print(min4(a, b, c, d))