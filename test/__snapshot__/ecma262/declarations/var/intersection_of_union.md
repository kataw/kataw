# Kataw parser test case

## Input

`````js
var a: number & (string | bool)
`````

## Options

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
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 13
                                    },
                                    {
                                        "kind": 290,
                                        "type": {
                                            "kind": 137,
                                            "types": [
                                                {
                                                    "kind": 134234347,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 23
                                                },
                                                {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "bool",
                                                        "rawText": "bool",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 30
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 30
                                                }
                                            ],
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 30
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 31
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 31
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 31
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "var a: number & (string | bool)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

var a: number & (string | bool);
```

### Diagnostics

```javascript
✔ No errors
```

