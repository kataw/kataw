# Kataw parser test case

## Input

`````js
type a = (|x) => T;
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
                                "bitwiseOrToken": {
                                    "kind": 134251592,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 11
                                },
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 13
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 16
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
                                "start": 16,
                                "end": 18
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 18
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 18
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "type a = (|x) => T;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
type a = (| x) => T
```

### Diagnostics

```javascript
✔ No errors
```

