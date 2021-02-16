# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw_dev\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\generator_wrapped
> :: test: generator wrapped
> :: case: {bar}
## Input

`````js
function *P(){
  class D extends {bar} {}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function *P(){\n  class D extends {bar} {}\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                    "parent": null,
                    "emitNode": null,
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
                    "parent": null,
                    "emitNode": null,
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
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 22,
                                    "end": 24
                                },
                                "typeParameters": null,
                                "classHeritage": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 196712,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 34,
                                                "end": 37
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 34,
                                        "end": 37
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 32,
                                    "end": 38
                                },
                                "implementClauses": null,
                                "members": {
                                    "kind": 50,
                                    "elements": [],
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 40,
                                    "end": 41
                                },
                                "decorators": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 1,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 41
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 14,
                        "end": 41
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 13,
                    "end": 43
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 43
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 43
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

