# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\for-in_lhs
> :: test: for-in lhs
> :: case: arguments
## Input

`````js
for (arguments in x) ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "arguments",
                "rawText": "arguments",
                "flags": 96,
                "start": 5,
                "end": 14
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 14,
                "end": 17
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 20,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for (arguments in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

for (arguments in x);
```

### Diagnostics

```javascript
✔ No errors
```

