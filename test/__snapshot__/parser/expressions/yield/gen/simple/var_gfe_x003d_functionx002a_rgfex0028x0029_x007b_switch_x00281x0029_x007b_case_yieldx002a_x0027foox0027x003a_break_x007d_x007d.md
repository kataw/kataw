# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/simple
> :: test: simple
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Options

`````js
{}
`````
## Input

`````js
var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "gfe",
                            "rawText": "gfe",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 9,
                                "end": 18
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 18,
                                "end": 19
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "rgfe",
                                "rawText": "rgfe",
                                "flags": 96,
                                "start": 19,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 24,
                                "end": 26
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 160,
                                            "switchKeyword": {
                                                "kind": 37757024,
                                                "flags": 80,
                                                "start": 28,
                                                "end": 35
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 37,
                                                "end": 38
                                            },
                                            "caseBlock": {
                                                "kind": 152,
                                                "clauses": [
                                                    {
                                                        "kind": 175,
                                                        "caseKeyword": {
                                                            "kind": 4194382,
                                                            "flags": 80,
                                                            "start": 41,
                                                            "end": 46
                                                        },
                                                        "expression": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 64,
                                                                "start": 46,
                                                                "end": 52
                                                            },
                                                            "delegate": true,
                                                            "asteriskToken": {
                                                                "kind": 67143222,
                                                                "flags": 64,
                                                                "start": 52,
                                                                "end": 53
                                                            },
                                                            "expression": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "'foo'",
                                                                "flags": 4194400,
                                                                "start": 53,
                                                                "end": 59
                                                            },
                                                            "flags": 32,
                                                            "start": 46,
                                                            "end": 59
                                                        },
                                                        "statements": [
                                                            {
                                                                "kind": 150,
                                                                "breakKeyword": {
                                                                    "kind": 37757005,
                                                                    "flags": 80,
                                                                    "start": 60,
                                                                    "end": 66
                                                                },
                                                                "label": null,
                                                                "flags": 16,
                                                                "start": 60,
                                                                "end": 67
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 41,
                                                        "end": 67
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 39,
                                                "end": 69
                                            },
                                            "flags": 80,
                                            "start": 28,
                                            "end": 69
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 28,
                                    "end": 69
                                },
                                "flags": 32,
                                "start": 26,
                                "end": 71
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 288,
                            "start": 9,
                            "end": 71
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 71
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 71
            },
            "flags": 16,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

var gfe = function * rgfe() {
  switch(1) {
    case yield * "'foo'":
      break;
  }
};
```

### Diagnostics

```javascript
✔ No errors
```

