# Kataw parser test case

## Input

`````js
[a,b,...rest]= {};

[a,,...rest]= {};
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 3,
                                "end": 4
                            },
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 81921,
                                    "value": "rest",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 12
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 13,
                    "end": 14
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 16,
                        "end": 16
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 17
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 21,
                                "end": 22
                            },
                            {
                                "kind": 230,
                                "autofix": 0,
                                "flags": 768,
                                "start": 23,
                                "end": 23
                            },
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 81921,
                                    "value": "rest",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 31
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 24,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 21,
                        "end": 31
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 32,
                    "end": 33
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 35,
                        "end": 35
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 36
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 36
            },
            "autofix": 0,
            "flags": 128,
            "start": 18,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "[a,b,...rest]= {};\n\n[a,,...rest]= {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

