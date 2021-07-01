# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/trailing-commas-in-parameters/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/trailing-commas-in-parameters/gen/in_function_body
> :: test: in function body
> :: case: function* a(b,c,d,) {}
## Options

`````js
{}
`````
## Input

`````js
function foo() {function* a(b,c,d,) {}}
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
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 16,
                                "end": 24
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 24,
                                "end": 25
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 25,
                                "end": 27
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 29
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 31
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 32,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "start": 28,
                                "end": 34
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 38
                            },
                            "returnType": null,
                            "flags": 272,
                            "start": 16,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "start": 16,
                    "end": 38
                },
                "flags": 32,
                "start": 14,
                "end": 39
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "function foo() {function* a(b,c,d,) {}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

function foo() {
  function * a(b, c, d,) {}
}

```

### Diagnostics

```javascript
✔ No errors
```

