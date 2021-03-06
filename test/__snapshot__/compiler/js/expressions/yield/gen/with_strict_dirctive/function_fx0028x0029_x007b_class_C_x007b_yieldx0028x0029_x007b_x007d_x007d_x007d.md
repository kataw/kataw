# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function f() { class C { yield() { } } }
## Input

`````js
'use strict'; function f() { class C { yield() { } } }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; function f() { class C { yield() { } } }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "use strict",
                    "rawText": "use strict",
                    "flags": 16777216,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 22,
                    "end": 24
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 26
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
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 34,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "classHeritage": null,
                                "implementClauses": null,
                                "members": {
                                    "kind": 50,
                                    "elements": [
                                        {
                                            "kind": 49,
                                            "isStatic": false,
                                            "isAbstract": false,
                                            "isReadOnly": false,
                                            "isOptional": false,
                                            "method": {
                                                "kind": 16844946,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 46
                                                },
                                                "isSetter": false,
                                                "isGetter": false,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 48,
                                                        "end": 48
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 46,
                                                    "end": 50
                                                },
                                                "decorators": null,
                                                "type": null,
                                                "accessModifier": null,
                                                "typeParameters": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 50
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 38,
                                            "end": 50
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 38,
                                    "end": 52
                                },
                                "decorators": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 28,
                                "end": 52
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 52
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 54
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 13,
                "end": 54
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 54
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

