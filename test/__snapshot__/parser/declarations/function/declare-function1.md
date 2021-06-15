# Kataw parser test case

## Input

`````js
declare function aw<T>(p: Pr<T> | T): T;

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
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 7,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "aw",
                "rawText": "aw",
                "flags": 96,
                "start": 16,
                "end": 19
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
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 20,
                                "end": 21
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 20,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 20,
                    "end": 21
                },
                "flags": 2097152,
                "start": 19,
                "end": 22
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 96,
                            "start": 23,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Pr",
                                            "rawText": "Pr",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 28
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
                                                            "id": {
                                                                "kind": 134299649,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 96,
                                                                "start": 29,
                                                                "end": 30
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 29,
                                                            "end": 30
                                                        },
                                                        "flags": 2097152,
                                                        "start": 29,
                                                        "end": 30
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 29,
                                                "end": 30
                                            },
                                            "flags": 2097152,
                                            "start": 28,
                                            "end": 31
                                        },
                                        "flags": 2097152,
                                        "start": 25,
                                        "end": 31
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 33,
                                            "end": 35
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 33,
                                        "end": 35
                                    }
                                ],
                                "flags": 2097152,
                                "start": 31,
                                "end": 35
                            },
                            "flags": 2097152,
                            "start": 25,
                            "end": 35
                        },
                        "right": null,
                        "flags": 32,
                        "start": 23,
                        "end": 35
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 22,
                "end": 36
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
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
                "flags": 2097152,
                "start": 37,
                "end": 39
            },
            "flags": 4112,
            "start": 7,
            "end": 39
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 39,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "declare function aw<T>(p: Pr<T> | T): T;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

function  <T >aw(p): ;

```

### Diagnostics

```javascript
✔ No errors
```

