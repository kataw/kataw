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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
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
                            "flags": 32,
                            "start": 6,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 7
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "w",
                        "rawText": "w",
                        "flags": 96,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 536870944,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4135,
                    "flags": 96,
                    "start": 9,
                    "end": 12
                },
                "right": {
                    "kind": 134299649,
                    "text": "s",
                    "rawText": "s",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "flags": 32,
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
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "flags": 16,
                "start": 17,
                "end": 20
            },
            "flags": 80,
            "start": 0,
            "end": 20
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 20,
                "end": 25
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 536871042,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 28,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 27,
                        "end": 29
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 30,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 4126,
                    "flags": 96,
                    "start": 32,
                    "end": 36
                },
                "right": {
                    "kind": 134299649,
                    "text": "p",
                    "rawText": "p",
                    "flags": 96,
                    "start": 36,
                    "end": 38
                },
                "flags": 32,
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
                    "flags": 96,
                    "start": 41,
                    "end": 43
                },
                "flags": 16,
                "start": 41,
                "end": 44
            },
            "flags": 81,
            "start": 20,
            "end": 44
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
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
                            "flags": 32,
                            "start": 52,
                            "end": 52
                        },
                        "flags": 32,
                        "start": 51,
                        "end": 53
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "u",
                        "rawText": "u",
                        "flags": 96,
                        "start": 54,
                        "end": 55
                    },
                    "flags": 536870944,
                    "start": 44,
                    "end": 55
                },
                "operatorToken": {
                    "kind": 4136,
                    "flags": 96,
                    "start": 55,
                    "end": 58
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 58,
                    "end": 60
                },
                "flags": 32,
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
                    "flags": 96,
                    "start": 63,
                    "end": 65
                },
                "flags": 16,
                "start": 63,
                "end": 66
            },
            "flags": 81,
            "start": 44,
            "end": 66
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 66,
                "end": 71
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 536871042,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 74,
                            "end": 74
                        },
                        "flags": 48,
                        "start": 73,
                        "end": 75
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 76,
                        "end": 77
                    },
                    "flags": 32,
                    "start": 66,
                    "end": 78
                },
                "operatorToken": {
                    "kind": 4135,
                    "flags": 96,
                    "start": 78,
                    "end": 81
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 81,
                    "end": 83
                },
                "flags": 32,
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
                    "flags": 96,
                    "start": 86,
                    "end": 88
                },
                "flags": 16,
                "start": 86,
                "end": 89
            },
            "flags": 81,
            "start": 66,
            "end": 89
        }
    ],
    "isModule": false,
    "source": "for ([].w ^= s;;) x;\n\nfor ([][y] <<= p;;) x;\n\nfor ([].u |= c;;) x;\n\nfor ({}[y] ^= x;;) x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 89
}
```

### Printed

```javascript

for ([].w ^= s; ; )
  x;
for ( <<= p; ; )
  x;
for ([].u |= c; ; )
  x;
for ( ^= x; ; )
  x;
```

### Diagnostics

```javascript
✔ No errors
```

