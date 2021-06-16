# Kataw parser test case

## Input

`````js
async <T>(a: T): T => a;
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 18,
                    "end": 21
                },
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "type": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 7,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 0,
                        "end": 9
                    },
                    "flags": 2097152,
                    "start": 0,
                    "end": 9
                },
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 2097152,
                            "start": 12,
                            "end": 14
                        },
                        "right": null,
                        "flags": 32,
                        "start": 10,
                        "end": 14
                    }
                ],
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 2097152,
                    "start": 16,
                    "end": 18
                },
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 21,
                    "end": 23
                },
                "flags": 288,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "async <T>(a: T): T => a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

async (a) =>  a;
```

### Diagnostics

```javascript
✔ No errors
```

