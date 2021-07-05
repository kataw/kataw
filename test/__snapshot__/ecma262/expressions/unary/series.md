# Kataw parser test case

## Input

`````js
1 + ++x;
1 + x++;

+ ++x;
+ x++;

x++ + 1;
++x + 1;

1 - --x;
1 - x--;

- --x;
- x--;

x-- - 1;
--x - 1;
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
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "start": 3,
                        "end": 6
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 7
                },
                "flags": 96,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 8,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 12,
                    "end": 16
                },
                "flags": 97,
                "start": 8,
                "end": 16
            },
            "flags": 16,
            "start": 8,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 97,
                    "start": 17,
                    "end": 20
                },
                "operand": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "start": 20,
                        "end": 23
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 23,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 24
                },
                "flags": 32,
                "start": 17,
                "end": 24
            },
            "flags": 16,
            "start": 17,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 97,
                    "start": 25,
                    "end": 27
                },
                "operand": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "start": 29,
                        "end": 31
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 31
                },
                "flags": 32,
                "start": 25,
                "end": 31
            },
            "flags": 16,
            "start": 25,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "start": 35,
                        "end": 37
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 32,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 37
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 37,
                    "end": 39
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 39,
                    "end": 41
                },
                "flags": 32,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "start": 32,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 97,
                        "start": 42,
                        "end": 45
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 45,
                        "end": 46
                    },
                    "flags": 32,
                    "start": 42,
                    "end": 46
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 46,
                    "end": 48
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 48,
                    "end": 50
                },
                "flags": 32,
                "start": 42,
                "end": 50
            },
            "flags": 16,
            "start": 42,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 51,
                    "end": 54
                },
                "operatorToken": {
                    "kind": 134318643,
                    "flags": 96,
                    "start": 54,
                    "end": 56
                },
                "right": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 96,
                        "start": 56,
                        "end": 59
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 59,
                        "end": 60
                    },
                    "flags": 32,
                    "start": 56,
                    "end": 60
                },
                "flags": 97,
                "start": 51,
                "end": 60
            },
            "flags": 16,
            "start": 51,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 61,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 134318643,
                    "flags": 96,
                    "start": 63,
                    "end": 65
                },
                "right": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 96,
                        "start": 67,
                        "end": 69
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 65,
                        "end": 67
                    },
                    "flags": 32,
                    "start": 65,
                    "end": 69
                },
                "flags": 97,
                "start": 61,
                "end": 69
            },
            "flags": 16,
            "start": 61,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 134318643,
                    "flags": 97,
                    "start": 70,
                    "end": 73
                },
                "operand": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 96,
                        "start": 73,
                        "end": 76
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 76,
                        "end": 77
                    },
                    "flags": 32,
                    "start": 73,
                    "end": 77
                },
                "flags": 32,
                "start": 70,
                "end": 77
            },
            "flags": 16,
            "start": 70,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 134318643,
                    "flags": 97,
                    "start": 78,
                    "end": 80
                },
                "operand": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 96,
                        "start": 82,
                        "end": 84
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 80,
                        "end": 82
                    },
                    "flags": 32,
                    "start": 80,
                    "end": 84
                },
                "flags": 32,
                "start": 78,
                "end": 84
            },
            "flags": 16,
            "start": 78,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 96,
                        "start": 88,
                        "end": 90
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "start": 85,
                        "end": 88
                    },
                    "flags": 32,
                    "start": 85,
                    "end": 90
                },
                "operatorToken": {
                    "kind": 134318643,
                    "flags": 96,
                    "start": 90,
                    "end": 92
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 92,
                    "end": 94
                },
                "flags": 32,
                "start": 85,
                "end": 94
            },
            "flags": 16,
            "start": 85,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 97,
                        "start": 95,
                        "end": 98
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 98,
                        "end": 99
                    },
                    "flags": 32,
                    "start": 95,
                    "end": 99
                },
                "operatorToken": {
                    "kind": 134318643,
                    "flags": 96,
                    "start": 99,
                    "end": 101
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 101,
                    "end": 103
                },
                "flags": 32,
                "start": 95,
                "end": 103
            },
            "flags": 16,
            "start": 95,
            "end": 104
        }
    ],
    "isModule": false,
    "source": "1 + ++x;\n1 + x++;\n\n+ ++x;\n+ x++;\n\nx++ + 1;\n++x + 1;\n\n1 - --x;\n1 - x--;\n\n- --x;\n- x--;\n\nx-- - 1;\n--x - 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript

1 + ++x;
1 + x++;
+  ++x;
+ x++;
x++ + 1;
++x + 1;
1 - --x;
1 - x--;
-  --x;
- x--;
x-- - 1;
--x - 1;

```

### Diagnostics

```javascript
✔ No errors
```

