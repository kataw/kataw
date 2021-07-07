# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/assignmen
> :: test: assignmen
> :: case: return => {}
## Options

`````js
{}
`````
## Input

`````js
x = return => {} ;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 3
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 3
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 10,
                "end": 10
            },
            "flags": 80,
            "transformFlags": 256,
            "start": 3,
            "end": 10
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 16
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "x = return => {} ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 3, end: 10
✖ A return statement can only be used within a function_body - start: 3, end: 10
✖ Identifier expected - start: 10, end: 13

```

