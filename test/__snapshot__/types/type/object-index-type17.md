# Kataw parser test case

## Input

`````js
var obj: { [user_id: number]: string } = {};
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
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 195,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "user_id",
                                            "rawText": "user_id",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "key": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 27
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 27
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 36
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 36
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 38
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 38
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 42
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 40,
                            "end": 43
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 43
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "var obj: { [user_id: number]: string } = {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
var obj: { [number]: string } = {};
```

### Diagnostics

```javascript
✔ No errors
```

