# Kataw parser test case

## Input

`````js
type a = ({key():string}[x]) => T;
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
                "text": "a",
                "rawText": "a",
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
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 311,
                                    "objectType": {
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
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 14
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 148,
                                                    "functionTypeParameterList": {
                                                        "kind": 282,
                                                        "parameters": [],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 15,
                                                        "end": 15
                                                    },
                                                    "returnType": {
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
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 23
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 23
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 24
                                    },
                                    "indexType": {
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
                                                "start": 25,
                                                "end": 26
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 26
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 28
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 28
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 31
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
                                "start": 31,
                                "end": 33
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 33
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 33
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 33
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 33
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "type a = ({key():string}[x]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

type a = ({ key(): string  }[x]) =>  T
```

### Diagnostics

```javascript
✔ No errors
```

