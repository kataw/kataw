# Kataw parser test case

## Input

`````js
type X = {[(x) =>x]: string, (): string};
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
                "text": "X",
                "rawText": "X",
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
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "key": null,
                            "value": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 288,
                                    "typeParameters": null,
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [
                                            {
                                                "kind": 284,
                                                "ellipsisToken": null,
                                                "name": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                "optionalToken": null,
                                                "types": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 14
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 18
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 18
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
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
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 28
                        },
                        {
                            "kind": 196,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "typeParameter": null,
                            "value": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 30
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 39
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 39
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 39
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 40
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 40
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "type X = {[(x) =>x]: string, (): string};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
type X = { [(x) => x]: string, (): string }
```

### Diagnostics

```javascript
✔ No errors
```

