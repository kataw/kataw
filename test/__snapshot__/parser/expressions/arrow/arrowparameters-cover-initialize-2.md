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
                "flags": 0,
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
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 18,
                                "end": 21
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 12
                                                },
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
                                        "flags": 16,
                                        "start": 11,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 17
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
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

var af = ({ x = 1 }) =>  x;
```

### Diagnostics

```javascript
✔ No errors
```

