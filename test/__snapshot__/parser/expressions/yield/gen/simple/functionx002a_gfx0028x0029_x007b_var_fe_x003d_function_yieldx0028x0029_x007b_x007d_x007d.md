# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { var fe = function yield() { } }
## Input

`````js
function* gf() { var fe = function yield() { } }
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 768,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 12,
                "end": 14
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
                                "flags": 768,
                                "start": 16,
                                "end": 20
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "fe",
                                            "rawText": "fe",
                                            "flags": 768,
                                            "start": 20,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 34
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 768,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 40,
                                                "end": 42
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 44,
                                                    "end": 44
                                                },
                                                "flags": 256,
                                                "start": 42,
                                                "end": 46
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 256,
                                            "start": 25,
                                            "end": 46
                                        },
                                        "flags": 128,
                                        "start": 20,
                                        "end": 46
                                    }
                                ],
                                "flags": 128,
                                "start": 20,
                                "end": 46
                            },
                            "flags": 128,
                            "start": 16,
                            "end": 46
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 16,
                    "end": 46
                },
                "flags": 256,
                "start": 14,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "function* gf() { var fe = function yield() { } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

