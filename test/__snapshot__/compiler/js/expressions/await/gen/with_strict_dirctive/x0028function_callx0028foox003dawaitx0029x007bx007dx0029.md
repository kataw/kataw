# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: (function call(foo=await){})
## Input

`````js
'use strict'; (function call(foo=await){})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; (function call(foo=await){})",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 8456285,
                    "name": {
                        "kind": 131102,
                        "text": "call",
                        "rawText": "call",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 23,
                        "end": 28
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 29,
                                    "end": 32
                                },
                                "isOptional": false,
                                "type": null,
                                "initializer": {
                                    "kind": 196712,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 38
                                },
                                "decorators": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 29,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 39
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 41
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 41
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 42
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 42
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
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

