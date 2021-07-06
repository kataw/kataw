# Kataw parser test case

## Input

`````js
var a: { id<T>(x: T): T; }
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
                                            "text": "id",
                                            "rawText": "id",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 148,
                                            "functionTypeParameterList": {
                                                "kind": 282,
                                                "parameters": [
                                                    {
                                                        "kind": 149,
                                                        "ellipsisToken": null,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 15,
                                                            "end": 16
                                                        },
                                                        "optionalToken": null,
                                                        "types": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 144,
                                                                "typeName": {
                                                                    "kind": 134299649,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 17,
                                                                    "end": 19
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 17,
                                                                "end": 19
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 19
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 15,
                                                        "end": 19
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 19
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 23
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 23
                                            },
                                            "typeParameters": {
                                                "kind": 307,
                                                "declarations": {
                                                    "kind": 337,
                                                    "parameters": [
                                                        {
                                                            "kind": 146,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 12,
                                                                "end": 13
                                                            },
                                                            "type": null,
                                                            "assignToken": null,
                                                            "defaultType": null,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 13
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 512,
                                                "start": 11,
                                                "end": 14
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 23
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 26
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 26
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "var a: { id<T>(x: T): T; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

var a: { id<T> (x: T): T };
```

### Diagnostics

```javascript
✔ No errors
```

