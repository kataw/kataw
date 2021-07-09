# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/demotion_through_asi/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/demotion_through_asi/gen/case
> :: test: case
> :: case: suffix = */ VALUE;
## Options

`````js
{}
`````
## Input

`````js
function f(){
  "use strict"
  suffix = */ VALUE;
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
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "\"use strict\"",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 13,
                            "end": 28
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "suffix",
                                    "rawText": "suffix",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 37
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 39
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "right": {
                                        "kind": 371,
                                        "text": "/ VALUE;",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 49
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 39,
                                    "end": 49
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 28,
                                "end": 49
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 28,
                            "end": 49
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 49
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 51
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "function f(){\n  \"use strict\"\n  suffix = */ VALUE;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 39, end: 41
✖ Unterminated regular expression - start: 41, end: 49

```

