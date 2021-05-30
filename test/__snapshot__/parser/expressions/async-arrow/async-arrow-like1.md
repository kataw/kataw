# Kataw parser test case

## Input

`````js
async <T>(fn: () => T);
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 203,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 19
                                },
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 15,
                                    "end": 15
                                },
                                "returnType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 19,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 13,
                                "end": 21
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 21
                        },
                        "right": null,
                        "flags": 32,
                        "start": 10,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 268435488,
            "start": 0,
            "end": 22
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 22,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "async <T>(fn: () => T);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

async([])

```

### Diagnostics

```javascript
✔ No errors
```

