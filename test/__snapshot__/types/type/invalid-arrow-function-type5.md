# Kataw parser test case

## Input

`````js
type X = ((x?) => T);
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
                    "kind": 290,
                    "type": {
                        "kind": 144,
                        "typeName": {
                            "kind": 288,
                            "typeParameters": null,
                            "arrowTypeParameterList": {
                                "kind": 292,
                                "parameters": [
                                    {
                                        "kind": 284,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "types": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 13
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
                            "start": 8,
                            "end": 19
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 19
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 20
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 20
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "type X = ((x?) => T);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An optional parameter cannot be used without an ':' in an arrow function type parameter list - start: 13, end: 14

```

