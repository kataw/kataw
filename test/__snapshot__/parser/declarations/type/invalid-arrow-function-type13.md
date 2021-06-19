# Kataw parser test case

## Input

`````js
type a = ({get y(y)}) => T;
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
                        "start": 21,
                        "end": 24
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
                                            "getKeyword": {
                                                "kind": 16498,
                                                "flags": 96,
                                                "start": 11,
                                                "end": 14
                                            },
                                            "setKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "optionalToken": null,
                                            "value": {
                                                "kind": 148,
                                                "functionTypeParameterList": {
                                                    "kind": 282,
                                                    "parameters": [
                                                        {
                                                            "kind": 284,
                                                            "ellipsisToken": null,
                                                            "name": null,
                                                            "optionalToken": null,
                                                            "types": {
                                                                "kind": 144,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 17,
                                                                    "end": 18
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 17,
                                                                "end": 18
                                                            },
                                                            "flags": 2097152,
                                                            "start": 17,
                                                            "end": 18
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 17,
                                                    "end": 18
                                                },
                                                "returnType": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "name": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "start": 19,
                                                            "end": 19
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 19,
                                                        "end": 19
                                                    },
                                                    "flags": 2097152,
                                                    "start": 19,
                                                    "end": 19
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 20
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 24
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 24,
                            "end": 26
                        },
                        "flags": 2097152,
                        "start": 24,
                        "end": 26
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 26
                },
                "flags": 2097152,
                "start": 8,
                "end": 26
            },
            "flags": 2097152,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "type a = ({get y(y)}) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'get' accessor cannot have parameters. - start: 17, end: 18
✖ Type expected - start: 19, end: 20

```

