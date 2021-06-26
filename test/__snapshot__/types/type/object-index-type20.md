# Kataw parser test case

## Input

`````js
type LinkedList<Type> = Type & { next: LinkedList<Type> };
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
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "LinkedList",
                "rawText": "LinkedList",
                "flags": 96,
                "start": 4,
                "end": 15
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
                                "text": "Type",
                                "rawText": "Type",
                                "flags": 96,
                                "start": 16,
                                "end": 20
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 16,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 16,
                    "end": 20
                },
                "flags": 2097152,
                "start": 15,
                "end": 21
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 21,
                "end": 23
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138,
                    "types": [
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "Type",
                                "rawText": "Type",
                                "flags": 96,
                                "start": 23,
                                "end": 28
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 23,
                            "end": 28
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
                                        "text": "next",
                                        "rawText": "next",
                                        "flags": 96,
                                        "start": 32,
                                        "end": 37
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "LinkedList",
                                                "rawText": "LinkedList",
                                                "flags": 96,
                                                "start": 38,
                                                "end": 49
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
                                                                    "text": "Type",
                                                                    "rawText": "Type",
                                                                    "flags": 96,
                                                                    "start": 50,
                                                                    "end": 54
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 50,
                                                                "end": 54
                                                            },
                                                            "flags": 2097152,
                                                            "start": 50,
                                                            "end": 54
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 50,
                                                    "end": 54
                                                },
                                                "flags": 2097152,
                                                "start": 49,
                                                "end": 55
                                            },
                                            "flags": 2097152,
                                            "start": 38,
                                            "end": 55
                                        },
                                        "flags": 2097152,
                                        "start": 38,
                                        "end": 55
                                    },
                                    "flags": 2097152,
                                    "start": 32,
                                    "end": 55
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 30,
                            "end": 57
                        }
                    ],
                    "flags": 2097152,
                    "start": 28,
                    "end": 57
                },
                "flags": 2097152,
                "start": 23,
                "end": 57
            },
            "flags": 64,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "type LinkedList<Type> = Type & { next: LinkedList<Type> };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

