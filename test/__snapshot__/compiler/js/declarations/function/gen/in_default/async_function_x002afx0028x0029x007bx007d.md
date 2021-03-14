# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/declarations/function/gen/in_default
> :: test: in default
> :: case: async function *f(){}
## Input

`````js
switch (x) {
  default:
    async function *f(){}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch (x) {\n  default:\n    async function *f(){}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 65,
                        "statements": [
                            {
                                "kind": 1837075,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 44,
                                    "end": 45
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 47
                                },
                                "type": null,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 48,
                                        "end": 48
                                    },
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 264,
                                "start": 23,
                                "end": 49
                            }
                        ],
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 49
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 51
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

