# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: 0B0in
## Options

`````js
{}
`````
## Input

`````js
0B0in
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
                "kind": 201392130,
                "text": 0,
                "rawText": "0B0i",
                "flags": 524384,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "0B0in",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 0, end: 3
✖ '; ' is not allowed here. Did you mean ';'? - start: 4, end: 5

```

