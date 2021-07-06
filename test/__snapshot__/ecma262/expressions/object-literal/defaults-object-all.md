# Kataw parser test case

## Input

`````js
var {x = 10, y = 5, z = 1} = a;
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
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 11
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 5,
                                            "rawText": "5",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 18
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 25
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 26
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 30
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 30
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "var {x = 10, y = 5, z = 1} = a;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

var { x = 10, y = 5, z = 1 } = a;
```

### Diagnostics

```javascript
✔ No errors
```

