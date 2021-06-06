# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: 'use strict'; if (true) { function my_var() {} } my_var;
## Input

`````js
{ 'use strict'; if (true) { function my_var() {} } my_var; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 15
                    },
                    {
                        "kind": 164,
                        "ifKeyword": {
                            "kind": 37757019,
                            "flags": 80,
                            "start": 15,
                            "end": 18
                        },
                        "expression": {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 20,
                            "end": 24
                        },
                        "consequent": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 176,
                                        "declareKeyword": null,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 27,
                                            "end": 36
                                        },
                                        "generatorToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "my_var",
                                            "rawText": "my_var",
                                            "flags": 96,
                                            "start": 36,
                                            "end": 43
                                        },
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 43,
                                            "end": 45
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 47,
                                                "end": 47
                                            },
                                            "flags": 32,
                                            "start": 45,
                                            "end": 48
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 16,
                                        "start": 27,
                                        "end": 48
                                    }
                                ],
                                "flags": 16,
                                "start": 27,
                                "end": 48
                            },
                            "flags": 16,
                            "start": 25,
                            "end": 50
                        },
                        "elseKeyword": null,
                        "alternate": null,
                        "flags": 16,
                        "start": 15,
                        "end": 50
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "my_var",
                            "rawText": "my_var",
                            "flags": 96,
                            "start": 50,
                            "end": 57
                        },
                        "flags": 16,
                        "start": 50,
                        "end": 58
                    }
                ],
                "flags": 4194320,
                "start": 1,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "{ 'use strict'; if (true) { function my_var() {} } my_var; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

{
  "'use strict'";
  if (true) {
      function my_var() {}
    }
  my_var;
}
```

### Diagnostics

```javascript
✔ No errors
```

