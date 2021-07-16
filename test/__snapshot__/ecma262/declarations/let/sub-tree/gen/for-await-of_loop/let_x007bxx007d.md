# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/for-await-of_loop
> :: test: for-await-of loop
> :: case: let {x}
## Options

`````js
{}
`````
## Input

`````js
for await (a of b) let {x}
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
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 22
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 18,
                "end": 22
            },
            "flags": 80,
            "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 24,
                            "end": 25
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 24,
                        "end": 25
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 24,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for await (a of b) let {x}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'for-await-of' statement is only allowed within an async function or async generator. - start: 9, end: 11
✖ '; ' expected - start: 22, end: 24

```

