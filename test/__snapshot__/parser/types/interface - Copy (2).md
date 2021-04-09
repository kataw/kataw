# Kataw parser test case

## Input

`````js
type T = { [[foo]](): X }
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
            "kind": 200,
            "name": {
                "kind": 81921,
                "value": "T",
                "autofix": 0,
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 241,
                "properties": [],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [
                    {
                        "kind": 248,
                        "name": {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 13,
                            "end": 16
                        },
                        "value": {
                            "kind": 148,
                            "parameters": [],
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 81921,
                                    "value": "X",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "autofix": 0,
                                "flags": 0,
                                "start": 21,
                                "end": 23
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 10,
                            "end": 23
                        },
                        "optionalToken": null,
                        "staticToken": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 10,
                        "end": 23
                    }
                ],
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 25
            },
            "autofix": 0,
            "flags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "type T = { [[foo]](): X }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

