# Kataw parser test case

## Input

`````js
foo++;
foo.bar++;
foo[bar]++;
foo()[bar]++;
foo().bar++;
this.foo++;
this[foo]++;
new foo()[bar]++;
new foo().bar++;
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
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "operand": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 14,
                    "end": 16
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 6,
                        "end": 10
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 536870944,
                    "start": 6,
                    "end": 14
                },
                "flags": 32,
                "start": 6,
                "end": 16
            },
            "flags": 16,
            "start": 6,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 26,
                    "end": 28
                },
                "operand": {
                    "kind": 536871042,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 17,
                        "end": 21
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 22,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 17,
                    "end": 26
                },
                "flags": 32,
                "start": 17,
                "end": 28
            },
            "flags": 16,
            "start": 17,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 40,
                    "end": 42
                },
                "operand": {
                    "kind": 536871042,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 29,
                            "end": 33
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 34,
                            "end": 34
                        },
                        "flags": 268435488,
                        "start": 29,
                        "end": 35
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 36,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 40
                },
                "flags": 32,
                "start": 29,
                "end": 42
            },
            "flags": 16,
            "start": 29,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 53,
                    "end": 55
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 43,
                            "end": 47
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 48,
                            "end": 48
                        },
                        "flags": 268435488,
                        "start": 43,
                        "end": 49
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 50,
                        "end": 53
                    },
                    "flags": 536870944,
                    "start": 43,
                    "end": 53
                },
                "flags": 32,
                "start": 43,
                "end": 55
            },
            "flags": 16,
            "start": 43,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 65,
                    "end": 67
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 4276321,
                        "flags": 97,
                        "start": 56,
                        "end": 61
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 62,
                        "end": 65
                    },
                    "flags": 536870944,
                    "start": 56,
                    "end": 65
                },
                "flags": 32,
                "start": 56,
                "end": 67
            },
            "flags": 16,
            "start": 56,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 78,
                    "end": 80
                },
                "operand": {
                    "kind": 536871042,
                    "member": {
                        "kind": 4276321,
                        "flags": 97,
                        "start": 68,
                        "end": 73
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 74,
                        "end": 77
                    },
                    "flags": 32,
                    "start": 68,
                    "end": 78
                },
                "flags": 32,
                "start": 68,
                "end": 80
            },
            "flags": 16,
            "start": 68,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 96,
                    "end": 98
                },
                "operand": {
                    "kind": 536871042,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 97,
                            "start": 81,
                            "end": 85
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 85,
                            "end": 89
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 90,
                            "end": 90
                        },
                        "flags": 97,
                        "start": 81,
                        "end": 91
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 92,
                        "end": 95
                    },
                    "flags": 32,
                    "start": 81,
                    "end": 96
                },
                "flags": 32,
                "start": 81,
                "end": 98
            },
            "flags": 16,
            "start": 81,
            "end": 99
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 113,
                    "end": 115
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 97,
                            "start": 99,
                            "end": 103
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 103,
                            "end": 107
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 108,
                            "end": 108
                        },
                        "flags": 97,
                        "start": 99,
                        "end": 109
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 110,
                        "end": 113
                    },
                    "flags": 536870944,
                    "start": 99,
                    "end": 113
                },
                "flags": 32,
                "start": 99,
                "end": 115
            },
            "flags": 16,
            "start": 99,
            "end": 116
        }
    ],
    "isModule": false,
    "source": "foo++;\nfoo.bar++;\nfoo[bar]++;\nfoo()[bar]++;\nfoo().bar++;\nthis.foo++;\nthis[foo]++;\nnew foo()[bar]++;\nnew foo().bar++;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript

foo++;
foo.bar++;
++;
++;
foo().bar++;
this.foo++;
++;
++;
new  foo().bar++;
```

### Diagnostics

```javascript
✔ No errors
```

