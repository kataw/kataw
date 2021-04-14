# Kataw parser test case

## Input

`````js
1
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
                "text": 1,
                "rawText": "1",
                "flags": 768,
                "start": 0,
                "end": 1
            },
            "flags": 128,
            "start": 0,
            "end": 1
        }
    ],
    "isModule": false,
    "text": "1",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 1
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

