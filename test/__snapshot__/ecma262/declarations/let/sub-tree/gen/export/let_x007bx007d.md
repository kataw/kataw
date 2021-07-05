# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/export
> :: test: export
> :: case: let
>          {}
## Options

`````js
{}
`````
## Input

`````js
export let
{}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 80,
                    "start": 6,
                    "end": 10
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
                                    "start": 12,
                                    "end": 12
                                },
                                "flags": 33,
                                "start": 10,
                                "end": 13
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 10,
                            "end": 13
                        }
                    ],
                    "flags": 16,
                    "start": 10,
                    "end": 13
                },
                "flags": 33554448,
                "start": 6,
                "end": 13
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "export let\n{}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6
✖ Missing initializer in destructuring declaration - start: 13, end: 13

```

