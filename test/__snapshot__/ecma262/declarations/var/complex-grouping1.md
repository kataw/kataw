# Kataw parser test case

## Input

`````js
var a: (number: number) => number = (number) => { return 123; }
`````

## Options

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
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "number",
                                                "rawText": "number",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 14
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 15,
                                                    "end": 22
                                                },
                                                "flags": 2097152,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "flags": 2097152,
                                            "start": 6,
                                            "end": 22
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 6,
                                    "end": 22
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 23,
                                    "end": 26
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 26,
                                        "end": 33
                                    },
                                    "flags": 2097152,
                                    "start": 26,
                                    "end": 33
                                },
                                "flags": 2097152,
                                "start": 6,
                                "end": 33
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 33
                        },
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "number",
                                        "rawText": "number",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 37,
                                "end": 44
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 44,
                                "end": 47
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
                                                "start": 49,
                                                "end": 56
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 96,
                                                "start": 56,
                                                "end": 60
                                            },
                                            "flags": 80,
                                            "start": 49,
                                            "end": 61
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 49,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 47,
                                "end": 63
                            },
                            "flags": 32,
                            "start": 35,
                            "end": 63
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 63
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 63
            },
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "var a: (number: number) => number = (number) => { return 123; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

var a: (number: number) => number = (number) => {
  return 123;
};

```

### Diagnostics

```javascript
✔ No errors
```

