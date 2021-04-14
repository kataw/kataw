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
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 81921,
                "text": "T",
                "rawText": "T",
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
                            "text": "foo",
                            "rawText": "foo",
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
                                    "text": "X",
                                    "rawText": "X",
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
            "flags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "type T = { [[foo]](): X }",
    "fileName": "__root__",
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

