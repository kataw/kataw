# Kataw parser test case

## Input

`````js
var a: { id<T>(x: T): T; }
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "id",
                                            "rawText": "id",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "value": {
                                            "kind": 148,
                                            "parameters": {
                                                "kind": 208,
                                                "functionTypeParameterList": [
                                                    {
                                                        "kind": 149,
                                                        "ellipsisToken": null,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 15,
                                                            "end": 16
                                                        },
                                                        "optionalToken": null,
                                                        "typeAnnotation": {
                                                            "kind": 144,
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 96,
                                                                "start": 17,
                                                                "end": 19
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 0,
                                                            "start": 17,
                                                            "end": 19
                                                        },
                                                        "flags": 0,
                                                        "start": 15,
                                                        "end": 19
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 15,
                                                "end": 19
                                            },
                                            "returnType": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 23
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 21,
                                                "end": 23
                                            },
                                            "typeParameters": {
                                                "kind": 265,
                                                "typeParameters": [
                                                    {
                                                        "kind": 146,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 96,
                                                            "start": 12,
                                                            "end": 13
                                                        },
                                                        "type": null,
                                                        "defaultType": null,
                                                        "flags": 0,
                                                        "start": 12,
                                                        "end": 13
                                                    }
                                                ],
                                                "flags": 0,
                                                "start": 11,
                                                "end": 14
                                            },
                                            "flags": 0,
                                            "start": 11,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "staticToken": null,
                                        "flags": 0,
                                        "start": 8,
                                        "end": 23
                                    }
                                ],
                                "indexers": [],
                                "callProperties": [],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 6,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 26
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "var a: { id<T>(x: T): T; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

var a;
```

### Diagnostics

```javascript
✔ No errors
```

