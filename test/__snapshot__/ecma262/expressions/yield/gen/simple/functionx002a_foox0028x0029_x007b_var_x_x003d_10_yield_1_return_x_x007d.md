# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/simple
> :: test: simple
> :: case: function* foo() { var x = 10; yield 1; return x; }
## Options

`````js
{}
`````
## Input

`````js
function* foo() { var x = 10; yield 1; return x; }
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 21
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 28
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 21,
                                        "end": 28
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 29
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 35
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 37
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 29,
                                "end": 37
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 29,
                            "end": 38
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 45
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 47
                            },
                            "flags": 80,
                            "transformFlags": 256,
                            "start": 38,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 48
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 15,
                "end": 50
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "function* foo() { var x = 10; yield 1; return x; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
function *foo() {
  var x = 10;
  yield 1;
  return x;
}
```

### Diagnostics

```javascript
✔ No errors
```

