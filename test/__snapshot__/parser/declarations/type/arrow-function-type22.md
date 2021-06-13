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
                    "start": 28,
                    "end": 31
                },
                "arrowToken": {
                    "kind": 292,
                    "parameters": [
                        {
                            "kind": 311,
                            "objectType": {
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
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 14
                                        },
                                        "optionalToken": null,
                                        "value": {
                                            "kind": 148,
                                            "functionTypeParameterList": {
                                                "kind": 282,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 15,
                                                "end": 15
                                            },
                                            "returnType": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 17,
                                                "end": 23
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 14,
                                            "end": 23
                                        },
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 10,
                                "end": 24
                            },
                            "indexType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 25,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 31
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 31,
                        "end": 33
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 31,
                    "end": 33
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 33
            },
            "flags": 2097152,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "type a = ({key():string}[x]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

