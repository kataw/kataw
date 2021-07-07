# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/conditional_paren
> :: test: conditional_paren
> :: case: return => {}
## Options

`````js
{}
`````
## Input

`````js
bar ? baz : ( return => {} );
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 13
                    },
                    "flags": 11,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 13
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "flags": 80,
            "transformFlags": 256,
            "start": 13,
            "end": 20
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 23,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 28,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "bar ? baz : ( return => {} );",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 13, end: 20
✖ A return statement can only be used within a function_body - start: 13, end: 20
✖ Identifier expected - start: 20, end: 23
✖ Declaration or statement expected - start: 26, end: 28

```

