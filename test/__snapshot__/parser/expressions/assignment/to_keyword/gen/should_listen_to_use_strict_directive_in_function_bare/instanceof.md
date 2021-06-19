# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_bare
> :: test: should listen to use strict directive in function bare
> :: case: instanceof
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  instanceof = x
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 97,
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 30,
                                    "end": 30
                                },
                                "operatorToken": {
                                    "kind": 4229173,
                                    "flags": 97,
                                    "start": 30,
                                    "end": 43
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 43,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 43
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 43
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 43
                },
                "flags": 32,
                "start": 12,
                "end": 43
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 45,
                "end": 47
            },
            "flags": 16,
            "start": 45,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  instanceof = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 30, end: 43
✖ Identifier expected - start: 43, end: 45
✖ Declaration or statement expected - start: 47, end: 49

```

