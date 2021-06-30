# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/binary/gen/dynamic_property
> :: test: dynamic property
> :: case: a + b instanceof c
## Options

`````js
{}
`````
## Input

`````js
foo[ a + b instanceof c ]
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
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 4,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 96,
                            "start": 10,
                            "end": 21
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 23
                },
                "flags": 536870944,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "foo[ a + b instanceof c ]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

foo[a + b instanceof c];

```

### Diagnostics

```javascript
✔ No errors
```

