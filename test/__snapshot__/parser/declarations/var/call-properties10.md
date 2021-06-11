# Kataw parser test case

## Input

`````js
var g: { (x: string): void } = function(x: mixed) { }
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
                            "text": "g",
                            "rawText": "g",
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
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 12,
                                                        "end": 19
                                                    },
                                                    "flags": 0,
                                                    "start": 10,
                                                    "end": 19
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 19
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 138477615,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 26
                                        },
                                        "flags": 0,
                                        "start": 8,
                                        "end": 26
                                    }
                                ],
                                "flags": 0,
                                "start": 6,
                                "end": 28
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 28
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 30,
                                "end": 39
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "mixed",
                                                    "rawText": "mixed",
                                                    "flags": 96,
                                                    "start": 42,
                                                    "end": 48
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 42,
                                                "end": 48
                                            },
                                            "flags": 0,
                                            "start": 41,
                                            "end": 48
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 40,
                                        "end": 48
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 39,
                                "end": 49
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 51,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 49,
                                "end": 53
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 30,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 53
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "var g: { (x: string): void } = function(x: mixed) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

var g = function (x) {};
```

### Diagnostics

```javascript
✔ No errors
```

