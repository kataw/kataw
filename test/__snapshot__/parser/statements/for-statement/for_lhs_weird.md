# Kataw parser test case

## Input

`````js
for ([].w ^= s;;) x;

for ([][y] <<= p;;) x;

for ([].u |= c;;) x;

for ({}[y] ^= x;;) x;
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 6,
                            "end": 6
                        },
                        "flags": 256,
                        "start": 5,
                        "end": 7
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "w",
                        "rawText": "w",
                        "flags": 768,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4135,
                    "flags": 768,
                    "start": 9,
                    "end": 12
                },
                "right": {
                    "kind": 134299649,
                    "text": "s",
                    "rawText": "s",
                    "flags": 768,
                    "start": 12,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "flags": 128,
                "start": 17,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 20,
                "end": 25
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 28,
                            "end": 28
                        },
                        "flags": 256,
                        "start": 27,
                        "end": 29
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 30,
                        "end": 31
                    },
                    "flags": 256,
                    "start": 20,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 4126,
                    "flags": 768,
                    "start": 32,
                    "end": 36
                },
                "right": {
                    "kind": 134299649,
                    "text": "p",
                    "rawText": "p",
                    "flags": 768,
                    "start": 36,
                    "end": 38
                },
                "flags": 256,
                "start": 20,
                "end": 38
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 41,
                    "end": 43
                },
                "flags": 128,
                "start": 41,
                "end": 44
            },
            "flags": 128,
            "start": 20,
            "end": 44
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 44,
                "end": 49
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 52,
                            "end": 52
                        },
                        "flags": 256,
                        "start": 51,
                        "end": 53
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "u",
                        "rawText": "u",
                        "flags": 768,
                        "start": 54,
                        "end": 55
                    },
                    "flags": 256,
                    "start": 44,
                    "end": 55
                },
                "operatorToken": {
                    "kind": 4136,
                    "flags": 768,
                    "start": 55,
                    "end": 58
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 58,
                    "end": 60
                },
                "flags": 256,
                "start": 44,
                "end": 60
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 63,
                    "end": 65
                },
                "flags": 128,
                "start": 63,
                "end": 66
            },
            "flags": 128,
            "start": 44,
            "end": 66
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 66,
                "end": 71
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 74,
                            "end": 74
                        },
                        "flags": 256,
                        "start": 73,
                        "end": 75
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 76,
                        "end": 77
                    },
                    "flags": 256,
                    "start": 66,
                    "end": 78
                },
                "operatorToken": {
                    "kind": 4135,
                    "flags": 768,
                    "start": 78,
                    "end": 81
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 81,
                    "end": 83
                },
                "flags": 256,
                "start": 66,
                "end": 83
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 86,
                    "end": 88
                },
                "flags": 128,
                "start": 86,
                "end": 89
            },
            "flags": 128,
            "start": 66,
            "end": 89
        }
    ],
    "isModule": false,
    "text": "for ([].w ^= s;;) x;\n\nfor ([][y] <<= p;;) x;\n\nfor ([].u |= c;;) x;\n\nfor ({}[y] ^= x;;) x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 89
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

