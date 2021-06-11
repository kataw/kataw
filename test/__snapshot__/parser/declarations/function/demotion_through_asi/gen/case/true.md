# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/declarations/function/demotion_through_asi/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/demotion_through_asi/gen/case
> :: test: case
> :: case: true
## Options

`````js
{}
`````
## Input

`````js
function f(){
  "use strict"
  true
}
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "\"use strict\"",
                                    "flags": 97,
                                    "start": 13,
                                    "end": 28
                                },
                                "operatorToken": {
                                    "kind": 24752947,
                                    "flags": 65,
                                    "start": 28,
                                    "end": 35
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 35
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 35
                        }
                    ],
                    "flags": 33,
                    "start": 13,
                    "end": 35
                },
                "flags": 32,
                "start": 12,
                "end": 37
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "function f(){\n  \"use strict\"\n  true\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 28, end: 35
✖ Identifier expected - start: 35, end: 37

```

