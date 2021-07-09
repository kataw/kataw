# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/trailing-commas-in-parameters-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/trailing-commas-in-parameters-errors/gen/in_function_body
> :: test: in function body
> :: case: function  a(b,,) {}
## Options

`````js
{}
`````
## Input

`````js
function foo() {function  a(b,,) {}}
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 16,
                                "end": 24
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
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
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 30
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 30
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 30
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 30
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 30
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 34,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 32,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function foo() {function  a(b,,) {}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 30, end: 31
✖ Declaration or statement expected - start: 31, end: 32
✖ Declaration or statement expected - start: 35, end: 36

```

