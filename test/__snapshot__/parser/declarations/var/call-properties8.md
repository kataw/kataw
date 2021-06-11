# Kataw parser test case

## Input

`````js
var e: { (x: any): void } = function() { } // arity
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
                            "text": "e",
                            "rawText": "e",
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
                                            "functionTypeParameterList": [
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
                                                        "kind": 134234252,
                                                        "flags": 64,
                                                        "start": 12,
                                                        "end": 16
                                                    },
                                                    "flags": 0,
                                                    "start": 10,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 16
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 138477615,
                                            "flags": 64,
                                            "start": 18,
                                            "end": 23
                                        },
                                        "flags": 0,
                                        "start": 8,
                                        "end": 23
                                    }
                                ],
                                "flags": 0,
                                "start": 6,
                                "end": 25
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 25
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 27,
                                "end": 36
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 36,
                                "end": 38
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 40,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 42
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 27,
                            "end": 42
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 42
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "var e: { (x: any): void } = function() { } // arity",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

var e = function () {}; // arity
```

### Diagnostics

```javascript
✔ No errors
```

