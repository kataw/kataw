# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/simple
> :: test: simple
> :: case: function* gf() { yield++; }
## Options

`````js
{}
`````
## Input

`````js
function* gf() { yield++; }
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
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
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
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 128,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "transformFlags": 16384,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 16,
                                "end": 24
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 16,
                            "end": 25
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 27
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function* gf() { yield++; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 24, end: 25
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 24, end: 25

```

