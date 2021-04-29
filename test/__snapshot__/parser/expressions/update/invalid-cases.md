# Kataw parser test case

## Input

`````js
foo()++;

foo(bar)++;

foo[bar]()++;

foo.bar()++;

this.foo[foo].bar(this)(bar)[foo]()++;

new foo()++;

new new foo().bar++;

{x: 1}++;
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
                    "flags": 64,
                    "start": 5,
                    "end": 7
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 4,
                        "end": 4
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 5
                },
                "flags": 32,
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
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 8,
                        "end": 13
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 14,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 14,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 18
                },
                "flags": 32,
                "start": 8,
                "end": 20
            },
            "flags": 16,
            "start": 8,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 33,
                    "end": 35
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 21,
                            "end": 26
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 27,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 21,
                        "end": 31
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 32,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 33
                },
                "flags": 32,
                "start": 21,
                "end": 35
            },
            "flags": 16,
            "start": 21,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 47,
                    "end": 49
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 36,
                            "end": 41
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 42,
                            "end": 45
                        },
                        "flags": 32,
                        "start": 36,
                        "end": 45
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 46,
                        "end": 46
                    },
                    "flags": 32,
                    "start": 36,
                    "end": 47
                },
                "flags": 32,
                "start": 36,
                "end": 49
            },
            "flags": 16,
            "start": 36,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 87,
                    "end": 89
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 130,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 135,
                                                "flags": 96,
                                                "start": 50,
                                                "end": 56
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 57,
                                                "end": 60
                                            },
                                            "flags": 32,
                                            "start": 50,
                                            "end": 60
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 61,
                                            "end": 64
                                        },
                                        "flags": 32,
                                        "start": 50,
                                        "end": 65
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 66,
                                        "end": 69
                                    },
                                    "flags": 32,
                                    "start": 50,
                                    "end": 69
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 135,
                                            "flags": 96,
                                            "start": 70,
                                            "end": 74
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 70,
                                    "end": 74
                                },
                                "flags": 32,
                                "start": 50,
                                "end": 75
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 76,
                                        "end": 79
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 76,
                                "end": 79
                            },
                            "flags": 32,
                            "start": 50,
                            "end": 80
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 81,
                            "end": 84
                        },
                        "flags": 32,
                        "start": 50,
                        "end": 85
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 86,
                        "end": 86
                    },
                    "flags": 32,
                    "start": 50,
                    "end": 87
                },
                "flags": 32,
                "start": 50,
                "end": 89
            },
            "flags": 16,
            "start": 50,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 101,
                    "end": 103
                },
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 1,
                        "start": 90,
                        "end": 95
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 95,
                        "end": 99
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 100,
                        "end": 100
                    },
                    "flags": 32,
                    "start": 90,
                    "end": 101
                },
                "flags": 32,
                "start": 90,
                "end": 103
            },
            "flags": 16,
            "start": 90,
            "end": 104
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 123,
                    "end": 125
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 1,
                            "start": 104,
                            "end": 109
                        },
                        "expression": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 0,
                                "start": 109,
                                "end": 113
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 113,
                                "end": 117
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 118,
                                "end": 118
                            },
                            "flags": 32,
                            "start": 109,
                            "end": 119
                        },
                        "argumentList": null,
                        "flags": 32,
                        "start": 104,
                        "end": 119
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 120,
                        "end": 123
                    },
                    "flags": 32,
                    "start": 104,
                    "end": 123
                },
                "flags": 32,
                "start": 104,
                "end": 125
            },
            "flags": 16,
            "start": 104,
            "end": 126
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 129,
                            "end": 130
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 131,
                                "end": 133
                            },
                            "flags": 16,
                            "start": 131,
                            "end": 133
                        },
                        "flags": 16,
                        "start": 129,
                        "end": 133
                    }
                ],
                "flags": 16,
                "start": 129,
                "end": 133
            },
            "flags": 16,
            "start": 126,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 134,
                    "end": 136
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 136,
                    "end": 136
                },
                "flags": 32,
                "start": 134,
                "end": 136
            },
            "flags": 16,
            "start": 134,
            "end": 137
        }
    ],
    "isModule": false,
    "source": "foo()++;\n\nfoo(bar)++;\n\nfoo[bar]()++;\n\nfoo.bar()++;\n\nthis.foo[foo].bar(this)(bar)[foo]()++;\n\nnew foo()++;\n\nnew new foo().bar++;\n\n{x: 1}++;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 137
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 5, end: 7
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 18, end: 20
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 33, end: 35
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 47, end: 49
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 87, end: 89
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 101, end: 103
✖ Expression expected - start: 136, end: 137

```

