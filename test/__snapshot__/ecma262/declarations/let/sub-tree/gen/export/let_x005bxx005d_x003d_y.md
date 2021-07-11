# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/export
> :: test: export
> :: case: let [x] = y
## Options

`````js
{}
`````
## Input

`````js
export let [x] = y
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
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 12,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 14
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 10,
                            "end": 18
                        }
                    ],
                    "flags": 16,
                    "start": 10,
                    "end": 18
                },
                "flags": 33554448,
                "start": 6,
                "end": 18
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "export let [x] = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6

```

