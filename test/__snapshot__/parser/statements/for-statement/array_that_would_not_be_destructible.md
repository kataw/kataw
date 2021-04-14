# Kataw parser test case

## Input

`````js
for ([x + y];;);
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 6,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 768,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 81921,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 256,
                            "start": 6,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 6,
                    "end": 11
                },
                "flags": 256,
                "start": 5,
                "end": 12
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 15,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "for ([x + y];;);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

