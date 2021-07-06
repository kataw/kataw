# Kataw parser test case

## Input

`````js
function a([a, b, ...[ok]]) {};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
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
                        "kind": 201,
                        "elementList": {
                            "kind": 324,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 13
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 16
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 21
                                    },
                                    "left": {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 324,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "ok",
                                                    "rawText": "ok",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 24
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 25
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 25
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 25
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 26
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 29
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 27,
                "end": 30
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 30,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "function a([a, b, ...[ok]]) {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

function a([a, b, ...[ok]]) {}
```

### Diagnostics

```javascript
✔ No errors
```

