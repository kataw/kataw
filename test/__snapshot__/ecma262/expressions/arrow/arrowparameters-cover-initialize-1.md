# Kataw parser test case

## Input

`````js
var af = (x = 1) => x;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "af",
                            "rawText": "af",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 6
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 8,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 16
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 19
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 21
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 21
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "var af = (x = 1) => x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
var af = (x = 1) => x;
```

### Diagnostics

```javascript
✔ No errors
```

