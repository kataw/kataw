# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\async_wrapped
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
    "kind": 196,
    "source": "async function p(){\n  class C extends async a => b {}\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 1312785,
                "name": {
                    "kind": 131102,
                    "text": "p",
                    "rawText": "p",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 14,
                    "end": 16
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
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
                                    "intersects": false,
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
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 43
                                },
                                "implementClauses": null,
                                "members": {
                                    "kind": 50,
                                    "elements": [],
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 19,
                                    "end": 19
                                },
                                "decorators": null,
                                "isAbstract": false,
                                "flags": 16386,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 19,
                                "end": 43
                            },
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 67592,
                                    "typeParameters": null,
                                    "arrowParameters": {
                                        "kind": 65545,
                                        "elements": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 4325406,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 2,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 45
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
                                                "start": 45,
                                                "end": 45
                                            }
                                        ],
                                        "type": null,
                                        "accessModifier": null,
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "contents": {
                                        "kind": 196712,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 48,
                                        "end": 50
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 50
                                },
                                "flags": 0,
                                "intersects": false,
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
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 52
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 53
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 53
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 55
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 260,
                "start": 0,
                "end": 55
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 55
    },
    "jsx": false,
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
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

