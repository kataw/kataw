# Kataw parser test case

## Input

`````js
[.../x//y]
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
                                    "kind": 221,
                                    "text": "/x/",
                                    "flags": 768,
                                    "start": 4,
                                    "end": 7
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 768,
                                    "start": 7,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "[.../x//y]",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

