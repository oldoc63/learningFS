# Let see how a factorial function looks with a call stack:
def factorial1(x):
    return x * factorial1(x - 1) if x > 0 else 1

print(factorial1(5)) 

# x == 5
# [5 * f(4)]
# [5 * [4 * f(3)]]
# [5 * [4 * [3 * f(2)]]]
# [5 * [4 * [3 * [2 * f(1)]]]]

# Each ] is a return value that is pushed to the stack during recursion,
# then recovered (wound back down) when the base case is reached.

# return 1 => 1
#      * 2 => 2
#      * 3 => 6
#      * 4 => 24
#      * 5 => 120

def factorial2(x):
    p = 1
    for i in range(1,x+1):
        p *= i
    return p

print(factorial2(-5))
print(factorial2(5))

#visually select the text rows (using V as usual)
#:norm i#

#7! == 7 * 6!
#   == 7 * 6 * 5!
#   == 7 * 6 * 5 * 4!
#   == 7 * 6 * 5 * 4 * 3!
#   == 7 * 6 * 5 * 4 * 3 * 2!
#   == 7 * 6 * 5 * 4 * 3 * 2 * 1!
#   ==   42  *   20  *   6
#   ==      840      *   6
#   ==             5040

#visually select the text as before (or type gv to re-select the previous selection)
#:norm x
#:norm xx (like//)
#:norm ^x (indented)
#:'<,'>norm i# (visualized)


