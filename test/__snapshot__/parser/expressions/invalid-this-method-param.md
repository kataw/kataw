# Kataw parser test case

## Input

`````js
({ x(this) {}  }) => x
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
                    "start": 17,
                    "end": 20
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 351,
                                    "asyncKeyword": null,
                                    "asteriskToken": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 2,
                                            "end": 4
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "this",
                                                        "rawText": "this",
                                                        "flags": 96,
                                                        "start": 5,
                                                        "end": 9
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 32,
                                                    "start": 5,
                                                    "end": 9
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 5,
                                            "end": 10
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 12,
                                                "end": 12
                                            },
                                            "flags": 32,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 13
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 16
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 34,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "({ x(this) {}  }) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The 'this' keyword cannot be a formal parameter - start: 5, end: 9
✖ A type annotation is required for the `this` parameter. - start: 9, end: 10
✖ The left hand side of the arrow is not destructible  - start: 17, end: 20

```

