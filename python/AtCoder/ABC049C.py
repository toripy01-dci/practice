str_s = input()
str_t_list = ["dream", "dreamer", "erase", "eraser"]

def str_match(s):
    for str_t in str_t_list:
        if s.startswith(str_t):
            s_ad = removeprefix(s, str_t)
            if s_ad != "":
                if str_match(s_ad) == "YES":
                    return "YES"
            else:
                return "YES"
    return "NO"

def removeprefix(m, prefix):
    if m.startswith(prefix):
        return m[len(prefix):]
    else:
        return m

print(str_match(str_s))
