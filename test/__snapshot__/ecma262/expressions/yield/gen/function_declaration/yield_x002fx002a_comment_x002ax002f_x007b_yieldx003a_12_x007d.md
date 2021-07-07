# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: yield /* comment */ { yield: 12 }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { yield /* comment */ { yield: 12 } }}
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
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 20,
                            "end": 26
                        },
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 163,
                                        "label": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 48
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 49
                                        },
                                        "statement": {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 12,
                                                "rawText": "12",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 52
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 49,
                                            "end": 52
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 52
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 52
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 54
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 54
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 56
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "function not_gen() { yield /* comment */ { yield: 12 } }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 26, end: 42
✖ Declaration or statement expected - start: 56, end: 57

```

