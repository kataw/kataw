# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/conditional
> :: test: conditional
> :: case: return => {}
## Options

`````js
{}
`````
## Input

`````js
return => {} , bar;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 6,
                "end": 6
            },
            "flags": 80,
            "start": 0,
            "end": 6
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 11,
                "end": 11
            },
            "flags": 16,
            "start": 9,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "flags": 16,
            "start": 14,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "return => {} , bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Identifier expected - start: 6, end: 9
✖ Declaration or statement expected - start: 12, end: 14

```

