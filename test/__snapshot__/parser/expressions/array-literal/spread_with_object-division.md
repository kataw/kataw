# Kataw parser test case

## Input

`````js
[...{x:y}/y]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "argument": {
                                "kind": 198,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 81921,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 7,
                                                    "end": 8
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 6
                                                },
                                                "flags": 256,
                                                "start": 5,
                                                "end": 8
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 9
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 10,
                                    "end": 11
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 11
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "[...{x:y}/y]",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

