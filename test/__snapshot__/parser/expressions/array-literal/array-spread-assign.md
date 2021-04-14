# Kataw parser test case

## Input

`````js
[...z = 1]
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
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 768,
                                    "start": 4,
                                    "end": 5
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 7,
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
    "text": "[...z = 1]",
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

