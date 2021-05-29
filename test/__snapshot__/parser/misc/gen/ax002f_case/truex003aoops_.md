# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/misc/autogen.md
- Path: kataw7/test\__snapshot__\parser\misc\gen\ax002f_case
> :: test: a/ case
> :: case: true:oops;
## Input

`````js
true:oops;
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
                "kind": 24752947,
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "oops",
                "rawText": "oops",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "flags": 16,
            "start": 5,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "true:oops;",
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
✖ Expected a `;` - start: 4, end: 5

```

