# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_keyword_as_a_var_name
> :: test: assign to keyword as a var name
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
in = x
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
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 2
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "in = x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 0, end: 2
✖ Identifier expected - start: 2, end: 4

```

