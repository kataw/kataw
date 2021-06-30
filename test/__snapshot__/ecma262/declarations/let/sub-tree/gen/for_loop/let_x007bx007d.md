# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/for_loop
> :: test: for loop
> :: case: let
>          {}
## Options

`````js
{}
`````
## Input

`````js
for (;;) let
{}
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
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 8,
                    "end": 12
                },
                "flags": 16,
                "start": 8,
                "end": 12
            },
            "flags": 80,
            "start": 0,
            "end": 12
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 14,
                "end": 14
            },
            "flags": 17,
            "start": 12,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "for (;;) let\n{}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

for (;;)
  let;
{ }

```

### Diagnostics

```javascript
✔ No errors
```

