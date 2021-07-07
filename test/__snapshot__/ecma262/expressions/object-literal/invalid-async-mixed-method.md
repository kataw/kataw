# Kataw parser test case

## Input

`````js
({ async a(b = await (0)) {} })
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 10
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
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 208,
                                                    "awaitKeyword": {
                                                        "kind": 82196,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 14,
                                                        "end": 20
                                                    },
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 22,
                                                            "end": 23
                                                        },
                                                        "flags": 20,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 24
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 14,
                                                    "end": 24
                                                },
                                                "flags": 34,
                                                "transformFlags": 4096,
                                                "start": 11,
                                                "end": 24
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 290,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 25
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 28
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 28
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 30
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "({ async a(b = await (0)) {} })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 14, end: 20

```

