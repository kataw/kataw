# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/demotion_through_asi/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\demotion_through_asi\gen\case
> :: test: case
> :: case: .foo
## Input

`````js
function f(){
  "use strict"
  .foo
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
                                "kind": 129,
                                "member": {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "\"use strict\"",
                                    "flags": 97,
                                    "start": 13,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 35
                                },
                                "flags": 536870944,
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
    "source": "function f(){\n  \"use strict\"\n  .foo\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

function f() {
  "\"use strict\"".foo;
}
```

### Diagnostics

```javascript
✔ No errors
```

