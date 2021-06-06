# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_wrapped
> :: test: should listen to use strict directive in function wrapped
> :: case: const
## Input

`````js
function f() {
  "use strict";
  (const = x);
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
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 80,
                                "start": 34,
                                "end": 39
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [],
                                "flags": 16777232,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 33554448,
                            "start": 34,
                            "end": 39
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 39
                },
                "flags": 32,
                "start": 12,
                "end": 39
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 41,
                "end": 43
            },
            "flags": 16,
            "start": 41,
            "end": 43
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 44,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  (const = x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 34, end: 39
✖ Expected a `;` - start: 39, end: 41
✖ Expected a `;` - start: 43, end: 44
✖ Declaration or statement expected - start: 45, end: 47

```

