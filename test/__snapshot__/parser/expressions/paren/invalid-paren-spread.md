# Kataw parser test case

## Input

`````js
(...abc,);
(...a=b=c);
(...abc,);
(...abc=,);
(...abc,=);
(...abc,,,,,,,=);
(...abc,,,,,,,=====);
(...a=b=c);
(...abc,);
(...);
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 1,
                                "start": 512,
                                "end": 4
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 768,
                                "start": 4,
                                "end": 7
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 1,
                            "end": 7
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 215,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 12,
                        "start": 512,
                        "end": 15
                    },
                    "binding": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 15,
                        "end": 16
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 17,
                            "end": 18
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 18,
                            "start": 512,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 19,
                            "end": 20
                        },
                        "flags": 256,
                        "start": 17,
                        "end": 20
                    },
                    "flags": 258,
                    "start": 12,
                    "end": 20
                },
                "flags": 256,
                "start": 10,
                "end": 21
            },
            "flags": 128,
            "start": 10,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 24,
                                "start": 512,
                                "end": 27
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 768,
                                "start": 27,
                                "end": 30
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 24,
                            "end": 30
                        }
                    ],
                    "flags": 256,
                    "start": 22,
                    "end": 32
                },
                "flags": 256,
                "start": 22,
                "end": 32
            },
            "flags": 128,
            "start": 22,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 35,
                                "start": 512,
                                "end": 38
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 768,
                                "start": 38,
                                "end": 41
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 42,
                                "end": 42
                            },
                            "flags": 258,
                            "start": 35,
                            "end": 42
                        }
                    ],
                    "flags": 256,
                    "start": 33,
                    "end": 44
                },
                "flags": 256,
                "start": 33,
                "end": 44
            },
            "flags": 128,
            "start": 33,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 215,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 47,
                                    "start": 512,
                                    "end": 50
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "abc",
                                    "rawText": "abc",
                                    "flags": 768,
                                    "start": 50,
                                    "end": 53
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 258,
                                "start": 47,
                                "end": 53
                            }
                        ],
                        "flags": 256,
                        "start": 45,
                        "end": 54
                    },
                    "flags": 256,
                    "start": 45,
                    "end": 54
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 54,
                    "start": 512,
                    "end": 55
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 55,
                    "end": 55
                },
                "flags": 256,
                "start": 45,
                "end": 55
            },
            "flags": 128,
            "start": 45,
            "end": 55
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 56,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 59,
                                "start": 512,
                                "end": 62
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 768,
                                "start": 62,
                                "end": 65
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 59,
                            "end": 65
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 66,
                            "end": 66
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 67,
                            "end": 67
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 68,
                            "end": 68
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 69,
                            "end": 69
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 70,
                            "end": 70
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 71,
                            "end": 71
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 72,
                                "end": 72
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 72,
                                "start": 512,
                                "end": 73
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 73,
                                "end": 73
                            },
                            "flags": 256,
                            "start": 72,
                            "end": 73
                        }
                    ],
                    "flags": 256,
                    "start": 57,
                    "end": 73
                },
                "flags": 256,
                "start": 57,
                "end": 74
            },
            "flags": 128,
            "start": 57,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 77,
                                "start": 512,
                                "end": 80
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 768,
                                "start": 80,
                                "end": 83
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 77,
                            "end": 83
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 84,
                            "end": 84
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 85,
                            "end": 85
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 86,
                            "end": 86
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 87,
                            "end": 87
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 88,
                            "end": 88
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 89,
                            "end": 89
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 90,
                                    "end": 90
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 90,
                                    "start": 512,
                                    "end": 93
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 93,
                                    "end": 93
                                },
                                "flags": 256,
                                "start": 90,
                                "end": 93
                            },
                            "operatorToken": {
                                "kind": 34622,
                                "flags": 93,
                                "start": 512,
                                "end": 95
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 95,
                                "end": 95
                            },
                            "flags": 256,
                            "start": 90,
                            "end": 95
                        }
                    ],
                    "flags": 256,
                    "start": 75,
                    "end": 95
                },
                "flags": 256,
                "start": 75,
                "end": 96
            },
            "flags": 128,
            "start": 75,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 215,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 99,
                        "start": 512,
                        "end": 102
                    },
                    "binding": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 102,
                        "end": 103
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 104,
                            "end": 105
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 105,
                            "start": 512,
                            "end": 106
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 106,
                            "end": 107
                        },
                        "flags": 256,
                        "start": 104,
                        "end": 107
                    },
                    "flags": 258,
                    "start": 99,
                    "end": 107
                },
                "flags": 256,
                "start": 97,
                "end": 108
            },
            "flags": 128,
            "start": 97,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 111,
                                "start": 512,
                                "end": 114
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 768,
                                "start": 114,
                                "end": 117
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 111,
                            "end": 117
                        }
                    ],
                    "flags": 256,
                    "start": 109,
                    "end": 119
                },
                "flags": 256,
                "start": 109,
                "end": 119
            },
            "flags": 128,
            "start": 109,
            "end": 120
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 215,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 122,
                        "start": 512,
                        "end": 125
                    },
                    "binding": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 125,
                        "end": 125
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": null,
                    "flags": 258,
                    "start": 122,
                    "end": 125
                },
                "flags": 256,
                "start": 120,
                "end": 126
            },
            "flags": 128,
            "start": 120,
            "end": 127
        }
    ],
    "isModule": false,
    "text": "(...abc,);\n(...a=b=c);\n(...abc,);\n(...abc=,);\n(...abc,=);\n(...abc,,,,,,,=);\n(...abc,,,,,,,=====);\n(...a=b=c);\n(...abc,);\n(...);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 127
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A rest parameter must be last in a parameter list - start: 7, end: 8
✖ A rest parameter must be last in a parameter list - start: 7, end: 8
✖ A rest element cannot have an initializer - start: 16, end: 17
✖ A rest parameter must be last in a parameter list - start: 30, end: 31
✖ A rest parameter must be last in a parameter list - start: 30, end: 31
✖ A rest element cannot have an initializer - start: 41, end: 42
✖ Expression expected - start: 42, end: 43
✖ A rest parameter must be last in a parameter list - start: 53, end: 54
✖ A rest parameter must be last in a parameter list - start: 53, end: 54
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 54, end: 55
✖ Expression expected - start: 55, end: 56
✖ Statement expected - start: 55, end: 56
✖ A rest parameter must be last in a parameter list - start: 65, end: 66
✖ A rest parameter must be last in a parameter list - start: 65, end: 66
✖ Expression expected - start: 66, end: 67
✖ Expression expected - start: 67, end: 68
✖ Expression expected - start: 68, end: 69
✖ Expression expected - start: 69, end: 70
✖ Expression expected - start: 70, end: 71
✖ Expression expected - start: 71, end: 72
✖ Expression expected - start: 72, end: 73
✖ Expression expected - start: 73, end: 74
✖ A rest parameter must be last in a parameter list - start: 83, end: 84
✖ A rest parameter must be last in a parameter list - start: 83, end: 84
✖ Expression expected - start: 84, end: 85
✖ Expression expected - start: 85, end: 86
✖ Expression expected - start: 86, end: 87
✖ Expression expected - start: 87, end: 88
✖ Expression expected - start: 88, end: 89
✖ Expression expected - start: 89, end: 90
✖ Expression expected - start: 90, end: 93
✖ Expression expected - start: 93, end: 95
✖ Expression expected - start: 95, end: 96
✖ A rest element cannot have an initializer - start: 103, end: 104
✖ A rest parameter must be last in a parameter list - start: 117, end: 118
✖ A rest parameter must be last in a parameter list - start: 117, end: 118
✖ Expression expected - start: 125, end: 126

```

