# Kataw parser test case

## Input

`````js
var af = yield => 1;

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
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 14
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 17
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 19
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 19
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "var af = yield => 1;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
var af = yield => 1;
```

### Diagnostics

```javascript
✔ No errors
```

