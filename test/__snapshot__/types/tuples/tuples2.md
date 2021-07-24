# Kataw parser test case

## Input

`````js
var a : [number, string] = [123, "duck"];
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 15
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 15
                                    },
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 23
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 24
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 24
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 123,
                                        "rawText": "123",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 31
                                    },
                                    {
                                        "kind": 201392131,
                                        "text": "duck",
                                        "rawText": "\"duck\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 39
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 26,
                            "end": 40
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 40
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "var a : [number, string] = [123, \"duck\"];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
var a: [number, string] = [123, "\"duck\""];
```

### Diagnostics

```javascript
✔ No errors
```

