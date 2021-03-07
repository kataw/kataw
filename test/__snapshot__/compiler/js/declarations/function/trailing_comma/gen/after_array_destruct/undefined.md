# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/trailing_comma/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\trailing_comma\gen\after_array_destruct
> :: test: after array destruct
> :: case: undefined
## Input
- ``es = undefined`

`````js
function f([x],){}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function f([x],){}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 10
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
                                            "kind": 134217756,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 12,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 12,
                                    "end": 13
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 11,
                                "end": 14
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
                            "start": 11,
                            "end": 14
                        }
                    ],
                    "trailingComma": true,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 16
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 18
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 18
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

