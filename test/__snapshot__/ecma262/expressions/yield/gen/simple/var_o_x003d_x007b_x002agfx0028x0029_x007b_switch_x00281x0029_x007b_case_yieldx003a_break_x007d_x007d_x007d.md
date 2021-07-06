# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/simple
> :: test: simple
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Options

`````js
{}
`````
## Input

`````js
var o = { *gf() { switch (1) { case yield: break; } } }
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
                "transformFlags": 0,
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
                            "text": "o",
                            "rawText": "o",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "gf",
                                                "rawText": "gf",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "returnType": null,
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
                                                                "transformFlags": 0,
                                                                "start": 17,
                                                                "end": 24
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 26,
                                                                "end": 27
                                                            },
                                                            "caseBlock": {
                                                                "kind": 152,
                                                                "clauses": [
                                                                    {
                                                                        "kind": 175,
                                                                        "caseKeyword": {
                                                                            "kind": 4194382,
                                                                            "flags": 80,
                                                                            "transformFlags": 0,
                                                                            "start": 30,
                                                                            "end": 35
                                                                        },
                                                                        "expression": {
                                                                            "kind": 229,
                                                                            "yieldKeyword": {
                                                                                "kind": 8454253,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 35,
                                                                                "end": 41
                                                                            },
                                                                            "delegate": false,
                                                                            "asteriskToken": null,
                                                                            "expression": null,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 35,
                                                                            "end": 41
                                                                        },
                                                                        "colonToken": {
                                                                            "kind": 21,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 41,
                                                                            "end": 42
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 150,
                                                                                "breakKeyword": {
                                                                                    "kind": 37757005,
                                                                                    "flags": 80,
                                                                                    "transformFlags": 0,
                                                                                    "start": 42,
                                                                                    "end": 48
                                                                                },
                                                                                "label": null,
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 42,
                                                                                "end": 49
                                                                            }
                                                                        ],
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 30,
                                                                        "end": 49
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 30,
                                                                "end": 49
                                                            },
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 51
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 53
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 53
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 53
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 53
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 7,
                            "end": 55
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 55
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "var o = { *gf() { switch (1) { case yield: break; } } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

var o = {* gf() {
      switch (1) {
        case yield :
          break ;
      }
    }};
```

### Diagnostics

```javascript
✔ No errors
```

