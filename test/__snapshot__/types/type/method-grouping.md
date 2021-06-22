# Kataw parser test case

## Input

`````js
type A = {
  b(): (B)
}
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
                "text": "A",
                "rawText": "A",
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
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 10,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": {
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
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 290,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 96,
                                                "start": 19,
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 17,
                                            "end": 20
                                        },
                                        "flags": 2097152,
                                        "start": 17,
                                        "end": 21
                                    },
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 14,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 23
                },
                "flags": 2097152,
                "start": 8,
                "end": 23
            },
            "flags": 2097152,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "type A = {\n  b(): (B)\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

