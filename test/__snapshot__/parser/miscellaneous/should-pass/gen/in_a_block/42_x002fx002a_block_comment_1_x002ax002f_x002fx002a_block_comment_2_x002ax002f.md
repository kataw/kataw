# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: 42 /* block comment 1 */ /* block comment 2 */
## Input

`````js
{ 42 /* block comment 1 */ /* block comment 2 */ }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "{ 42 /* block comment 1 */ /* block comment 2 */ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

{
  42; /* block comment 1 */ /* block comment 2 */
}
```

### Diagnostics

```javascript
✔ No errors
```

