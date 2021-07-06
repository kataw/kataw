# Kataw parser test case

## Input

`````js
type Fn1 = <T>(T) => T;
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
                "text": "Fn1",
                "rawText": "Fn1",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
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
                        "transformFlags": 0,
                        "start": 10,
                        "end": 14
                    },
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": null,
                                "optionalToken": null,
                                "types": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 16
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 16
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 20
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
                                "start": 20,
                                "end": 22
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 22
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 10,
                "end": 22
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "type Fn1 = <T>(T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

type Fn1 = <T>(T) =>  T
```

### Diagnostics

```javascript
✔ No errors
```

