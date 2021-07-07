# Kataw parser test case

## Input

`````js
var obj: {
  size: number,
  [id: number]: string
} = {
  size: 0
};
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
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "size",
                                            "rawText": "size",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 25
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 25
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 26
                                    },
                                    {
                                        "kind": 195,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "id",
                                            "rawText": "id",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "key": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 40
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 40
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 49
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 49
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 49
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 51
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 51
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "size",
                                            "rawText": "size",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 55,
                                            "end": 62
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 63,
                                            "end": 65
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 55,
                                        "end": 65
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 65
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 53,
                            "end": 67
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 67
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 67
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "var obj: {\n  size: number,\n  [id: number]: string\n} = {\n  size: 0\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
var obj: { size: number, [number]: string } = { size: 0 };
```

### Diagnostics

```javascript
✔ No errors
```

