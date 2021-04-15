# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function f() { var await; }
## Input

`````js
function f() { var await; }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 10,
                "end": 12
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
                                "start": 14,
                                "end": 18
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 768,
                                            "start": 18,
                                            "end": 24
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 128,
                                        "start": 18,
                                        "end": 24
                                    }
                                ],
                                "flags": 128,
                                "start": 18,
                                "end": 24
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 25
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 14,
                    "end": 25
                },
                "flags": 256,
                "start": 12,
                "end": 27
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "function f() { var await; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

