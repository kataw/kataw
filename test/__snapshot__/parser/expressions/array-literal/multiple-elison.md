# Kataw parser test case

## Input

`````js
[a,,,,,,,,,b]
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
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 3,
                            "end": 3
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 4,
                            "end": 4
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 5,
                            "end": 5
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 6,
                            "end": 6
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 7,
                            "end": 7
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 8,
                            "end": 8
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 9,
                            "end": 9
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 10,
                            "end": 10
                        },
                        {
                            "kind": 81921,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "[a,,,,,,,,,b]",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

