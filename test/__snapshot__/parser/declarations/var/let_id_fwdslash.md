# Kataw parser test case

## Input

`````js
var p/
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
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "p",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
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
                "kind": 198,
                "left": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 5,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 5,
                    "end": 6
                },
                "right": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 6,
                    "end": 6
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 5,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "var p/",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 5,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 5,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 6,
            "end": 6
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

