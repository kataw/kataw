# Kataw parser test case

## Input

`````js
[{a=0},{b=0},0] = 0
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
    "directives": [],
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
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 2,
                                                "end": 3
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 768,
                                                "start": 4,
                                                "end": 5
                                            },
                                            "flags": 256,
                                            "start": 2,
                                            "end": 5
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 6
                            },
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 205,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 8,
                                                "end": 9
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 768,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "flags": 256,
                                            "start": 8,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 8,
                                    "end": 11
                                },
                                "flags": 256,
                                "start": 7,
                                "end": 12
                            },
                            {
                                "kind": 134299649,
                                "text": 0,
                                "rawText": "0",
                                "flags": 768,
                                "start": 13,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 134299649,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "[{a=0},{b=0},0] = 0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

