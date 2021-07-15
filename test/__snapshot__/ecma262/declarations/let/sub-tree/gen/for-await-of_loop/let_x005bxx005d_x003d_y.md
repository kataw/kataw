# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/for-await-of_loop
> :: test: for-await-of loop
> :: case: let [x] = y
## Options

`````js
{}
`````
## Input

`````js
for await (a of b) let [x] = y
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 12
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 12,
                "end": 15
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "transformFlags": 0,
                "start": 15,
                "end": 17
            },
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
                            "start": 18,
                            "end": 22
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 25
                        },
                        "flags": 536870944,
                        "transformFlags": 4,
                        "start": 18,
                        "end": 26
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 30
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 18,
                    "end": 30
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 18,
                "end": 30
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "for await (a of b) let [x] = y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'for-await-of' statement is only allowed within an async function or async generator. - start: 9, end: 11
✖ `let 
 [` is a restricted production at the start of a statement - start: 18, end: 24

```

