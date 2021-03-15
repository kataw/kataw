# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
'use strict'; function* gf() { class C { *yield() { } } }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; function* gf() { class C { *yield() { } } }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
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
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gf",
                "rawText": "gf",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 23,
                "end": 26
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 27,
                "end": 28
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
                                "start": 36,
                                "end": 38
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
                                            "kind": 17320034,
                                            "name": {
                                                "kind": 196711,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 47
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 49
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
                                                    "start": 51,
                                                    "end": 51
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 53
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 47,
                                            "end": 53
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 40,
                                        "end": 53
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 40,
                                "end": 55
                            },
                            "decorators": null,
                            "isAbstract": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 30,
                            "end": 55
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 55
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 28,
                "end": 57
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 384,
            "start": 13,
            "end": 57
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

