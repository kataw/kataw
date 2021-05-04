# Kataw parser test case

## Input

`````js
async function f(){   function fh([+ await x]) { }   }
`````

## Output

### Hybrid CST

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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 19,
                                "end": 30
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "fh",
                                "rawText": "fh",
                                "flags": 96,
                                "start": 30,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 202,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 35,
                                                "end": 35
                                            },
                                            "flags": 32,
                                            "start": 34,
                                            "end": 35
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 34,
                                        "start": 34,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 33,
                                "end": 36
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 35
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 19,
                            "end": 35
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 35,
                                    "end": 36
                                },
                                "expression": {
                                    "kind": 208,
                                    "awaitToken": {
                                        "kind": 82032,
                                        "flags": 0,
                                        "start": 36,
                                        "end": 42
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 44
                            },
                            "flags": 16,
                            "start": 35,
                            "end": 44
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 44
                },
                "flags": 32,
                "start": 18,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 44
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 48,
                "end": 48
            },
            "flags": 16,
            "start": 46,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "async function f(){   function fh([+ await x]) { }   }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 35, end: 36
✖ ',' expected - start: 35, end: 36
✖ Unexpected token. - start: 35, end: 36
✖ Expected a `;` - start: 44, end: 45
✖ Declaration or statement expected - start: 45, end: 46
✖ Declaration or statement expected - start: 50, end: 54

```

