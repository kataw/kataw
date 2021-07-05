# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/default
> :: test: default
> :: case: let {x} = y
## Options

`````js
{}
`````
## Input

`````js
switch (a) { default: let {x} = y }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 12,
                            "end": 20
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 20,
                            "end": 21
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 21,
                                    "end": 25
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
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 27,
                                                            "end": 28
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "flags": 32,
                                                "start": 25,
                                                "end": 29
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 31,
                                                "end": 33
                                            },
                                            "flags": 16,
                                            "start": 25,
                                            "end": 33
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 25,
                                    "end": 33
                                },
                                "flags": 33554448,
                                "start": 21,
                                "end": 33
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 12,
                "end": 33
            },
            "flags": 80,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "switch (a) { default: let {x} = y }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

switch (a) {
  default
    let {x} = y;
}
```

### Diagnostics

```javascript
✔ No errors
```

