# Kataw parser test case

## Input

`````js
(...rest,) => {}
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 8
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 1,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 10
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 13
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "(...rest,) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A rest parameter must be last in a parameter list - start: 8, end: 9

```

