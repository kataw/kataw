# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\generator_wrapped
> :: test: generator wrapped
> :: case: async
>          x => y
## Input

`````js
function *P(){
  class D extends async
x => y {}
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function *P(){\n  class D extends async\nx => y {}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "P",
                "rawText": "P",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 13
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
                                "text": "D",
                                "rawText": "D",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 52,
                                "expression": {
                                    "kind": 196712,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 38
                                },
                                "typeArguments": null,
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 38
                            },
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 32769,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 14,
                                "end": 14
                            },
                            "decorators": null,
                            "isAbstract": false,
                            "flags": 32769,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 14,
                            "end": 38
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 83976,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 81929,
                                    "elements": [
                                        {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 4325406,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 32769,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 40
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 40,
                                            "end": 40
                                        }
                                    ],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 45
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 45
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 45
                        },
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 47
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 48
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 48
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 50
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 384,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 39,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 46,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

