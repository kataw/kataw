# Kataw parser test case

## Input

`````js
var y : {} = function (x: number): string { return "hi"; };
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 7,
                                "end": 10
                            },
                            "flags": 2097152,
                            "start": 5,
                            "end": 10
                        },
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 12,
                                "end": 21
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
                                            "start": 23,
                                            "end": 24
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 25,
                                                "end": 32
                                            },
                                            "flags": 2097152,
                                            "start": 24,
                                            "end": 32
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 23,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 21,
                                "end": 33
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
                                                "start": 43,
                                                "end": 50
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "hi",
                                                "rawText": "\"hi\"",
                                                "flags": 96,
                                                "start": 50,
                                                "end": 55
                                            },
                                            "flags": 80,
                                            "start": 43,
                                            "end": 56
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 43,
                                    "end": 56
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 58
                            },
                            "typeParameters": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 34,
                                    "end": 41
                                },
                                "flags": 2097152,
                                "start": 33,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 58
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 58
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "var y : {} = function (x: number): string { return \"hi\"; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

var y = function (x) {
  return  "\"hi\"";
};
```

### Diagnostics

```javascript
✔ No errors
```

