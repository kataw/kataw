# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\new_arg
> :: test: new arg
> :: case: x in y
## Input

`````js
new x in y
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
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "argumentList": null,
                    "flags": 32,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 64,
                    "start": 5,
                    "end": 8
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "new x in y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

new  x() in y;
```

### Diagnostics

```javascript
✔ No errors
```

