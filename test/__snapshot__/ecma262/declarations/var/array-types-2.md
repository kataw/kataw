# Kataw parser test case

## Input

`````js
var a: ?number[]
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
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                },
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 14
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 16
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 16
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 16
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "var a: ?number[]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
var a: ? number[];
```

### Diagnostics

```javascript
✔ No errors
```

