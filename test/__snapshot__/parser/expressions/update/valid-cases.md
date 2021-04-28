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

### Hybrid CST

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
                    "flags": 3,
                    "start": 512,
                    "end": 5
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "flags": 256,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 14,
                    "start": 512,
                    "end": 16
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 6,
                        "end": 10
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 6,
                    "end": 14
                },
                "flags": 256,
                "start": 6,
                "end": 16
            },
            "flags": 128,
            "start": 6,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 26,
                    "start": 512,
                    "end": 28
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 17,
                        "end": 21
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 22,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 17,
                    "end": 26
                },
                "flags": 256,
                "start": 17,
                "end": 28
            },
            "flags": 128,
            "start": 17,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 40,
                    "start": 512,
                    "end": 42
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 29,
                            "end": 33
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 34,
                            "end": 34
                        },
                        "flags": 256,
                        "start": 29,
                        "end": 35
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 36,
                        "end": 39
                    },
                    "flags": 256,
                    "start": 29,
                    "end": 40
                },
                "flags": 256,
                "start": 29,
                "end": 42
            },
            "flags": 128,
            "start": 29,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 53,
                    "start": 512,
                    "end": 55
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 43,
                            "end": 47
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 48,
                            "end": 48
                        },
                        "flags": 256,
                        "start": 43,
                        "end": 49
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 50,
                        "end": 53
                    },
                    "flags": 256,
                    "start": 43,
                    "end": 53
                },
                "flags": 256,
                "start": 43,
                "end": 55
            },
            "flags": 128,
            "start": 43,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 65,
                    "start": 512,
                    "end": 67
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 135,
                        "flags": 768,
                        "start": 56,
                        "end": 61
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 62,
                        "end": 65
                    },
                    "flags": 256,
                    "start": 56,
                    "end": 65
                },
                "flags": 256,
                "start": 56,
                "end": 67
            },
            "flags": 128,
            "start": 56,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 78,
                    "start": 512,
                    "end": 80
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 135,
                        "flags": 768,
                        "start": 68,
                        "end": 73
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 74,
                        "end": 77
                    },
                    "flags": 256,
                    "start": 68,
                    "end": 78
                },
                "flags": 256,
                "start": 68,
                "end": 80
            },
            "flags": 128,
            "start": 68,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "start": 512,
                    "end": 98
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 81,
                            "start": 1,
                            "end": 85
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 85,
                            "end": 89
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 90,
                            "end": 90
                        },
                        "flags": 256,
                        "start": 81,
                        "end": 91
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 92,
                        "end": 95
                    },
                    "flags": 256,
                    "start": 81,
                    "end": 96
                },
                "flags": 256,
                "start": 81,
                "end": 98
            },
            "flags": 128,
            "start": 81,
            "end": 99
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 113,
                    "start": 512,
                    "end": 115
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 99,
                            "start": 1,
                            "end": 103
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 103,
                            "end": 107
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 108,
                            "end": 108
                        },
                        "flags": 256,
                        "start": 99,
                        "end": 109
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 110,
                        "end": 113
                    },
                    "flags": 256,
                    "start": 99,
                    "end": 113
                },
                "flags": 256,
                "start": 99,
                "end": 115
            },
            "flags": 128,
            "start": 99,
            "end": 116
        }
    ],
    "isModule": false,
    "text": "foo++;\nfoo.bar++;\nfoo[bar]++;\nfoo()[bar]++;\nfoo().bar++;\nthis.foo++;\nthis[foo]++;\nnew foo()[bar]++;\nnew foo().bar++;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

