# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_wrapped
> :: test: should listen to use strict directive in function wrapped
> :: case: finally
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  (finally = x);
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
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 16,
                                "start": 34,
                                "end": 34
                            },
                            "catchClause": null,
                            "finallyKeyword": {
                                "kind": 37757016,
                                "flags": 64,
                                "start": 34,
                                "end": 41
                            },
                            "finallyBlock": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 41,
                                    "end": 41
                                },
                                "flags": 16,
                                "start": 41,
                                "end": 41
                            },
                            "flags": 16,
                            "start": 34,
                            "end": 41
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 41
                },
                "flags": 32,
                "start": 12,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 43,
                "end": 45
            },
            "flags": 16,
            "start": 43,
            "end": 45
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 46,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (finally = x);\n}",
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
✖ Identifier expected - start: 34, end: 41
✖ 'try' expected - start: 34, end: 41
✖ The parser expected to find a '}' to match the '{' token here - start: 41, end: 43
✖ Expected a `;` - start: 45, end: 46
✖ Declaration or statement expected - start: 47, end: 49

```

