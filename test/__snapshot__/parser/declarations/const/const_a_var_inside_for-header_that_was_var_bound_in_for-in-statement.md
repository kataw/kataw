# Kataw parser test case

## Input

`````js
for (const x in obj) { var x = 13 }
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
            "kind": 166,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 10,
                        "end": 12
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 10,
                "end": 12
            },
            "expression": {
                "kind": 81921,
                "value": "obj",
                "autofix": 0,
                "flags": 768,
                "start": 15,
                "end": 19
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
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
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 81921,
                                            "value": 13,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 30,
                                            "end": 33
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 26,
                                        "end": 33
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 26,
                                "end": 33
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 22,
                            "end": 33
                        }
                    ],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 22,
                    "end": 33
                },
                "autofix": 0,
                "flags": 128,
                "start": 20,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "for (const x in obj) { var x = 13 }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

