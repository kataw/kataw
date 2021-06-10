# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\for-in_lhs
> :: test: for-in lhs
> :: case: fooo`bar`
## Input

`````js
for (fooo`bar` in x) ;
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
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "fooo",
                    "rawText": "fooo",
                    "flags": 96,
                    "start": 5,
                    "end": 9
                },
                "template": {
                    "kind": 458761,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 134217824,
                    "start": 9,
                    "end": 14
                },
                "flags": 32,
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
            "flags": 80,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for (fooo`bar` in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

for (fooo`bar` in x);
```

### Diagnostics

```javascript
✔ No errors
```

