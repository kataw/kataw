# Kataw parser test case

## Input

`````js
var z : Object = function (x: number): string { return "hi"; };
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
                            "text": "z",
                            "rawText": "z",
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
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Object",
                                    "rawText": "Object",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 7,
                                "end": 14
                            },
                            "flags": 2097152,
                            "start": 7,
                            "end": 14
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 16,
                                "end": 25
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 29,
                                                "end": 36
                                            },
                                            "flags": 2097152,
                                            "start": 29,
                                            "end": 36
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 27,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 25,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 80,
                                                "start": 47,
                                                "end": 54
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "\"hi\"",
                                                "flags": 96,
                                                "start": 54,
                                                "end": 59
                                            },
                                            "flags": 80,
                                            "start": 47,
                                            "end": 60
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 47,
                                    "end": 60
                                },
                                "flags": 32,
                                "start": 45,
                                "end": 62
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 38,
                                    "end": 45
                                },
                                "flags": 2097152,
                                "start": 38,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 62
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 62
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "var z : Object = function (x: number): string { return \"hi\"; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

 var z Object = function (): string {
return "hi";
}; 
```

### Diagnostics

```javascript
✔ No errors
```

