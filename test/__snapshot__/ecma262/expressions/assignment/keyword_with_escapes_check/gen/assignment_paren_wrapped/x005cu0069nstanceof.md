# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/assignment_paren_wrapped
> :: test: assignment paren wrapped
> :: case: \u0069nstanceof
## Options

`````js
{}
`````
## Input

`````js
(\u0069nstanceof = x);
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
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 1,
                            "end": 1
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 16480,
                            "start": 1,
                            "end": 16
                        },
                        "right": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 16480,
                        "start": 1,
                        "end": 16
                    },
                    "flags": 0,
                    "start": 32,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "flags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 21,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "(\\u0069nstanceof = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 16
✖ Identifier expected - start: 16, end: 18
✖ Expected a `;` - start: 20, end: 21

```

