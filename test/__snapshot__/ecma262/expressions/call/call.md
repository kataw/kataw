# Kataw parser test case

## Input

`````js
f();
g(a);
h(a, b);
i(a, b, ...c);
j(...a);
a.k();
(a + b).l();
a.m().n();
new A();
new A(a);
new a.B();
new a.b.C();
new (a().B)();
new A().b();
new new A()();
new (A, B)();
`````

## Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 8
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 4,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "h",
                    "rawText": "h",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 14
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 17
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 10,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "i",
                    "rawText": "i",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 23
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 26
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 31
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 32
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 32
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 32
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 19,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 19,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "j",
                    "rawText": "j",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 36
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 40
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 41
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 41
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 41
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 34,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 34,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 45
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "k",
                        "rawText": "k",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 47
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 43,
                    "end": 47
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 48
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 43,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 43,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 53
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 55
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 57
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 57
                        },
                        "flags": 50,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 58
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "l",
                        "rawText": "l",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 59,
                        "end": 60
                    },
                    "flags": 50,
                    "transformFlags": 2,
                    "start": 50,
                    "end": 60
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 61
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 50,
                "end": 62
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 50,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 65
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "m",
                                "rawText": "m",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 67
                            },
                            "flags": 97,
                            "transformFlags": 2,
                            "start": 63,
                            "end": 67
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 68
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 63,
                        "end": 69
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "n",
                        "rawText": "n",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 71
                    },
                    "flags": 268435488,
                    "transformFlags": 2,
                    "start": 63,
                    "end": 71
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 72
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 63,
                "end": 73
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 63,
            "end": 74
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 78
                },
                "expression": {
                    "kind": 134299649,
                    "text": "A",
                    "rawText": "A",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 80
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 81
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 74,
                "end": 82
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 74,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 87
                },
                "expression": {
                    "kind": 134299649,
                    "text": "A",
                    "rawText": "A",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 89
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 91
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 90,
                    "end": 91
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 83,
                "end": 92
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 83,
            "end": 93
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 93,
                            "end": 97
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 97,
                            "end": 99
                        },
                        "argumentList": null,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 93,
                        "end": 99
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 100,
                        "end": 101
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 93,
                    "end": 101
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 102,
                    "end": 102
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 93,
                "end": 103
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 93,
            "end": 104
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 104,
                                "end": 108
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 108,
                                "end": 110
                            },
                            "argumentList": null,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 104,
                            "end": 110
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 111,
                            "end": 112
                        },
                        "flags": 97,
                        "transformFlags": 2,
                        "start": 104,
                        "end": 112
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 113,
                        "end": 114
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 104,
                    "end": 114
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 115,
                    "end": 115
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 104,
                "end": 116
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 104,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 117,
                    "end": 121
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 124
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 125,
                                "end": 125
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 121,
                            "end": 126
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 127,
                            "end": 128
                        },
                        "flags": 268435488,
                        "transformFlags": 2,
                        "start": 121,
                        "end": 128
                    },
                    "flags": 121,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 129
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 130,
                    "end": 130
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 117,
                "end": 131
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 117,
            "end": 132
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 132,
                            "end": 136
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 138
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 139,
                            "end": 139
                        },
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 132,
                        "end": 140
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 141,
                        "end": 142
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 132,
                    "end": 142
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 143,
                    "end": 143
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 132,
                "end": 144
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 132,
            "end": 145
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 145,
                    "end": 149
                },
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 149,
                        "end": 153
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 153,
                        "end": 155
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 156,
                        "end": 156
                    },
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 157
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 158
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 145,
                "end": 159
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 145,
            "end": 160
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 160,
                    "end": 164
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 166,
                                "end": 167
                            },
                            {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 168,
                                "end": 170
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 164,
                        "end": 171
                    },
                    "flags": 164,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 171
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 172,
                    "end": 172
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 160,
                "end": 173
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 160,
            "end": 174
        }
    ],
    "isModule": false,
    "source": "f();\ng(a);\nh(a, b);\ni(a, b, ...c);\nj(...a);\na.k();\n(a + b).l();\na.m().n();\nnew A();\nnew A(a);\nnew a.B();\nnew a.b.C();\nnew (a().B)();\nnew A().b();\nnew new A()();\nnew (A, B)();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 174
}
```

### Printed

```javascript

f();
g(
  a
);

h(
  a,
  b
);

i(
  a,
  b,
  ...c
);

j(
  ...a
);

a.k();

(a + b).l();

a.m().n();

new A();

new A(
  a
);

new a.B();

new a.b.C();

new (a().B)();

new A().b();

new new A()();

new (A, B)();

```

### Diagnostics

```javascript
✔ No errors
```

