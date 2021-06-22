# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/for-in_lhs
> :: test: for-in lhs
> :: case: x in y
## Options

`````js
{}
`````
## Input

`````js
for (x in y in x) ;
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 6,
                "end": 9
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 11,
                    "end": 14
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "start": 9,
                "end": 16
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 17,
                "end": 19
            },
            "flags": 80,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "for (x in y in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

for (x in y in x);
```

### Diagnostics

```javascript
✔ No errors
```

