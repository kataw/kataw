# Kataw parser test case

## Input

`````js
var af = ({x = 1}) => x;
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
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 11,
                                                        "end": 12
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 16
                                                    },
                                                    "flags": 32,
                                                    "start": 11,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 11,
                                            "end": 16
                                        },
                                        "flags": 48,
                                        "start": 10,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 10,
                                "end": 18
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 18,
                                "end": 21
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "flags": 34,
                            "start": 8,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "var af = ({x = 1}) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

var af = ({x = 1}) => x;
```

### Diagnostics

```javascript
✔ No errors
```

