# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/for_loop
> :: test: for loop
> :: case: let [x] = y
## Options

`````js
{}
`````
## Input

`````js
for (;;) let [x] = y
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 12
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 32,
                        "transformFlags": 4,
                        "start": 8,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 8,
                    "end": 20
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 8,
                "end": 20
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for (;;) let [x] = y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `let 
 [` is a restricted production at the start of a statement - start: 8, end: 14

```

