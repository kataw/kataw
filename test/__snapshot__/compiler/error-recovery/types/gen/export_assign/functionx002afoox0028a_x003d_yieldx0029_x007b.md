# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\export_assign
> :: test: export assign
> :: case: function*foo(a = yield) {
## Input

`````js
export function*foo(a = yield) { = function*foo(a = yield) {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export function*foo(a = yield) { = function*foo(a = yield) {",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 788576,
                "name": {
                    "kind": 131102,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 16,
                    "end": 19
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 20,
                                "end": 21
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": {
                                "kind": 196712,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 29
                            },
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 20,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 30
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
                        "start": 32,
                        "end": 32
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 32
                },
                "typeParameters": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 384,
                "start": 6,
                "end": 32
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        },
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 44,
                "end": 47
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 48,
                            "end": 49
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 57
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 48,
                        "end": 57
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 48,
                "end": 58
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
                    "start": 60,
                    "end": 60
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 60
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 384,
            "start": 34,
            "end": 60
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 59,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

