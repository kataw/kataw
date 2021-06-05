# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/misc/error-recovery/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\error-recovery\gen\ax002f_case
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

