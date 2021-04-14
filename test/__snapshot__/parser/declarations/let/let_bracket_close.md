# Kataw parser test case

## Input

`````js
let ];
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
                "kind": 81921,
                "text": "let",
                "rawText": "let",
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 3
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 5,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "let ];",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 5
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 3,
            "end": 5
        }
    ],
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

