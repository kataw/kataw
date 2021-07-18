# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/assignment_unwrapped
> :: test: assignment unwrapped
> :: case: \u0064ebugger
## Options

`````js
{}
`````
## Input

`````js
\u0064ebugger = x;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 16464,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 15,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "\\u0064ebugger = x;",
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
✖ Keywords cannot contain escape characters - start: 0, end: 13
✖ '=' is not allowed here. Did you mean ';'? - start: 13, end: 15

```

