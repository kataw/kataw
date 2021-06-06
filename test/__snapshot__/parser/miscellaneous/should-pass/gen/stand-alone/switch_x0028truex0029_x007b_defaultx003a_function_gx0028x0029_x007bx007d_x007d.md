# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: switch (true) { default: function g() {} }
## Input

`````js
switch (true) { default: function g() {} }
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
                "kind": 24752947,
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 15,
                            "end": 23
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 33
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 35
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 35,
                                    "end": 37
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 39,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 24,
                                "end": 40
                            }
                        ],
                        "flags": 16,
                        "start": 15,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 13,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "switch (true) { default: function g() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

switch(true) {
  default
    function g() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

