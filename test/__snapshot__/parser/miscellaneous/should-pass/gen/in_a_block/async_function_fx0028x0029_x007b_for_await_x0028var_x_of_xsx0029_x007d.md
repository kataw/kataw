# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: async function f() { for await (var x of xs); }
## Input

`````js
{ async function f() { for await (var x of xs); } }
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
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 1,
                            "end": 7
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 7,
                            "end": 16
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 18,
                            "end": 20
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 167,
                                        "forKeyword": {
                                            "kind": 37757017,
                                            "flags": 80,
                                            "start": 22,
                                            "end": 26
                                        },
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "start": 26,
                                            "end": 32
                                        },
                                        "initializer": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 37,
                                                        "end": 39
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 37,
                                                    "end": 39
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 37,
                                            "end": 39
                                        },
                                        "ofKeyword": {
                                            "kind": 16793717,
                                            "flags": 64,
                                            "start": 39,
                                            "end": 42
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "xs",
                                            "rawText": "xs",
                                            "flags": 96,
                                            "start": 42,
                                            "end": 45
                                        },
                                        "statement": {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 46,
                                            "end": 47
                                        },
                                        "flags": 16,
                                        "start": 22,
                                        "end": 47
                                    }
                                ],
                                "flags": 32,
                                "start": 22,
                                "end": 47
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 49
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 144,
                        "start": 1,
                        "end": 49
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "{ async function f() { for await (var x of xs); } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

{
  async function f() {
    for await ( of xs);
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

