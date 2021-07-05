# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/function/func_statements/gen/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/function/func_statements/gen/gen/in_case
> :: test: in case
> :: case: async function f(){}
## Options

`````js
{}
`````
## Input

`````js
switch (x) {
  case foo:
    async function f(){}
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
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 81,
                            "start": 12,
                            "end": 19
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 19,
                            "end": 23
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 23,
                            "end": 24
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 65,
                                    "start": 24,
                                    "end": 34
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 34,
                                    "end": 43
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 45
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 46,
                                    "end": 46
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 48,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "start": 47,
                                    "end": 49
                                },
                                "returnType": null,
                                "flags": 144,
                                "start": 24,
                                "end": 49
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 49
                    }
                ],
                "flags": 16,
                "start": 12,
                "end": 49
            },
            "flags": 80,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "switch (x) {\n  case foo:\n    async function f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

switch (x) {
  case foo:
    async function f() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

