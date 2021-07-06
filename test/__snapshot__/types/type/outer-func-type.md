# Kataw parser test case

## Input

`````js
type x = (Record<string, any> | null)[] & { length: 2; }
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138,
                    "types": [
                        {
                            "kind": 136,
                            "type": {
                                "kind": 290,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "Record",
                                                "rawText": "Record",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 16
                                            },
                                            "typeParameters": {
                                                "kind": 310,
                                                "typeInstantiations": {
                                                    "kind": 309,
                                                    "types": [
                                                        {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234347,
                                                                "flags": 2097216,
                                                                "transformFlags": 0,
                                                                "start": 17,
                                                                "end": 23
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 23
                                                        },
                                                        {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234252,
                                                                "flags": 2097216,
                                                                "transformFlags": 0,
                                                                "start": 24,
                                                                "end": 28
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 24,
                                                            "end": 28
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 28
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 512,
                                                "start": 16,
                                                "end": 29
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 29
                                        },
                                        {
                                            "kind": 138477575,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 36
                                        }
                                    ],
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 36
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 37
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 39
                        },
                        {
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
                                        "text": "length",
                                        "rawText": "length",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 50
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134217968,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 51,
                                            "end": 53
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 54
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 56
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 56
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 56
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "type x = (Record<string, any> | null)[] & { length: 2; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

type x = (Record<string , any > | null )[] & { length: 2 }
```

### Diagnostics

```javascript
✔ No errors
```

