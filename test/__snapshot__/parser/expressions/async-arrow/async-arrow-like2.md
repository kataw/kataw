# Kataw parser test case

## Input

`````js
(async <T + U>(fn: T): T => fn);
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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 1,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "U",
                            "rawText": "U",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "right": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 24,
                                "end": 27
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "fn",
                                        "rawText": "fn",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 17
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
                                                "start": 18,
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 2097152,
                                        "start": 18,
                                        "end": 20
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 14,
                                    "end": 20
                                }
                            ],
                            "asyncKeyword": null,
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
                                        "start": 22,
                                        "end": 24
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 2097152,
                                "start": 22,
                                "end": 24
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "fn",
                                "rawText": "fn",
                                "flags": 96,
                                "start": 27,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 30
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "(async <T + U>(fn: T): T => fn);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 21, end: 22

```

