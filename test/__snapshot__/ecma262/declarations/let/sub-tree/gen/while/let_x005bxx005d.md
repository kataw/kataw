# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/while
> :: test: while
> :: case: let [x]
## Options

`````js
{}
`````
## Input

`````js
while (a) let [x];
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 7,
                "end": 8
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
                        "start": 9,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 16
                    },
                    "flags": 536870944,
                    "transformFlags": 4,
                    "start": 9,
                    "end": 17
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 9,
                "end": 18
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "while (a) let [x];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `let 
 [` is a restricted production at the start of a statement - start: 9, end: 13

```

