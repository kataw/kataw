# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: switch (true) { default: function g() {} }
## Input

`````js
{ switch (true) { default: function g() {} } }
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
                        "kind": 160,
                        "switchKeyword": {
                            "kind": 37757024,
                            "flags": 80,
                            "start": 1,
                            "end": 8
                        },
                        "expression": {
                            "kind": 24752947,
                            "flags": 96,
                            "start": 10,
                            "end": 14
                        },
                        "caseBlock": {
                            "kind": 152,
                            "clauses": [
                                {
                                    "kind": 170,
                                    "defaultKeyword": {
                                        "kind": 4194387,
                                        "flags": 80,
                                        "start": 17,
                                        "end": 25
                                    },
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 26,
                                                "end": 35
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 37,
                                                "end": 39
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 41,
                                                    "end": 41
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 42
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 26,
                                            "end": 42
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 17,
                                    "end": 42
                                }
                            ],
                            "flags": 16,
                            "start": 15,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "{ switch (true) { default: function g() {} } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

{
  switch(true) {
    default
      function g() {}
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

