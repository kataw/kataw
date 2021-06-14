# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/while
> :: test: while
> :: case: let
>          {}
## Options

`````js
{}
`````
## Input

`````js
while (a) let
{};
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
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 9,
                    "end": 13
                },
                "flags": 16,
                "start": 9,
                "end": 13
            },
            "flags": 80,
            "start": 0,
            "end": 13
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 15,
                "end": 15
            },
            "flags": 17,
            "start": 13,
            "end": 16
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 16,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "while (a) let\n{};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

while (a) let;
{
}

```

### Diagnostics

```javascript
✔ No errors
```

