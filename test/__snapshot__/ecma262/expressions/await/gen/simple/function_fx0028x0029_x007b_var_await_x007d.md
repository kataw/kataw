# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/simple
> :: test: simple
> :: case: function f() { var await; }
## Options

`````js
{}
`````
## Input

`````js
function f() { var await; }
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 10
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
                                            "flags": 96,
                                            "start": 18,
                                            "end": 24
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 18,
                                        "end": 24
                                    }
                                ],
                                "flags": 16,
                                "start": 18,
                                "end": 24
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 25
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 25
                },
                "flags": 32,
                "start": 12,
                "end": 27
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function f() { var await; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

function f() {
  var await;
}
```

### Diagnostics

```javascript
✔ No errors
```

