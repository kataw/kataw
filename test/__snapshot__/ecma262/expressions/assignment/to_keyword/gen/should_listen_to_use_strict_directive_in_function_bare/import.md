# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_function_bare
> :: test: should listen to use strict directive in function bare
> :: case: import
## Options

`````js
{}
`````
## Input

`````js
function f() {
  "use strict";
  import = x
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
                            "kind": 263,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 39
                            },
                            "typeKeyword": null,
                            "typeofKeyword": null,
                            "fromClause": null,
                            "moduleSpecifier": null,
                            "importClause": null,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 39
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 39
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 41,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 41,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "function f() {\n  \"use strict\";\n  import = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `import` keyword can only be used with the module goal - start: 30, end: 41
✖ Declaration or statement expected - start: 39, end: 41
✖ '; ' expected - start: 39, end: 41
✖ Declaration or statement expected - start: 43, end: 45

```

