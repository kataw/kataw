# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/array-literal/keywords_should_not_parse_as_regular_idents_in_awkward_places/gen/in_arrow_head
> :: test: in arrow head
> :: case: class{}
## Options

`````js
{}
`````
## Input

`````js
([ class{} ]) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 8
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "tail": {
                                            "kind": 277,
                                            "classHeritage": null,
                                            "body": {
                                                "kind": 303,
                                                "elements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 9
                                            },
                                            "flags": 8,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 10
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 13
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 16
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 19
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "([ class{} ]) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 13, end: 16

```

