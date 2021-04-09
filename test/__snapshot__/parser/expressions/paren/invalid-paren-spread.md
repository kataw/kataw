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
                                "autofix": 0,
                                "flags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "binding": {
                                "kind": 81921,
                                "value": "abc",
                                "autofix": 0,
                                "flags": 768,
                                "start": 4,
                                "end": 7
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 7
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
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
                        "autofix": 0,
                        "flags": 0,
                        "start": 12,
                        "end": 15
                    },
                    "binding": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 16
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 18
                        },
                        "operatorToken": {
                            "kind": 81921,
                            "autofix": 0,
                            "flags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 81921,
                            "value": "c",
                            "autofix": 0,
                            "flags": 768,
                            "start": 19,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 17,
                        "end": 20
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 12,
                    "end": 20
                },
                "autofix": 0,
                "flags": 256,
                "start": 10,
                "end": 21
            },
            "autofix": 0,
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
                                "autofix": 0,
                                "flags": 0,
                                "start": 24,
                                "end": 27
                            },
                            "binding": {
                                "kind": 81921,
                                "value": "abc",
                                "autofix": 0,
                                "flags": 768,
                                "start": 27,
                                "end": 30
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 24,
                            "end": 30
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 22,
                    "end": 32
                },
                "autofix": 0,
                "flags": 256,
                "start": 22,
                "end": 32
            },
            "autofix": 0,
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
                                "autofix": 0,
                                "flags": 0,
                                "start": 35,
                                "end": 38
                            },
                            "binding": {
                                "kind": 81921,
                                "value": "abc",
                                "autofix": 0,
                                "flags": 768,
                                "start": 38,
                                "end": 41
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 253,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 42,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 35,
                            "end": 42
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 44
                },
                "autofix": 0,
                "flags": 256,
                "start": 33,
                "end": 44
            },
            "autofix": 0,
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
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 47,
                                    "end": 50
                                },
                                "binding": {
                                    "kind": 81921,
                                    "value": "abc",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 50,
                                    "end": 53
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 47,
                                "end": 53
                            }
                        ],
                        "autofix": 0,
                        "flags": 256,
                        "start": 45,
                        "end": 54
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 45,
                    "end": 54
                },
                "operatorToken": {
                    "kind": 16,
                    "autofix": 0,
                    "flags": 0,
                    "start": 45,
                    "end": 55
                },
                "right": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 55,
                    "end": 55
                },
                "autofix": 0,
                "flags": 256,
                "start": 45,
                "end": 55
            },
            "autofix": 0,
            "flags": 128,
            "start": 45,
            "end": 55
        },
        {
            "kind": 168,
            "autofix": 0,
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
                                "autofix": 0,
                                "flags": 0,
                                "start": 59,
                                "end": 62
                            },
                            "binding": {
                                "kind": 81921,
                                "value": "abc",
                                "autofix": 0,
                                "flags": 768,
                                "start": 62,
                                "end": 65
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 59,
                            "end": 65
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 66,
                            "end": 66
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 67,
                            "end": 67
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 68,
                            "end": 68
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 69,
                            "end": 69
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 70,
                            "end": 70
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 71,
                            "end": 71
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 253,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 72,
                                "end": 72
                            },
                            "operatorToken": {
                                "kind": 16,
                                "autofix": 0,
                                "flags": 0,
                                "start": 72,
                                "end": 73
                            },
                            "right": {
                                "kind": 253,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 73,
                                "end": 73
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 72,
                            "end": 73
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 57,
                    "end": 73
                },
                "autofix": 0,
                "flags": 256,
                "start": 57,
                "end": 74
            },
            "autofix": 0,
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
                                "autofix": 0,
                                "flags": 0,
                                "start": 77,
                                "end": 80
                            },
                            "binding": {
                                "kind": 81921,
                                "value": "abc",
                                "autofix": 0,
                                "flags": 768,
                                "start": 80,
                                "end": 83
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 77,
                            "end": 83
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 84,
                            "end": 84
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 85,
                            "end": 85
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 86,
                            "end": 86
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 87,
                            "end": 87
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 88,
                            "end": 88
                        },
                        {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 89,
                            "end": 89
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 253,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 90,
                                    "end": 90
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 90,
                                    "end": 93
                                },
                                "right": {
                                    "kind": 253,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 93,
                                    "end": 93
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 90,
                                "end": 93
                            },
                            "operatorToken": {
                                "kind": 34622,
                                "autofix": 0,
                                "flags": 0,
                                "start": 93,
                                "end": 95
                            },
                            "right": {
                                "kind": 253,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 95,
                                "end": 95
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 90,
                            "end": 95
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 75,
                    "end": 95
                },
                "autofix": 0,
                "flags": 256,
                "start": 75,
                "end": 96
            },
            "autofix": 0,
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
                        "autofix": 0,
                        "flags": 0,
                        "start": 99,
                        "end": 102
                    },
                    "binding": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 102,
                        "end": 103
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 104,
                            "end": 105
                        },
                        "operatorToken": {
                            "kind": 81921,
                            "autofix": 0,
                            "flags": 0,
                            "start": 104,
                            "end": 106
                        },
                        "right": {
                            "kind": 81921,
                            "value": "c",
                            "autofix": 0,
                            "flags": 768,
                            "start": 106,
                            "end": 107
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 104,
                        "end": 107
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 99,
                    "end": 107
                },
                "autofix": 0,
                "flags": 256,
                "start": 97,
                "end": 108
            },
            "autofix": 0,
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
                                "autofix": 0,
                                "flags": 0,
                                "start": 111,
                                "end": 114
                            },
                            "binding": {
                                "kind": 81921,
                                "value": "abc",
                                "autofix": 0,
                                "flags": 768,
                                "start": 114,
                                "end": 117
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 111,
                            "end": 117
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 109,
                    "end": 119
                },
                "autofix": 0,
                "flags": 256,
                "start": 109,
                "end": 119
            },
            "autofix": 0,
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
                        "autofix": 0,
                        "flags": 0,
                        "start": 122,
                        "end": 125
                    },
                    "binding": {
                        "kind": 253,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 125,
                        "end": 125
                    },
                    "optionalToken": null,
                    "type": null,
                    "initializer": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 122,
                    "end": 125
                },
                "autofix": 0,
                "flags": 256,
                "start": 120,
                "end": 126
            },
            "autofix": 0,
            "flags": 128,
            "start": 120,
            "end": 127
        }
    ],
    "isModule": false,
    "text": "(...abc,);\n(...a=b=c);\n(...abc,);\n(...abc=,);\n(...abc,=);\n(...abc,,,,,,,=);\n(...abc,,,,,,,=====);\n(...a=b=c);\n(...abc,);\n(...);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 19,
            "error": "A rest parameter must be last in a parameter list",
            "start": 7,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 16,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 19,
            "error": "A rest parameter must be last in a parameter list",
            "start": 30,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 41,
            "end": 42
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 42,
            "end": 43
        },
        {
            "kind": 2,
            "source": 2,
            "code": 19,
            "error": "A rest parameter must be last in a parameter list",
            "start": 53,
            "end": 54
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 54,
            "end": 55
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 54,
            "end": 55
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 55,
            "end": 56
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55,
            "end": 56
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 55,
            "end": 56
        },
        {
            "kind": 2,
            "source": 2,
            "code": 19,
            "error": "A rest parameter must be last in a parameter list",
            "start": 65,
            "end": 66
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 66,
            "end": 67
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 67,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 68,
            "end": 69
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 69,
            "end": 70
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 70,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 71,
            "end": 72
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 72,
            "end": 73
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 73,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 19,
            "error": "A rest parameter must be last in a parameter list",
            "start": 83,
            "end": 84
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 84,
            "end": 85
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 85,
            "end": 86
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 86,
            "end": 87
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 87,
            "end": 88
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 88,
            "end": 89
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 89,
            "end": 90
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 90,
            "end": 93
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 93,
            "end": 95
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 95,
            "end": 96
        },
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 103,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 19,
            "error": "A rest parameter must be last in a parameter list",
            "start": 117,
            "end": 118
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 125,
            "end": 126
        }
    ],
    "start": 0,
    "end": 127
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

