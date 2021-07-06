# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/block
> :: test: block
> :: case: let
>          {}
## Options

`````js
{}
`````
## Input

`````js
{ let
{} }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 5
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 7
                                        },
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "transformFlags": 128,
                                    "start": 5,
                                    "end": 8
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 8
                        },
                        "flags": 33554448,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "{ let\n{} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 8, end: 10

```

