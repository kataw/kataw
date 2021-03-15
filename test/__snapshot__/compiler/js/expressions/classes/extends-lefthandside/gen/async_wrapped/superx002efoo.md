# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/gen/async_wrapped
> :: test: async wrapped
> :: case: super.foo
## Input

`````js
async function p(){
  class C extends super.foo {}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async function p(){\n  class C extends super.foo {}\n}",
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
                                    "kind": 67175096,
                                    "member": {
                                        "kind": 4260561,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 47
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 47,
                                    "period": {
                                        "kind": 255,
                                        "pos": 43,
                                        "end": 44
                                    }
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 47
                            },
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 49,
                                "end": 50
                            },
                            "decorators": null,
                            "isAbstract": false,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 19,
                            "end": 50
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 50
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 52
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 260,
            "start": 0,
            "end": 52
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
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

