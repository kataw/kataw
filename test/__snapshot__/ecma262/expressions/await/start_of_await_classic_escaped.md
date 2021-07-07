# Kataw parser test case

## Input

`````js
async () => { var \u0061wait; }
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 17
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "\\u0061wait",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 28
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 17,
                                            "end": 28
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 28
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 29
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 29
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 31
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async () => { var \\u0061wait; }",
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
✖ 'await' cannot be used as an identifier here - start: 17, end: 28

```

