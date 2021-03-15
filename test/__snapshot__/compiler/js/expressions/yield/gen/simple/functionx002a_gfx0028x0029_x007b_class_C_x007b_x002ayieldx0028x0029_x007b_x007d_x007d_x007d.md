# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\simple
> :: test: simple
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
function* gf() { class C { *yield() { } } }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function* gf() { class C { *yield() { } } }",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gf",
                "rawText": "gf",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 14
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
                                "start": 22,
                                "end": 24
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
                                                "start": 28,
                                                "end": 33
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 35
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
                                                    "start": 37,
                                                    "end": 37
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 35,
                                                "end": 39
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 33,
                                            "end": 39
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 26,
                                        "end": 39
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 26,
                                "end": 41
                            },
                            "decorators": null,
                            "isAbstract": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 16,
                            "end": 41
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 41
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 43
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 384,
            "start": 0,
            "end": 43
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
    "end": 43
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

