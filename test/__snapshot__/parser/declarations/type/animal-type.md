# Kataw parser test case

## Input

`````js
type Animal =
  | {type: 'insect'}
  | {type: 'fish'}
  | {type: 'chinese'}
  | {type: 'bird'};

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
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "Animal",
                "rawText": "Animal",
                "flags": 96,
                "start": 4,
                "end": 11
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 11,
                "end": 13
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": {
                    "kind": 134251592,
                    "flags": 65,
                    "start": 13,
                    "end": 17
                },
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
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
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 23
                                    },
                                    "optionalToken": null,
                                    "value": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134217967,
                                            "text": "insect",
                                            "flags": 2097216,
                                            "start": 24,
                                            "end": 33
                                        },
                                        "flags": 2097152,
                                        "start": 24,
                                        "end": 33
                                    },
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 33
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 17,
                            "end": 34
                        },
                        {
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
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 44
                                    },
                                    "optionalToken": null,
                                    "value": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134217967,
                                            "text": "fish",
                                            "flags": 2097216,
                                            "start": 45,
                                            "end": 52
                                        },
                                        "flags": 2097152,
                                        "start": 45,
                                        "end": 52
                                    },
                                    "flags": 2097152,
                                    "start": 40,
                                    "end": 52
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 38,
                            "end": 53
                        },
                        {
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
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 96,
                                        "start": 59,
                                        "end": 63
                                    },
                                    "optionalToken": null,
                                    "value": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134217967,
                                            "text": "chinese",
                                            "flags": 2097216,
                                            "start": 64,
                                            "end": 74
                                        },
                                        "flags": 2097152,
                                        "start": 64,
                                        "end": 74
                                    },
                                    "flags": 2097152,
                                    "start": 59,
                                    "end": 74
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 57,
                            "end": 75
                        },
                        {
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
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 96,
                                        "start": 81,
                                        "end": 85
                                    },
                                    "optionalToken": null,
                                    "value": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134217967,
                                            "text": "bird",
                                            "flags": 2097216,
                                            "start": 86,
                                            "end": 93
                                        },
                                        "flags": 2097152,
                                        "start": 86,
                                        "end": 93
                                    },
                                    "flags": 2097152,
                                    "start": 81,
                                    "end": 93
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 79,
                            "end": 94
                        }
                    ],
                    "flags": 2097152,
                    "start": 34,
                    "end": 94
                },
                "flags": 2097152,
                "start": 13,
                "end": 94
            },
            "flags": 2097152,
            "start": 0,
            "end": 95
        }
    ],
    "isModule": false,
    "source": "type Animal =\n  | {type: 'insect'}\n  | {type: 'fish'}\n  | {type: 'chinese'}\n  | {type: 'bird'};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

  
```

### Diagnostics

```javascript
✔ No errors
```

