# Kataw parser test case

## Input

`````js
type a = ({x:y} | { [[x]]:string}) => T;
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
                "kind": 288,
                "arrowTypeParameterList": {
                    "kind": 10,
                    "flags": 64,
                    "start": 34,
                    "end": 37
                },
                "arrowToken": {
                    "kind": 292,
                    "parameters": [
                        {
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
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "optionalToken": null,
                                            "value": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 13,
                                                    "end": 14
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 13,
                                                "end": 14
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 14
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 15
                                },
                                {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 248,
                                            "protoKeyword": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "value": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 26,
                                                "end": 32
                                            },
                                            "optionalToken": null,
                                            "staticToken": null,
                                            "flags": 2097152,
                                            "start": 19,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 33
                                }
                            ],
                            "flags": 2097152,
                            "start": 15,
                            "end": 33
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 37
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 37,
                        "end": 39
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 37,
                    "end": 39
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 39
            },
            "flags": 2097152,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "type a = ({x:y} | { [[x]]:string}) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

