# Kataw parser test case

## Input

`````js
({y}?: string) =>x
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 14,
                    "end": 17
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 2,
                                "end": 3
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 4
                        },
                        "questionToken": {
                            "kind": 22,
                            "flags": 768,
                            "start": 4,
                            "end": 5
                        },
                        "consequent": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 5,
                            "end": 5
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 768,
                            "start": 5,
                            "end": 6
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 768,
                            "start": 6,
                            "end": 13
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 13
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 17,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "({y}?: string) =>x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
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
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 14,
            "end": 17
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

