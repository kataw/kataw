# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_wrapped
> :: test: should listen to use strict directive in function wrapped
> :: case: instanceof
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  (instanceof = x);
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
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 34,
                                            "end": 34
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "flags": 96,
                                            "start": 34,
                                            "end": 44
                                        },
                                        "right": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 44,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "start": 34,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 30,
                                    "end": 44
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 44,
                                    "end": 46
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 46,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 48
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 48
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 48
                },
                "flags": 32,
                "start": 12,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 48
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 49,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (instanceof = x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 34, end: 44
✖ Identifier expected - start: 44, end: 46
✖ Expected a `;` - start: 48, end: 49
✖ Declaration or statement expected - start: 50, end: 52

```

