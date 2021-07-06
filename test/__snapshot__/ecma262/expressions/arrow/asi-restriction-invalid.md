# Kataw parser test case

## Input

`````js
var af = ()
=> {};
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
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 10
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 14
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 16
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 17
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "var af = ()\n=> {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Line terminator not permitted before arrow - start: 11, end: 14

```

