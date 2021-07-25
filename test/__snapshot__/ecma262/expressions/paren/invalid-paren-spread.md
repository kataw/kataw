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

### CST

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
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 7
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 1,
                            "end": 7
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 9
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 15
                    },
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 16
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 18
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 17,
                        "end": 20
                    },
                    "flags": 34,
                    "transformFlags": 4096,
                    "start": 12,
                    "end": 20
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 10,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
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
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 27
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 30
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 24,
                            "end": 30
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 22,
                    "end": 32
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 22,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 4096,
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
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 38
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 41
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 42
                            },
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 35,
                            "end": 42
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 33,
                    "end": 44
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 33,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                "kind": 281,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 50
                                },
                                "left": {
                                    "kind": 134299649,
                                    "text": "abc",
                                    "rawText": "abc",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 53
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": null,
                                "flags": 34,
                                "transformFlags": 4096,
                                "start": 47,
                                "end": 53
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 45,
                        "end": 54
                    },
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 54
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 54,
                    "end": 55
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 55
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 45,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 45,
            "end": 55
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 62
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 65
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 59,
                            "end": 65
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 66
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 67
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 68
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 69,
                            "end": 69
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 70
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 71
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 72,
                                "end": 72
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 72,
                                "end": 73
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 73,
                                "end": 73
                            },
                            "flags": 0,
                            "transformFlags": 128,
                            "start": 72,
                            "end": 73
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 57,
                    "end": 73
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 57,
                "end": 74
            },
            "flags": 16,
            "transformFlags": 4096,
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
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 80
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 83
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 77,
                            "end": 83
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 84
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 85,
                            "end": 85
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 86
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 87,
                            "end": 87
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 88,
                            "end": 88
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
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
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 90,
                                    "end": 90
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 90,
                                    "end": 93
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 93,
                                    "end": 93
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 90,
                                "end": 93
                            },
                            "operatorToken": {
                                "kind": 34622,
                                "flags": 96,
                                "transformFlags": 16,
                                "start": 93,
                                "end": 95
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 95
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 90,
                            "end": 95
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 75,
                    "end": 95
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 75,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 75,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 99,
                        "end": 102
                    },
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 102,
                        "end": 103
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 104,
                            "end": 105
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 105,
                            "end": 106
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 106,
                            "end": 107
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 104,
                        "end": 107
                    },
                    "flags": 34,
                    "transformFlags": 4096,
                    "start": 99,
                    "end": 107
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 97,
                "end": 108
            },
            "flags": 16,
            "transformFlags": 4096,
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
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 111,
                                "end": 114
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 117
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 111,
                            "end": 117
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 109,
                    "end": 119
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 109,
                "end": 119
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 109,
            "end": 120
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 122,
                        "end": 125
                    },
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 125,
                        "end": 125
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": null,
                    "flags": 34,
                    "transformFlags": 4096,
                    "start": 122,
                    "end": 125
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 120,
                "end": 126
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 120,
            "end": 127
        }
    ],
    "isModule": false,
    "source": "(...abc,);\n(...a=b=c);\n(...abc,);\n(...abc=,);\n(...abc,=);\n(...abc,,,,,,,=);\n(...abc,,,,,,,=====);\n(...a=b=c);\n(...abc,);\n(...);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 127
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A rest parameter must be last in a parameter list - start: 7, end: 8
✖ A rest element cannot have an initializer - start: 17, end: 18
✖ Expected '=>' - start: 21, end: 22
✖ A rest parameter must be last in a parameter list - start: 30, end: 31
✖ A rest element cannot have an initializer - start: 42, end: 43
✖ Identifier expected - start: 42, end: 43
✖ A rest parameter must be last in a parameter list - start: 53, end: 54
✖ Expected a ')' to match the '(' token here - start: 54, end: 55
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 54, end: 55
✖ Identifier expected - start: 55, end: 56
✖ A rest parameter must be last in a parameter list - start: 65, end: 66
✖ Identifier expected - start: 66, end: 67
✖ Identifier expected - start: 67, end: 68
✖ Identifier expected - start: 68, end: 69
✖ Identifier expected - start: 69, end: 70
✖ Identifier expected - start: 70, end: 71
✖ Identifier expected - start: 71, end: 72
✖ Identifier expected - start: 72, end: 73
✖ Identifier expected - start: 73, end: 74
✖ A rest parameter must be last in a parameter list - start: 83, end: 84
✖ Identifier expected - start: 84, end: 85
✖ Identifier expected - start: 85, end: 86
✖ Identifier expected - start: 86, end: 87
✖ Identifier expected - start: 87, end: 88
✖ Identifier expected - start: 88, end: 89
✖ Identifier expected - start: 89, end: 90
✖ Identifier expected - start: 90, end: 93
✖ Identifier expected - start: 93, end: 95
✖ Identifier expected - start: 95, end: 96
✖ A rest element cannot have an initializer - start: 104, end: 105
✖ Expected '=>' - start: 108, end: 109
✖ A rest parameter must be last in a parameter list - start: 117, end: 118
✖ Binding identifier expected - start: 125, end: 126
✖ Expected '=>' - start: 126, end: 127

```

