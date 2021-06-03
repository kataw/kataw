# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/misc/destructuring/failing-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\failing-cases\gen\lexical
> :: test: lexical
> :: case: { x: import.meta }
## Input

`````js
let { x: import.meta }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
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
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "value": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 8,
                                            "end": 8
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 8
            },
            "flags": 33554448,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 207,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 80,
                    "start": 8,
                    "end": 15
                },
                "metaIdentifier": {
                    "kind": 16595,
                    "flags": 64,
                    "start": 16,
                    "end": 20
                },
                "flags": 15,
                "start": 96,
                "end": 20
            },
            "flags": 16,
            "start": 15,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "let { x: import.meta }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Object property expected - start: 8, end: 15
✖ ',' expected - start: 8, end: 15
✖ Missing initializer in destructuring declaration - start: 8, end: 15
✖ Lexical declaration expected - start: 8, end: 15
✖ Cannot use 'import.meta' outside a module - start: 20, end: 22
✖ Declaration or statement expected - start: 20, end: 22

```

