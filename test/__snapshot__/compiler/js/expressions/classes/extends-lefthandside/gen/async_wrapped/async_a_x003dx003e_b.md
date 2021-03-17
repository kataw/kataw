# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/gen/async_wrapped
> :: test: async wrapped
> :: case: async a => b
## Input

`````js
async function p(){
  class C extends async a => b {}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async function p(){\n  class C extends async a => b {}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 1312785,
            "name": {
                "kind": 131102,
                "text": "p",
                "rawText": "p",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 18
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 48,
                            "name": {
                                "kind": 131102,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 52,
                                "expression": {
                                    "kind": 196712,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 43
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 43
                            },
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 19,
                                "end": 19
                            },
                            "decorators": null,
                            "isAbstract": false,
                            "flags": 32769,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 19,
                            "end": 43
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 83976,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 4325406,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 45
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 50
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 50
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 50
                        },
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 52
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 53
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 53
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 55
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 44,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 51,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

