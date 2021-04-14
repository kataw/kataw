# Kataw parser test case

## Input

`````js
for (yield[g]--;;);
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
                "kind": 127,
                "operandToken": {
                    "kind": 196636,
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 81921,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 768,
                        "start": 5,
                        "end": 10
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "g",
                        "rawText": "g",
                        "flags": 768,
                        "start": 11,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 13
                },
                "flags": 256,
                "start": 5,
                "end": 15
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 18,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "for (yield[g]--;;);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

