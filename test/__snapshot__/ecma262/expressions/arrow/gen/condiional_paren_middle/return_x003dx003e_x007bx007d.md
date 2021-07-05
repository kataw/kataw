# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/condiional_paren_middle
> :: test: condiional_paren_middle
> :: case: return => {}
## Options

`````js
{}
`````
## Input

`````js
bar ? (return => {}) : baz;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 5,
                    "start": 32,
                    "end": 7
                },
                "colonToken": null,
                "alternate": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 7,
                    "end": 7
                },
                "flags": 96,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 7,
                "end": 13
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 13,
                "end": 13
            },
            "flags": 80,
            "start": 7,
            "end": 13
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 18,
                "end": 18
            },
            "flags": 16,
            "start": 16,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "baz",
                "rawText": "baz",
                "flags": 96,
                "start": 22,
                "end": 26
            },
            "flags": 16,
            "start": 22,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "bar ? (return => {}) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 7, end: 13
✖ A return statement can only be used within a function_body - start: 7, end: 13
✖ Identifier expected - start: 13, end: 16
✖ Declaration or statement expected - start: 19, end: 20
✖ Declaration or statement expected - start: 20, end: 22

```

