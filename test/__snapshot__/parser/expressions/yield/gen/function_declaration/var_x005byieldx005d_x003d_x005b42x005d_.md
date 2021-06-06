# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: var [yield] = [42];
## Input

`````js
function not_gen() { var [yield] = [42]; }}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
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
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 20,
                                "end": 24
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 202,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 26,
                                                        "end": 31
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 26,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "start": 24,
                                            "end": 32
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 201392130,
                                                        "text": 42,
                                                        "rawText": "42",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 38
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 36,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "start": 34,
                                            "end": 39
                                        },
                                        "flags": 16,
                                        "start": 24,
                                        "end": 39
                                    }
                                ],
                                "flags": 16,
                                "start": 24,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 40
                },
                "flags": 32,
                "start": 18,
                "end": 42
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function not_gen() { var [yield] = [42]; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 42, end: 43

```

