# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_bare
> :: test: should listen to use strict directive in function bare
> :: case: var
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  var = x
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
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
                            "transformFlags": 0,
                            "start": 14,
                            "end": 29
                        }
                    ],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 36
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 36
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 36
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 36
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 36
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 38,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 38,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  var = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '=' is not allowed here. Did you mean ';'? - start: 36, end: 38
✖ Declaration or statement expected - start: 40, end: 42

```

