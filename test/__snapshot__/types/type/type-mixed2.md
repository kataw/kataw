# Kataw parser test case

## Input

`````js
type X<S, A, C, I, R> = (S, A, C, I) => Promise<R>
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
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
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
                                "text": "S",
                                "rawText": "S",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "I",
                                "rawText": "I",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 17
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "R",
                                "rawText": "R",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 20
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 6,
                "end": 21
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 21,
                "end": 23
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
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "S",
                                                    "rawText": "S",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 26
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 26
                                            },
                                            "optionalToken": null,
                                            "types": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 26
                                        },
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "A",
                                                    "rawText": "A",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 29
                                        },
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 32
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 32
                                        },
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": null,
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "I",
                                                    "rawText": "I",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 35
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 35
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 35
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 36
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 36
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 39
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "Promise",
                                "rawText": "Promise",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 47
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
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "R",
                                                    "rawText": "R",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 49
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 49
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 49
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 49
                                },
                                "flags": 2097152,
                                "transformFlags": 512,
                                "start": 47,
                                "end": 50
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 50
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 50
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 50
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 23,
                "end": 50
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "type X<S, A, C, I, R> = (S, A, C, I) => Promise<R>",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

type X<S, A, C, I, R> = (S,
A,
C,
I) =>  Promise<R>
```

### Diagnostics

```javascript
✔ No errors
```

