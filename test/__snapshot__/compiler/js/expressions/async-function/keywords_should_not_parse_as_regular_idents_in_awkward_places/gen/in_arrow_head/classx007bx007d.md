# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/async-function/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\async-function\keywords_should_not_parse_as_regular_idents_in_awkward_places\gen\in_arrow_head
> :: test: in arrow head
> :: case: class{}
## Input

`````js
([ class{} ]) => {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "([ class{} ]) => {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
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
                                    "kind": 33554437,
                                    "elementList": {
                                        "kind": 29,
                                        "elements": [
                                            {
                                                "kind": 82483,
                                                "name": null,
                                                "typeParameters": null,
                                                "classHeritage": null,
                                                "implementClauses": null,
                                                "members": {
                                                    "kind": 50,
                                                    "elements": [],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 9,
                                                    "end": 10
                                                },
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 2,
                                                "end": 10
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 10
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 12
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
                                "start": 0,
                                "end": 13
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 13
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 18
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 19
                    },
                    "flags": 536870912,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 19
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

