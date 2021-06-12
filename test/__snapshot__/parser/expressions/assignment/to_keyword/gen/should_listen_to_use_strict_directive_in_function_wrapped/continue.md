# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\should_listen_to_use_strict_directive_in_function_wrapped
> :: test: should listen to use strict directive in function wrapped
> :: case: continue
## Input

`````js
function f() {
  "use strict";
  (continue = x);
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
                                "kind": 121,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 34
                        },
                        {
                            "kind": 172,
                            "continueKeyword": {
                                "kind": 37757009,
                                "flags": 80,
                                "start": 34,
                                "end": 42
                            },
                            "label": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 42,
                                "end": 42
                            },
                            "flags": 16,
                            "start": 34,
                            "end": 42
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 42
                },
                "flags": 32,
                "start": 12,
                "end": 42
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 44,
                "end": 46
            },
            "flags": 16,
            "start": 44,
            "end": 46
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 47,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (continue = x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 34, end: 42
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 34, end: 42
✖ Identifier expected - start: 42, end: 44
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 34, end: 44
✖ Expected a `;` - start: 46, end: 47
✖ Declaration or statement expected - start: 48, end: 50

```

