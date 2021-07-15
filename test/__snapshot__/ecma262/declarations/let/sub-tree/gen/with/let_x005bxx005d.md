# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/with
> :: test: with
> :: case: let [x]
## Options

`````js
{}
`````
## Input

`````js
with (a) let [x]
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 7
            },
            "statement": {
                "kind": 120,
                "expression": {
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
                    "flags": 536870944,
                    "transformFlags": 4,
                    "start": 8,
                    "end": 16
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 8,
                "end": 16
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "with (a) let [x]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
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

