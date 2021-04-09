# Kataw parser test case

## Input

`````js
const q
/d/
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
                            "value": "q",
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 5,
                        "end": 7
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 5,
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 253,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 7,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "autofix": 0,
                        "flags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "right": {
                        "kind": 81921,
                        "value": "d",
                        "autofix": 0,
                        "flags": 768,
                        "start": 9,
                        "end": 10
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 7,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 35640,
                    "autofix": 0,
                    "flags": 0,
                    "start": 10,
                    "end": 11
                },
                "right": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 11,
                    "end": 11
                },
                "autofix": 0,
                "flags": 256,
                "start": 7,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 7,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "const q\n/d/",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 13,
            "error": "Missing initializer in const declaration",
            "start": 7,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 7,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 7,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 11,
            "end": 11
        }
    ],
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

