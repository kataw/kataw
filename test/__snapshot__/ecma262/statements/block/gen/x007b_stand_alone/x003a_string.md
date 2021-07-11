# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: : string
## Options

`````js
{}
`````
## Input

`````js
{ : string
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
                "statements": [],
                "flags": 16,
                "start": 1,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 3,
                "end": 10
            },
            "flags": 16,
            "start": 3,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "{ : string",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 2, end: 3

```

