# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/import-call/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/import-call/gen/lexical
> :: test: lexical
> :: case: let x = import(x)
## Options

`````js
{}
`````
## Input

`````js
let x = import(x)
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
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 206,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 64,
                                "start": 7,
                                "end": 14
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 15,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 17
            },
            "flags": 33554448,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "let x = import(x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

let x = import(x);

```

### Diagnostics

```javascript
✔ No errors
```

