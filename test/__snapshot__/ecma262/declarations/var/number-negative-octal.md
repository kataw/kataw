# Kataw parser test case

## Input

`````js
var a: -0x7B
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
                                "kind": 313,
                                "subtractionToken": {
                                    "kind": 134318643,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                },
                                "text": 123,
                                "rawText": "0x7B",
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 12
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 12
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 12
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "var a: -0x7B",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
var a: -0x7b;
```

### Diagnostics

```javascript
✔ No errors
```

