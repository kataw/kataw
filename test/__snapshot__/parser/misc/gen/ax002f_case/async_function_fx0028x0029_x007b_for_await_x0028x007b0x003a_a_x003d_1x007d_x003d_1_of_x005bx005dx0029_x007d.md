# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: a/ case
> :: case: async function f() { for await ({0: a = 1} = 1 of []) ; }
## Input

`````js
async function f() { for await ({0: a = 1} = 1 of []) ; }
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
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 0,
                                "start": 46,
                                "end": 49
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "start": 33,
                                                    "end": 34
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 35,
                                                        "end": 37
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 37,
                                                        "end": 39
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 39,
                                                        "end": 41
                                                    },
                                                    "flags": 32,
                                                    "start": 33,
                                                    "end": 41
                                                },
                                                "flags": 32,
                                                "start": 33,
                                                "end": 41
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 33,
                                        "end": 41
                                    },
                                    "flags": 48,
                                    "start": 32,
                                    "end": 42
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 42,
                                    "end": 44
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 46
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 46
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 51,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 49,
                                "end": 52
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 53,
                                "end": 55
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 64,
                                "start": 24,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 55
                },
                "flags": 32,
                "start": 18,
                "end": 57
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "async function f() { for await ({0: a = 1} = 1 of []) ; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

async function f() {
  for await ({ 0: a = 1 } = 1 of []);
}
```

### Diagnostics

```javascript
✔ No errors
```

