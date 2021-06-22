# Kataw parser test case

## Input

`````js
type a = ({x: (y)}) => T;
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
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 19,
                        "end": 22
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "protoKeyword": null,
                                            "staticToken": null,
                                            "getKeyword": null,
                                            "setKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 290,
                                                    "type": {
                                                        "kind": 144,
                                                        "typeName": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 15,
                                                            "end": 16
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 13,
                                                        "end": 16
                                                    },
                                                    "flags": 2097152,
                                                    "start": 13,
                                                    "end": 17
                                                },
                                                "flags": 2097152,
                                                "start": 13,
                                                "end": 17
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 22
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
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 22,
                            "end": 24
                        },
                        "flags": 2097152,
                        "start": 22,
                        "end": 24
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 24
                },
                "flags": 2097152,
                "start": 8,
                "end": 24
            },
            "flags": 2097152,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "type a = ({x: (y)}) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

