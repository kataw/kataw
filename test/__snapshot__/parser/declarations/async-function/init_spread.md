# Kataw parser test case

## Input

`````js
let x = ...y;
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
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 7,
                            "end": 7
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 7
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "let x = ...y;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 7,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 7,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 7,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 7,
            "end": 11
        }
    ],
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

