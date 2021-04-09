# Kataw parser test case

## Input

`````js
const ...a = 1;
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
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [],
                "autofix": 0,
                "flags": 160,
                "start": 5,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 9,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 67174402,
                    "autofix": 0,
                    "flags": 0,
                    "start": 9,
                    "end": 12
                },
                "right": {
                    "kind": 81921,
                    "value": 1,
                    "autofix": 0,
                    "flags": 768,
                    "start": 12,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 9,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "const ...a = 1;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 5,
            "end": 9
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

