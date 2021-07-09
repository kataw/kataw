# Kataw parser test case

## Input

`````js
type a = (&1,|2&3, ) => T;
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
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": {
                                        "kind": 134252103,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "type": {
                                        "kind": 134217968,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            },
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": null,
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": {
                                        "kind": 134251592,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138,
                                        "types": [
                                            {
                                                "kind": 134217968,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 15
                                            },
                                            {
                                                "kind": 134217968,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 17
                                            }
                                        ],
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 17
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 17
                            }
                        ],
                        "trailingComma": true,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 18
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 23
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
                                "start": 23,
                                "end": 25
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 25
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 25
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "type a = (&1,|2&3, ) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
type a = (& 1, | 2 & 3) => T
```

### Diagnostics

```javascript
✔ No errors
```

