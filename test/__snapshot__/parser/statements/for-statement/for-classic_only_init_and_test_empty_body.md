# Kataw parser test case

## Input

`````js
for (a;b;);
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
            "kind": 165,
            "initializer": {
                "kind": 81921,
                "value": "a",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "condition": null,
            "incrementor": {
                "kind": 81921,
                "value": "b",
                "autofix": 0,
                "flags": 768,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "for (a;b;);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

