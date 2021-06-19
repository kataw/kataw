# Kataw parser test case

## Input

`````js
let x: Array<() => void>;
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "name": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 12
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
                                                    "kind": 288,
                                                    "arrowTypeParameterList": {
                                                        "kind": 292,
                                                        "parameters": [],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 14,
                                                        "end": 14
                                                    },
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 15,
                                                        "end": 18
                                                    },
                                                    "returnType": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 138477615,
                                                            "flags": 2097216,
                                                            "start": 18,
                                                            "end": 23
                                                        },
                                                        "flags": 2097152,
                                                        "start": 18,
                                                        "end": 23
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 13,
                                                    "end": 23
                                                },
                                                "flags": 2097152,
                                                "start": 13,
                                                "end": 23
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 23
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 24
                                },
                                "flags": 2097152,
                                "start": 6,
                                "end": 24
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 24
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 24
            },
            "flags": 33554448,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "let x: Array<() => void>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

let x: ;
```

### Diagnostics

```javascript
✔ No errors
```

