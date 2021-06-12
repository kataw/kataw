# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\for-await-of_loop
> :: test: for-await-of loop
> :: case: let {x} = y
## Input

`````js
for await (a of b) let {x} = y
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
                "start": 0,
                "end": 3
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "start": 3,
                "end": 9
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 11,
                "end": 12
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 12,
                "end": 15
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 18,
                    "end": 22
                },
                "flags": 16,
                "start": 18,
                "end": 22
            },
            "flags": 80,
            "start": 0,
            "end": 22
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 24,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 24,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 24,
                "end": 25
            },
            "flags": 16,
            "start": 22,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "flags": 16,
            "start": 28,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "for await (a of b) let {x} = y",
    "fileName": "__root__",
    "flags": 0,
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
✖ Expected a `;` - start: 22, end: 24
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 28, end: 30

```

