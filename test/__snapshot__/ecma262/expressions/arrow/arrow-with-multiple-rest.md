# Kataw parser test case

## Input

`````js
(...a, ...b) => 0
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 5
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 1,
                            "end": 5
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 10
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 11
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 6,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 12
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 15
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "(...a, ...b) => 0",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A rest parameter must be last in a parameter list - start: 5, end: 6

```

