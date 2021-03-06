# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\async_wrapped
> :: test: async wrapped
> :: case: eval
## Input

`````js
async function p(){
  class C extends eval {}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async function p(){\n  class C extends eval {}\n}",
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
                                        "text": "eval",
                                        "rawText": "eval",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 42
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 42
                                },
                                "implementClauses": null,
                                "members": {
                                    "kind": 50,
                                    "elements": [],
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 44,
                                    "end": 45
                                },
                                "decorators": null,
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 19,
                                "end": 45
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 45
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 47
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 260,
                "start": 0,
                "end": 47
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 47
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

